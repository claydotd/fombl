import { meetings, volunteerSessions } from '../content/events'
import { isOnOrAfterToday } from './dates'

export type DiaryEntry = {
  id: string
  date: string
  title: string
  time?: string
  detail?: string
  text?: string
  tag?: string
  to: string
  contact?: string
}

function meetingEntry(meeting: (typeof meetings)[number]): DiaryEntry {
  return {
    id: meeting.id,
    date: meeting.date,
    title: meeting.title,
    time: meeting.time,
    detail: meeting.place,
    text: meeting.summary,
    tag: meeting.tag,
    to: `/events#${meeting.id}`,
  }
}

function saturdayEntry(session: (typeof volunteerSessions)[number]): DiaryEntry {
  return {
    id: `saturday-${session.date}`,
    date: session.date,
    title: 'Volunteer morning',
    time: '10:00am',
    detail: session.note,
    contact: session.contact,
    to: '/volunteering#saturday-sessions',
  }
}

/** Dated diary for the main calendar. Friday workdays are omitted — they appear only as the next session on the standing listing. */
export function comingUp(limit?: number): DiaryEntry[] {
  const upcomingMeetings = meetings
    .filter((meeting) => isOnOrAfterToday(meeting.date))
    .sort((a, b) => a.date.localeCompare(b.date))

  const upcomingSaturdays = volunteerSessions
    .filter((session) => isOnOrAfterToday(session.date))
    .sort((a, b) => a.date.localeCompare(b.date))

  const items = [
    ...(limit === undefined ? upcomingMeetings.slice(0, 1) : upcomingMeetings).map(meetingEntry),
    ...(limit === undefined ? upcomingSaturdays.slice(0, 1) : upcomingSaturdays).map(saturdayEntry),
  ].sort((a, b) => a.date.localeCompare(b.date))

  return limit === undefined ? items : items.slice(0, limit)
}
