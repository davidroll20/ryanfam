import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { createEventId } from '@/components/EventCalendar/event-utils'
import type { Calendar, DateSelectArg, EventApi, EventInput } from '@fullcalendar/core'
import type FullCalendar from '@fullcalendar/vue3'
import type { EventImpl } from '@fullcalendar/core/internal'

export const useEventStore = defineStore('event', () => {
  type DateSelectArgPlus = DateSelectArg & { title: string; description: string }

  const initialEvents: Ref<EventInput[]> = ref([])
  const events: Ref<EventImpl[]> = ref([])

  const calendarRef = ref<InstanceType<typeof FullCalendar>>()

  const calendarApi = computed(() => calendarRef.value?.getApi() as Calendar)

  const newEvent: Ref<Partial<DateSelectArgPlus>> = ref({
    title: 'Some title',
    description: 'Some description',
    startStr: '2025-01-01',
    endStr: '2025-01-02',
    allDay: true,
  })

  const initializeNewEvent = (initialEvent: DateSelectArg) => {
    newEvent.value.title = ''
    newEvent.value.description = ''
    newEvent.value.startStr = initialEvent.startStr
    newEvent.value.endStr = initialEvent.endStr
    newEvent.value.allDay = initialEvent.allDay
  }

  const createEvent = (eventProps?: EventInput) => {
    const newEventProps = eventProps ?? newEvent.value
    const createdEvent = calendarApi.value.addEvent({
      id: createEventId(),
      title: newEventProps.title,
      start: newEventProps.startStr,
      end: newEventProps.endStr,
      allDay: newEventProps.allDay,
      extendedProps: { description: newEventProps.description },
    })

    if (createdEvent !== null) {
      console.log("what's the new event return?", createdEvent)
      //recordNewEvent(createdEvent)
      events.value.push(createdEvent)
      console.log('these are the events', events.value)
    }
  }

  const hydrateEvents = (eventsToLoad: EventInput[]) => {
    initialEvents.value = [...eventsToLoad]
    console.log('loaded events', initialEvents.value)
  }

  const recordNewEvent = (eventToRecord: EventImpl) => {
    const record: Partial<DateSelectArgPlus> = {
      id: eventToRecord.id,
      title: eventToRecord.title,
      description: eventToRecord.extendedProps.description,
      startStr: eventToRecord.startStr,
      endStr: eventToRecord.endStr,
      allDay: eventToRecord.allDay,
    }
    events.value.push(record)
  }

  const eventBeingEdited: Ref<Partial<DateSelectArgPlus>> = ref({})

  const setEventBeingEdited = (event: EventApi) => {
    eventBeingEdited.value.title = event.title
    eventBeingEdited.value.startStr = event.startStr
    eventBeingEdited.value.endStr = event.endStr
    eventBeingEdited.value.description = event.extendedProps.description
  }

  const saveEventChanges = (eventId: string) => {}

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
    events,
    initialEvents,
    calendarRef,
    calendarApi,
    newEvent,
    eventBeingEdited,
    initializeNewEvent,
    createEvent,
    hydrateEvents,
    modalNew,
    modalEdit,
    openModalNew,
    closeModalNew,
    openModalEdit,
    closeModalEdit,
  }
})
