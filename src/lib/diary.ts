import { meetings, volunteerSessions } from '../content/events'
import { isOnOrAfterToday } from './dates'

export type DiaryEntry = {
  id: string
  date: string
  title: string
  time?: string
  detail: string
  text?: string
  to: string
}

function meetingEntry(meeting: (typeof meetings)[number]): DiaryEntry {
  return {
    id: meeting.id,
    date: meeting.date,
    title: meeting.title,
    time: meeting.time,
    detail: meeting.place,
    text: meeting.summary,
    to: `/events#${meeting.id}`,
  }
}

function sessionEntry(session: (typeof volunteerSessions)[number]): DiaryEntry {
  return {
    id: session.date,
    date: session.date,
    title: 'Volunteer morning',
    time: '10:00am',
    detail: session.note ? `Cricket Pavilion. ${session.note}` : 'Cricket Pavilion',
    to: '/volunteering',
  }
}

export function comingUp(limit?: number): DiaryEntry[] {
  const upcomingMeetings = meetings
    .filter((meeting) => isOnOrAfterToday(meeting.date))
    .sort((a, b) => a.date.localeCompare(b.date))

  const upcomingSessions = volunteerSessions.filter((session) => isOnOrAfterToday(session.date))

  const items = [
    ...(limit === undefined ? upcomingMeetings.slice(0, 1) : upcomingMeetings).map(meetingEntry),
    ...(limit === undefined ? upcomingSessions.slice(0, 1) : upcomingSessions).map(sessionEntry),
  ].sort((a, b) => a.date.localeCompare(b.date))

  return limit === undefined ? items : items.slice(0, limit)
}
