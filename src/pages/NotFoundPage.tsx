import { PageHero } from '../components/PageHero'
import { usePageTitle } from '../lib/usePageTitle'

export function NotFoundPage() {
  usePageTitle('Page not found')

  return (
    <PageHero
      title="Page not found"
      lede="That address is not on this site. Try one of the main pages."
    />
  )
}
