// Identity and navigation.
// Page copy that changes often lives next to the page, or in the other files in this folder.

export const site = {
  name: 'Friends of the Meadows and Bruntsfield Links',
  shortName: 'FoMBL',
  charityNumber: 'SC045955',
  charityForm: 'Scottish Charitable Incorporated Organisation',
  registered: '3 September 2015',
  regulator: 'OSCR',
  area: 'The Meadows and Bruntsfield Links, Edinburgh',
  liveUrl: 'https://analoguegonedigital.co.uk/fombl',
  oscrUrl:
    'https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC045955',
  mapUrl: 'https://www.openstreetmap.org/search?query=The%20Meadows%20Edinburgh',
} as const

export const isPrototype = import.meta.env.VITE_SITE_PHASE !== 'live'

export const nav = [
  { to: '/', label: 'Home' },
  {
    to: '/whos-who',
    label: 'Board',
    children: [
      { to: '/whos-who', label: "Who's Who" },
      { to: '/whos-who#constitution', label: 'Constitution' },
      { to: '/whos-who#reports', label: 'Documents' },
      { to: '/projects', label: 'Projects' },
    ],
  },
  { to: '/events', label: 'Events' },
  {
    to: '/about',
    label: 'About',
    children: [
      { to: '/about', label: 'History and Archaeology' },
      { to: '/about#bruntsfield-links', label: 'Bruntsfield Links' },
      { to: '/about#the-meadows', label: 'The Meadows' },
      { to: '/about#archaeology', label: 'Archaeology' },
      { to: '/about/helen-acquroff', label: 'Helen Acquroff Fountain' },
      { to: '/about/international-exhibition', label: '1886 International Exhibition' },
      { to: '/about/nelson-pillars', label: 'The Nelson Pillars' },
      { to: '/about/mural', label: 'Mural on the Meadows' },
      { to: '/about/the-jawbones', label: 'The Jawbones' },
      { to: '/about/play', label: 'Playgrounds' },
      { to: '/about/wildflower-meadows', label: 'Wildflower Meadows' },
      { to: '/about#character-appraisal', label: 'Conservation Area Character Appraisal' },
      { to: '/about#pictures', label: 'Historical Pictures' },
    ],
  },
  { to: '/news', label: 'News' },
  { to: '/membership', label: 'Membership' },
  {
    to: '/volunteering',
    label: 'Volunteer',
    children: [
      { to: '/volunteering', label: 'Volunteering' },
      { to: '/tree-group', label: 'Tree Group' },
    ],
  },
  { to: '/contact', label: 'Contact' },
] as const

export const contacts = [
  { label: 'Secretary', email: 'secretary@fombl.org.uk' },
  { label: 'Membership', email: 'membership@fombl.org.uk' },
  { label: 'Projects and volunteering', email: 'projects@fombl.org.uk' },
  { label: 'Newsletter', email: 'newsletter@fombl.org.uk' },
  { label: 'Treasurer', email: 'fombltreas@fombl.org.uk' },
] as const

export function pageTitle(title?: string) {
  return title ? `${title} · ${site.shortName}` : site.name
}
