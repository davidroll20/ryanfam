import { createEventId, todayStr } from '@/components/EventCalendar/event-utils'
import type { EventInput } from '@fullcalendar/core'

const event1: EventInput = {
  id: createEventId(),
  title: 'Event 1',
  extendedProps: {
    description: 'This is an all-day dummy event',
  },
  start: '2024-12-12',
  end: '',
  allDay: true,
}

const event2: EventInput = {
  id: createEventId(),
  title: 'Event 2',
  extendedProps: {
    description: 'This is a multi-day dummy event',
  },
  start: '2024-12-14',
  end: '2024-12-16',
  allDay: true,
}

const event3: EventInput = {
  id: createEventId(),
  title: 'Event 3',
  extendedProps: {
    description: 'This is yet another dummy event, always at 7:00 am today',
  },
  start: todayStr + 'T07:00:00',
  // end: '2024-12-17T05:00:00',
  allDay: false,
}

const event4: EventInput = {
  id: createEventId(),
  title: 'Event 2',
  extendedProps: {
    description: 'This is a multi-day dummy event with start and stop times',
  },
  start: '2024-12-18T17:30:00',
  end: '2024-12-20T09:00:00',
  allDay: false,
}

export const dummyEvents = [event1, event2, event3, event4]
