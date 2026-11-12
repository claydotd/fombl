export function routerBasename() {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/') return undefined
  return base.replace(/\/$/, '')
}

export function resolveHref(href: string) {
  if (/^(https?:|mailto:|tel:)/.test(href)) return href
  return `${import.meta.env.BASE_URL}${href.replace(/^\//, '')}`
}

export function externalLinkProps(href: string): { target?: '_blank'; rel?: string } {
  if (/^https?:/.test(href)) return { target: '_blank', rel: 'noreferrer' }
  return {}
}
