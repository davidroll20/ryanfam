import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { createEventId } from '@/components/EventCalendar/event-utils'
import type { Calendar, DateSelectArg } from '@fullcalendar/core'
import type FullCalendar from '@fullcalendar/vue3'

export const useEventStore = defineStore('event', () => {
  type DateSelectArgPlus = DateSelectArg & { title: string }
  const events = ref([])

  const calendarRef = ref<InstanceType<typeof FullCalendar>>()

  const calendarApi = computed(() => calendarRef.value?.getApi() as Calendar)

  const modal = {
    show: ref(false),
    title: ref('Create New Event'),
  }

  const newEvent: Ref<Partial<DateSelectArgPlus>> = ref({
    title: 'Some title',
    startStr: 'Date',
    endStr: 'Date',
    allDay: false,
  })

  const initializeNewEvent = (initialEvent: DateSelectArg) => {
    console.log('initialStr', initialEvent.startStr)
    newEvent.value.startStr = initialEvent.startStr
    // newEvent.value.endStr = initialEvent.endStr
    newEvent.value.allDay = initialEvent.allDay
    console.log('newEvent is', newEvent.value)
  }

  const openModal = (title: string) => {
    modal.title.value = title
    modal.show.value = true
  }

  const closeModal = () => {
    modal.show.value = false
  }

  const createEvent = (eventProps?: DateSelectArgPlus) => {
    const newEventProps = eventProps ?? newEvent.value
    calendarApi.value.addEvent({
      id: createEventId(),
      title: newEventProps.title,
      start: newEventProps.startStr,
      end: newEventProps.endStr,
      allDay: newEventProps.allDay,
    })
  }

  return {
    events,
    calendarRef,
    calendarApi,
    modal,
    newEvent,
    initializeNewEvent,
    openModal,
    closeModal,
    createEvent,
  }
})
