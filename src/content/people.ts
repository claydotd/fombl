// Board and other roles, following the public Who's who page.
// The 2024–25 annual report still names Jim Orr as chair. Confirm this list after each AGM.

export type Person = {
  role: string
  name: string
  email?: string
  note?: string
}

export const board: Person[] = [
  { role: 'Chair', name: 'Vacant' },
  { role: 'Vice Chair', name: 'Joan Carter' },
  { role: 'Secretary', name: 'Neill Walker', email: 'secretary@fombl.org.uk' },
  {
    role: 'Treasurer',
    name: 'Alison Service',
    email: 'fombltreas@fombl.org.uk',
    note: 'Marchmont and Sciennes Community Council',
  },
  {
    role: 'Membership secretary',
    name: 'Alison Service',
    email: 'membership@fombl.org.uk',
  },
  { role: 'Project manager', name: 'Neil Roger', email: 'projects@fombl.org.uk' },
  { role: 'Newsletter editor', name: 'Maureen Parnell', email: 'newsletter@fombl.org.uk' },
  { role: 'Trustee', name: 'Iain Black', note: 'Tollcross Community Council' },
  { role: 'Trustee', name: 'Bridget Stevens', note: 'Merchiston Community Council' },
]

export const otherRoles: Person[] = [
  {
    role: 'Volunteer co-ordinators',
    name: 'Alison Carr, Maureen Parnell, and Neil Roger',
    email: 'projects@fombl.org.uk',
  },
  { role: 'Webmaster', name: 'Clay Leslie', email: 'webmaster@fombl.org.uk' },
]
