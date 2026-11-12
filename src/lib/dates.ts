const london = 'Europe/London'

function dateFromIso(iso: string) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(Date.UTC(year, month - 1, day || 15))
}

export function formatDate(iso: string) {
  const options: Intl.DateTimeFormatOptions =
    iso.length === 7
      ? { month: 'long', year: 'numeric', timeZone: london }
      : { day: 'numeric', month: 'long', year: 'numeric', timeZone: london }
  return new Intl.DateTimeFormat('en-GB', options).format(dateFromIso(iso))
}

export function formatDateWithWeekday(iso: string) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: london,
  }).format(dateFromIso(iso))
}

const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'] as const

export type Season = (typeof seasons)[number]

export function season(now = new Date()): Season {
  const month = Number(
    new Intl.DateTimeFormat('en-GB', { timeZone: london, month: 'numeric' }).format(now),
  )
  return seasons[month - 1]
}

export function seasonalTitleMask(now = new Date()) {
  return `images/${season(now)}_title_mask.jpg`
}

export function isOnOrAfterToday(iso: string, now = new Date()) {
  const today = new Intl.DateTimeFormat('en-CA', {
    timeZone: london,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(now)
  const day = iso.length === 7 ? `${iso}-01` : iso
  return day >= today
}
