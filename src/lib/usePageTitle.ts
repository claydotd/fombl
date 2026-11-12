import { useEffect } from 'react'
import { pageTitle } from '../content/site'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = pageTitle(title)
  }, [title])
}
