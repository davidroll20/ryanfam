import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { createEventId } from '@/components/EventCalendar/event-utils'
import type { Calendar, DateSelectArg, EventApi, EventInput } from '@fullcalendar/core'
import type FullCalendar from '@fullcalendar/vue3'
// import type { EventImpl } from '@fullcalendar/core/internal'

export const useEventStore = defineStore('event', () => {
  type DateSelectArgPlus = DateSelectArg & { title: string; description: string }
  type CustomEventInput = {
    id: string
    title: string
    description: string
    startStr: string
    endStr?: string
    allDay: boolean
  }

  const initialEvents: Ref<EventInput[]> = ref([])
  // const events: Ref<EventImpl[]> = ref([])

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
      //events.value.push(createdEvent)
      console.log('these are the events', calendarApi.value.getEvents())
    }
  }

  const hydrateEvents = (eventsToLoad: EventInput[]) => {
    initialEvents.value = [...eventsToLoad]
    console.log('loaded events', initialEvents.value)
  }

  // const recordNewEvent = (eventToRecord: EventImpl) => {
  //   const record: Partial<DateSelectArgPlus> = {
  //     id: eventToRecord.id,
  //     title: eventToRecord.title,
  //     description: eventToRecord.extendedProps.description,
  //     startStr: eventToRecord.startStr,
  //     endStr: eventToRecord.endStr,
  //     allDay: eventToRecord.allDay,
  //   }
  //   events.value.push(record)
  // }

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
  }

  const deleteEventById = (eventId: string) => {
    const editedEvent = calendarApi.value.getEventById(eventId)
    if (!editedEvent) {
      console.error('No event found with id', eventId)
      return
    }
    editedEvent.remove()
  }

  const resetEventBeingEdited = () => {
    eventBeingEdited.value = null
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
    // events,
    initialEvents,
    calendarRef,
    calendarApi,
    newEvent,
    eventBeingEdited,
    initializeNewEvent,
    createEvent,
    hydrateEvents,
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
