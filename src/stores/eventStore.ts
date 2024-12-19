import { computed, ref, watch, type Ref } from 'vue'
import { defineStore } from 'pinia'
import {
  createEventId,
  getDateFromISODateTime,
  getTimeFromISODateTime,
} from '@/components/EventCalendar/event-utils'
import type { Calendar, DateSelectArg, EventApi, EventInput } from '@fullcalendar/core'
import type FullCalendar from '@fullcalendar/vue3'
import { db, ryanFamCalendarRef, ryanFamCollection } from '@/firebase'
import type { EventImpl } from '@fullcalendar/core/internal'
import { deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore'
import { useCollection } from 'vuefire'

export const useEventStore = defineStore('event', () => {
  type DateSelectArgPlus = {
    title: string
    description: string
    startDateStr: string
    startTimeStr: string
    endDateStr: string
    endTimeStr: string
    allDay: boolean
  }
  type CustomEventInput = {
    id: string
    title: string
    description: string
    startStr: string
    endStr?: string
    allDay: boolean
  }

  const initialEvents: Ref<EventInput[]> = ref([])
  const calendarEvents: Ref<EventInput[]> = ref([])

  const calendarRef = ref<InstanceType<typeof FullCalendar>>()

  const calendarApi = computed(() => calendarRef.value?.getApi() as Calendar)

  const newEvent: Ref<Partial<DateSelectArgPlus>> = ref({
    title: 'Some title',
    description: 'Some description',
    startDateStr: '2025-01-01',
    startTimeStr: 'T00:00:00',
    endDateStr: '2025-01-02',
    endTimeStr: 'T00:00:00',
    allDay: true,
  })

  const initializeNewEvent = (initialEvent: DateSelectArg) => {
    newEvent.value.title = ''
    newEvent.value.description = ''
    newEvent.value.startDateStr = getDateFromISODateTime(initialEvent.startStr)
    newEvent.value.startTimeStr = getTimeFromISODateTime(initialEvent.startStr)
    newEvent.value.endDateStr = getDateFromISODateTime(initialEvent.endStr)
    newEvent.value.endTimeStr = getTimeFromISODateTime(initialEvent.endStr)
    newEvent.value.allDay = initialEvent.allDay
    console.log('new event is', newEvent)
  }

  const sanitizeEventInput = (eventInput: EventInput): EventInput => {
    return {
      id: eventInput.id ?? createEventId(),
      title: eventInput.title ?? 'Untitled',
      start: eventInput.startStr,
      end: eventInput.endStr,
      allDay: eventInput.allDay ?? false,
      extendedProps: { description: eventInput.description },
    }
  }

  const createEvent = (eventProps?: EventInput) => {
    const newEventProps = eventProps ?? newEvent.value
    const id = createEventId()
    const event = sanitizeEventInput({ id, ...newEventProps })
    createCalendarDocument(event)
  }

  const eventBeingEdited: Ref<CustomEventInput | null> = ref({} as CustomEventInput)

  const setEventBeingEdited = (event: EventApi) => {
    eventBeingEdited.value = {
      id: event.id,
      title: event.title,
      startStr: event.startStr,
      endStr: event.endStr,
      description: event.extendedProps.description,
      allDay: event.allDay,
    }
  }

  const saveEventChanges = () => {
    if (!eventBeingEdited.value) return
    const editedEvent = calendarApi.value.getEventById(eventBeingEdited.value.id)
    if (!editedEvent) {
      console.error('No event found with id', eventBeingEdited.value.id)
      return
    }
    editedEvent.setProp('title', eventBeingEdited.value.title)
    editedEvent.setStart(eventBeingEdited.value.startStr)
    editedEvent.setEnd(eventBeingEdited.value.endStr ?? '')
    editedEvent.setAllDay(eventBeingEdited.value.allDay)
    editedEvent.setExtendedProp('description', eventBeingEdited.value.description)
    updateCalendarDocument(editedEvent)
  }

  const deleteEventById = (eventId: string) => {
    const editedEvent = calendarApi.value.getEventById(eventId)
    if (!editedEvent) {
      console.error('No event found with id', eventId)
      return
    }
    editedEvent.remove()
    deleteCalendarDocument(eventId)
  }

  const resetEventBeingEdited = () => {
    eventBeingEdited.value = null
  }

  // #region Firebase Integration

  const firebaseEvents = useCollection(ryanFamCalendarRef)

  watch(
    firebaseEvents,
    (newVals) => {
      const converted: EventInput[] = []
      newVals.forEach((eventFromDb) => converted.push(sanitizeEventInput(eventFromDb)))
      calendarEvents.value = [...converted]
      const eventSource = calendarApi.value.getEventSourceById('main')
      eventSource?.remove()
      calendarApi.value.addEventSource({ events: calendarEvents.value, id: 'main' })
    },
    { deep: true },
  )

  async function createCalendarDocument(event: EventInput) {
    const newCalendarDocument = {
      id: event.id ?? createEventId(),
      title: event.title,
      description: event.extendedProps?.description ?? '',
      startStr: event.startStr || event.start,
      endStr: event.endStr || event.end,
      allDay: event.allDay,
    }

    const calendarDocRef = doc(db, ryanFamCollection.CALENDAR, newCalendarDocument.id)

    await setDoc(calendarDocRef, newCalendarDocument)
  }

  async function updateCalendarDocument(event: EventImpl) {
    if (!event.id) {
      console.error('Cannot update event with no id.')
      return
    }
    const updatedCalendarDocument = {
      id: event.id,
      title: event.title,
      description: event.extendedProps?.description ?? '',
      startStr: event.startStr,
      endStr: event.endStr,
      allDay: event.allDay,
    }

    const calendarDocRef = doc(db, ryanFamCollection.CALENDAR, updatedCalendarDocument.id)

    await updateDoc(calendarDocRef, updatedCalendarDocument)
  }

  async function deleteCalendarDocument(id: string) {
    await deleteDoc(doc(db, ryanFamCollection.CALENDAR, id))
  }

  // #region Modals

  const modalNew = {
    show: ref(false),
    title: ref('Create New Event'),
  }

  const modalEdit = {
    show: ref(false),
    title: ref('Edit Event'),
  }

  const openModalNew = (title: string) => {
    modalNew.title.value = title
    modalNew.show.value = true
  }

  const closeModalNew = () => {
    modalNew.show.value = false
  }

  const openModalEdit = (title: string, eventToEdit: EventApi) => {
    setEventBeingEdited(eventToEdit)
    modalEdit.title.value = title
    modalEdit.show.value = true
  }

  const closeModalEdit = () => {
    modalEdit.show.value = false
  }

  return {
    calendarEvents,
    initialEvents,
    calendarRef,
    calendarApi,
    newEvent,
    eventBeingEdited,
    initializeNewEvent,
    createEvent,
    saveEventChanges,
    deleteEventById,
    resetEventBeingEdited,
    modalNew,
    modalEdit,
    openModalNew,
    closeModalNew,
    openModalEdit,
    closeModalEdit,
  }
})
