import { computed, ref, watch, type Ref } from 'vue';
import { defineStore } from 'pinia';
import {
  combineDateAndTime,
  convertLocalToUTC,
  convertUTCToLocal,
  createEventId,
  forceUTC,
  getDateFromISODateTime,
  getTimeFromISODateTime,
} from '@/components/EventCalendar/event-utils';
import type { Calendar, DateSelectArg, EventApi, EventInput } from '@fullcalendar/core';
import type FullCalendar from '@fullcalendar/vue3';
import { db, ryanFamCalendarRef, ryanFamCollection } from '@/firebase';
import type { EventImpl } from '@fullcalendar/core/internal';
import { deleteDoc, doc, setDoc, updateDoc, type DocumentData } from 'firebase/firestore';
import { useCollection } from 'vuefire';

export const useEventStore = defineStore('event', () => {
  type EventFromDB = {
    id: string;
    title: string;
    description: string;
    startStr: string;
    endStr: string;
    allDay: boolean;
  };

  type EventFromUI = {
    id?: string;
    title: string;
    description: string;
    startDateStr: string;
    startTimeStr: string;
    endDateStr: string;
    endTimeStr: string;
    allDay: boolean;
  };

  const calendarEvents: Ref<EventInput[]> = ref([]);
  const calendarRef = ref<InstanceType<typeof FullCalendar>>();
  const calendarApi = computed(() => calendarRef.value?.getApi() as Calendar);

  //#region New Event Handling

  /** A persistent object wired up the the fields on the NewEventModal */
  const newEvent: Ref<EventFromUI> = ref({
    title: 'Some title',
    description: 'Some description',
    startDateStr: '2025-01-01',
    startTimeStr: 'T00:00:00',
    endDateStr: '2025-01-02',
    endTimeStr: 'T00:00:00',
    allDay: true,
  });

  /** Fired when a new event is created, passing along FullCalendar props to newEvent */
  const initializeNewEvent = (initialEvent: DateSelectArg) => {
    newEvent.value.title = '';
    newEvent.value.description = '';
    newEvent.value.startDateStr = getDateFromISODateTime(initialEvent.startStr);
    newEvent.value.startTimeStr = getTimeFromISODateTime(initialEvent.startStr);
    newEvent.value.endDateStr = getDateFromISODateTime(initialEvent.endStr);
    newEvent.value.endTimeStr = getTimeFromISODateTime(initialEvent.endStr);
    newEvent.value.allDay = initialEvent.allDay;
    console.log('new event is', newEvent);
  };

  /** Fired upon completion of a new event, translating to firebase format and adding to firebase */
  const finalizeAndAddNewEvent = () => {
    const newEventProps = newEvent.value;
    const event = translateEventFromAppToDB({ ...newEventProps });
    createCalendarDocument(event);
  };

  //#region Existing/Edit Event Handling

  const eventBeingEdited: Ref<EventFromUI | null> = ref({} as EventFromUI);

  const setEventBeingEdited = (event: EventApi) => {
    eventBeingEdited.value = {
      id: event.id,
      title: event.title,
      startDateStr: getDateFromISODateTime(event.startStr),
      startTimeStr: getTimeFromISODateTime(event.startStr),
      endDateStr: getDateFromISODateTime(event.endStr),
      endTimeStr: getTimeFromISODateTime(event.endStr),
      description: event.extendedProps.description,
      allDay: event.allDay,
    };
  };

  const saveEventChanges = () => {
    if (!eventBeingEdited.value) return;
    const editedEvent = calendarApi.value.getEventById(eventBeingEdited.value.id ?? '');
    if (!editedEvent) {
      console.error('No event found with id', eventBeingEdited.value.id);
      return;
    }
    editedEvent.setProp('title', eventBeingEdited.value.title);
    editedEvent.setStart(
      combineDateAndTime(eventBeingEdited.value.startDateStr, eventBeingEdited.value.startTimeStr),
    );
    editedEvent.setEnd(
      combineDateAndTime(eventBeingEdited.value.endDateStr, eventBeingEdited.value.endTimeStr),
    );
    editedEvent.setAllDay(eventBeingEdited.value.allDay);
    editedEvent.setExtendedProp('description', eventBeingEdited.value.description);
    updateCalendarDocument(editedEvent);
  };

  const deleteEventById = (eventId: string) => {
    const editedEvent = calendarApi.value.getEventById(eventId);
    if (!editedEvent) {
      console.error('No event found with id', eventId);
      return;
    }
    editedEvent.remove();
    deleteCalendarDocument(eventId);
  };

  const resetEventBeingEdited = () => {
    eventBeingEdited.value = null;
  };

  //#region Event translation

  const translateEventFromDBToApp = (eventFromDb: EventFromDB): EventInput => {
    const toTranslate: EventFromDB = { ...eventFromDb };
    const translatedToFCEvent: EventInput = {
      id: toTranslate.id,
      title: toTranslate.title ?? 'Untitled',
      start: convertUTCToLocal(forceUTC(toTranslate.startStr)),
      end: convertUTCToLocal(forceUTC(toTranslate.endStr)),
      allDay: toTranslate.allDay ?? false,
      extendedProps: { description: toTranslate.description },
    };
    return translatedToFCEvent;
  };

  const translateEventFromAppToDB = (eventFromApp: EventFromUI): EventFromDB => {
    const translated = {
      ...eventFromApp,
      id: eventFromApp.id ?? createEventId(),
      title: eventFromApp.title,
      description: eventFromApp.description,
      startStr: combineDateAndTime(eventFromApp.startDateStr, eventFromApp.startTimeStr),
      endStr: combineDateAndTime(eventFromApp.endDateStr, eventFromApp.endTimeStr),
      allDay: eventFromApp.allDay,
    };
    translated.startStr = convertLocalToUTC(translated.startStr);
    translated.endStr = convertLocalToUTC(translated.endStr);
    return translated;
  };

  // #region Firebase Integration

  const firebaseEvents = useCollection(ryanFamCalendarRef);

  watch(
    firebaseEvents,
    (newVals) => {
      const converted: EventInput[] = [];
      (newVals as EventFromDB[]).forEach((eventFromDb) => {
        converted.push(translateEventFromDBToApp(eventFromDb));
      });
      calendarEvents.value = [...converted];
      const eventSource = calendarApi.value.getEventSourceById('main');
      eventSource?.remove();
      calendarApi.value.addEventSource({ events: calendarEvents.value, id: 'main' });
    },
    { deep: true },
  );

  async function createCalendarDocument(event: EventFromDB) {
    const newCalendarDocument = {
      id: event.id ?? createEventId(),
      title: event.title,
      description: event.description ?? '',
      startStr: event.startStr,
      endStr: event.endStr,
      allDay: event.allDay,
    };

    const calendarDocRef = doc(db, ryanFamCollection.CALENDAR, newCalendarDocument.id);

    await setDoc(calendarDocRef, newCalendarDocument);
  }

  async function updateCalendarDocument(event: EventImpl) {
    if (!event.id) {
      console.error('Cannot update event with no id.');
      return;
    }
    const updatedCalendarDocument = {
      id: event.id,
      title: event.title,
      description: event.extendedProps?.description ?? '',
      startStr: convertLocalToUTC(event.startStr),
      endStr: convertLocalToUTC(event.endStr),
      allDay: event.allDay,
    };

    const calendarDocRef = doc(db, ryanFamCollection.CALENDAR, updatedCalendarDocument.id);

    await updateDoc(calendarDocRef, updatedCalendarDocument);
  }

  async function deleteCalendarDocument(id: string) {
    await deleteDoc(doc(db, ryanFamCollection.CALENDAR, id));
  }

  // #region Modals

  const modalNew = {
    show: ref(false),
    title: ref('Create New Event'),
  };

  const modalEdit = {
    show: ref(false),
    title: ref('Edit Event'),
  };

  const openModalNew = (title: string) => {
    modalNew.title.value = title;
    modalNew.show.value = true;
  };

  const closeModalNew = () => {
    modalNew.show.value = false;
  };

  const openModalEdit = (title: string, eventToEdit: EventApi) => {
    setEventBeingEdited(eventToEdit);
    modalEdit.title.value = title;
    modalEdit.show.value = true;
  };

  const closeModalEdit = () => {
    modalEdit.show.value = false;
  };

  return {
    calendarEvents,
    calendarRef,
    calendarApi,
    newEvent,
    eventBeingEdited,
    initializeNewEvent,
    finalizeAndAddNewEvent,
    saveEventChanges,
    deleteEventById,
    resetEventBeingEdited,
    modalNew,
    modalEdit,
    openModalNew,
    closeModalNew,
    openModalEdit,
    closeModalEdit,
  };
});
