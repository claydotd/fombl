export type Meeting = {
  id: string
  kind: string
  title: string
  date: string
  time?: string
  place: string
  summary: string
  tag?: string
}

export type RecurringVolunteer = {
  id: string
  title: string
  when: string
  time?: string
  where?: string
  /** Shown as contact for meeting place / questions. */
  contact?: string
  text: string
}

export type VolunteerSession = {
  date: string
  note?: string
  /** Linked to /contact when set. */
  contact?: string
}

export type FridaySession = {
  date: string
  time?: string
  place?: string
  note?: string
  contact?: string
}

type MeetingFile = Omit<Meeting, 'id'>

type SessionFile = {
  day: 'friday' | 'saturday'
  date: string
  time?: string
  place?: string
  note?: string
  contact?: string
}

function fileId(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.json$/, '')
}

const meetingModules = import.meta.glob<{ default: MeetingFile }>('./data/meetings/*.json', {
  eager: true,
})

const sessionModules = import.meta.glob<{ default: SessionFile }>('./data/sessions/*.json', {
  eager: true,
})

export const meetings: Meeting[] = Object.entries(meetingModules)
  .map(([path, mod]) => ({ id: fileId(path), ...mod.default }))
  .sort((a, b) => b.date.localeCompare(a.date))

const sessions: SessionFile[] = Object.values(sessionModules).map((mod) => mod.default)

/** Standing volunteering activities shown as recurring listings. Friday first. */
export const recurringVolunteering: RecurringVolunteer[] = [
  {
    id: 'tree-group',
    title: 'Friday volunteer day',
    when: 'Every Friday',
    time: '1:30pm',
    where:
      'Usually either at The Links green store (at the rear of the Bruntsfield public toilets) or at the rear of the Pavilion Cafe beside Melville Drive, opposite Marchmont Road',
    contact: 'projects@fombl.org.uk',
    text: 'The Friday group plants and maintains the young tree stock, and also looks after the wildflower meadows, copse maintenance and bulb planting.',
  },
  {
    id: 'saturday-sessions',
    title: 'Saturday volunteer sessions',
    when: 'Last Saturday of the month',
    time: '10:00am',
    where: 'Please check for meeting place',
    contact: 'projects@fombl.org.uk',
    text: 'Saturday mornings are mainly litter picking, grass edge ingress removal, graffiti removal, leaf clearing and similar park-upkeep jobs. All welcome.',
  },
]

/** Dated Saturday volunteer mornings (one-off calendar entries). */
export const volunteerSessions: VolunteerSession[] = sessions
  .filter((session) => session.day === 'saturday')
  .map(({ date, note, contact }) => ({ date, note, contact }))
  .sort((a, b) => a.date.localeCompare(b.date))

/** Dated Friday volunteer sessions (time and meeting place for the next ones). */
export const fridaySessions: FridaySession[] = sessions
  .filter((session) => session.day === 'friday')
  .map(({ date, time, place, note, contact }) => ({ date, time, place, note, contact }))
  .sort((a, b) => a.date.localeCompare(b.date))
