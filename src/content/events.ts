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

export const meetings: Meeting[] = [
  {
    id: 'xmas-party-2026',
    kind: 'Party',
    title: 'Xmas party for members and volunteers',
    date: '2026-12-14',
    time: '6:00–8:30pm',
    place: 'Meadows Croquet Club',
    summary: 'Drinks and light snacks provided.',
    tag: 'Members and Invite Only',
  },
  {
    id: 'agm-2026',
    kind: 'AGM',
    title: 'Annual general meeting 2026',
    date: '2026-06-19',
    time: '6:00pm',
    place: 'German Church, Chalmers Crescent',
    summary:
      'Business meeting, followed by a talk from Dr Pen Lee Yap, the first convener, about his years in the role from 2001.',
  },
  {
    id: 'agm-2025',
    kind: 'AGM',
    title: 'Annual general meeting 2025',
    date: '2025-09-26',
    place: 'German Church, Chalmers Crescent',
    summary:
      'Andy Arthur gave an illustrated talk, “A history of the Meadows”.',
  },
  {
    id: 'agm-2024',
    kind: 'AGM',
    title: 'Annual general meeting 2024',
    date: '2024-06-28',
    place: 'Meadows Croquet Club',
    summary:
      'Prof David Purdie spoke on “The Burnses, father and son, and the Meadows”.',
  },
]

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
export const volunteerSessions: VolunteerSession[] = [
  { date: '2026-01-31' },
  { date: '2026-02-28' },
  { date: '2026-03-28' },
  { date: '2026-04-25' },
  { date: '2026-05-30' },
  { date: '2026-06-27' },
  { date: '2026-07-25' },
  { date: '2026-08-29' },
  { date: '2026-09-26' },
  { date: '2026-10-31' },
  {
    date: '2026-11-28',
    note: 'All welcome to join Alison Carr for another fun and enjoyable morning — meet at the rear of the Pavilion cafe beside the car park gate (off Melville Drive)',
    contact: 'Contact projects@fombl.org.uk if you have any questions',
  },
  { date: '2026-12-26' },
]
