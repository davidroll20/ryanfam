import { nanoid } from 'nanoid'

export const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

//deprecated, use only as example of minimal event shape
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00',
  },
]

export function createEventId() {
  return nanoid()
}
