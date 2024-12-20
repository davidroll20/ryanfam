import { parseISO } from 'date-fns';
import { format, fromZonedTime } from 'date-fns-tz';
import { nanoid } from 'nanoid';

export const todayStr = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today

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
];

export function createEventId() {
  return nanoid();
}

/** Takes an ISO datetime string and returns only the date portion, e.g. 2024-12-04T02:32:00 -> 2024-12-04 */
export function getDateFromISODateTime(datetime: string) {
  if (!datetime) throw `Invalid datetime provided: ${datetime}`;
  return datetime.toString().split('T')[0];
}

/** Takes an ISO datetime string and returns only the time portion, e.g. 2024-12-04T02:32:00 -> 02:32:00 */
export function getTimeFromISODateTime(datetime: string) {
  if (!datetime) throw `Invalid datetime provided: ${datetime}`;
  const split = datetime.toString().split('T');
  return split[1] ?? '00:00:00';
}

// const formatInTimeZone = (date: Date, fmt: string, tz: string) =>
//   format(toZonedTime(date, tz), fmt, { timeZone: tz })

// const formatInUTC = (date: Date, fmt: string, tz: string) =>
//   format(fromZonedTime(date, tz), fmt, { timeZone: tz })

const convertDateToUTCISO = (date: Date, timezone: string) => {
  return fromZonedTime(date, timezone).toISOString();
};

// const convertDateToTZISO = (date: Date, timezone: string) => {
//   return toZonedTime(date, timezone).toISOString()
// }

/** Adds a UTC suffix to a datetime. For use when handling a known
 * sanitized UTC datetime, for the purpose of restoring its UTC
 * status before operations */
export function forceUTC(datetime: string) {
  if (datetime.includes('T')) {
    return datetime + '.000Z';
  }
  return datetime + 'T00:00:00.000Z';
}

/** Removes the UTC suffix from a UTC ISO datetime string representation. */
export function stripUTC(datetime: string) {
  return datetime.split('.')[0];
}

/** Takes a string representation of a datetime and converts it
 * into an ISO UTC string without the UTC .000Z suffix */
export function convertLocalToUTC(datetime: string) {
  const parsedDateTime = parseISO(datetime);
  // console.log('parsed from local', parsedDateTime) // 2019-10-25T08:10:00.000Z
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const utcISO = convertDateToUTCISO(parsedDateTime, timezone);

  const trimmedDateTimeUTC = stripUTC(utcISO);
  return trimmedDateTimeUTC;
}

/** Takes a UTC datetime string (must include .000Z append for accurate results)
 *  and converts it to local time in the format of 2025-12-04T02:32:00 */
export function convertUTCToLocal(datetime: string) {
  const parsedDateTime = parseISO(datetime);
  const formattedDateTZ = format(parsedDateTime, "yyyy-MM-dd'T'HH:mm:ss");

  return formattedDateTZ;
}

export function combineDateAndTime(date: string, time: string) {
  return date + 'T' + time;
}

type TimeOption = {
  value: string;
  display: string;
};
export const timeOptions: TimeOption[] = [
  {
    value: '00:00:00',
    display: '12:00 AM',
  },
  {
    value: '01:00:00',
    display: '1:00 AM',
  },
  {
    value: '02:00:00',
    display: '2:00 AM',
  },
  {
    value: '03:00:00',
    display: '3:00 AM',
  },
  {
    value: '04:00:00',
    display: '4:00 AM',
  },
  {
    value: '05:00:00',
    display: '5:00 AM',
  },
  {
    value: '06:00:00',
    display: '6:00 AM',
  },
  {
    value: '07:00:00',
    display: '7:00 AM',
  },
  {
    value: '08:00:00',
    display: '8:00 AM',
  },
  {
    value: '09:00:00',
    display: '9:00 AM',
  },
  {
    value: '10:00:00',
    display: '10:00 AM',
  },
  {
    value: '11:00:00',
    display: '11:00 AM',
  },
  {
    value: '12:00:00',
    display: '12:00 PM',
  },
  {
    value: '13:00:00',
    display: '1:00 PM',
  },
  {
    value: '14:00:00',
    display: '2:00 PM',
  },
  {
    value: '15:00:00',
    display: '3:00 PM',
  },
  {
    value: '16:00:00',
    display: '4:00 PM',
  },
  {
    value: '17:00:00',
    display: '5:00 PM',
  },
  {
    value: '18:00:00',
    display: '6:00 PM',
  },
  {
    value: '19:00:00',
    display: '7:00 PM',
  },
  {
    value: '20:00:00',
    display: '8:00 PM',
  },
  {
    value: '21:00:00',
    display: '9:00 PM',
  },
  {
    value: '22:00:00',
    display: '10:00 PM',
  },
  {
    value: '23:00:00',
    display: '11:00 PM',
  },
];
