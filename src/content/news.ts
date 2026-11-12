// News feed items are built from files in public/news/.
// Markdown (.md) posts and PDF newsletters (with an optional matching .json
// sidecar for title, date, and summary) are scanned at build and in dev.
// The newsletter archive is merged in so every issue appears in the feed.

import { articles as feed } from 'virtual:news-feed'
import { newsletters } from './newsletters'

export type NewsRelatedLink = {
  label: string
  to: string
}

export type NewsArticle = {
  slug: string
  title: string
  date: string
  summary: string
  kind: 'post' | 'newsletter'
  bodyHtml?: string
  pdf?: string
  related?: readonly NewsRelatedLink[]
}

function mergeArticles(): NewsArticle[] {
  const bySlug = new Map<string, NewsArticle>()

  for (const article of feed) {
    bySlug.set(article.slug, { ...article })
  }

  for (const issue of newsletters) {
    const existing = bySlug.get(issue.slug)
    if (existing?.kind === 'newsletter') {
      bySlug.set(issue.slug, {
        ...existing,
        pdf: existing.pdf || issue.href,
      })
      continue
    }
    if (existing) continue

    bySlug.set(issue.slug, {
      slug: issue.slug,
      title: issue.label,
      date: issue.date,
      summary: `The ${issue.season.toLowerCase()} ${issue.year} Friends newsletter.`,
      kind: 'newsletter',
      pdf: issue.href,
    })
  }

  return [...bySlug.values()].sort((a, b) => {
    if (a.date === b.date) return a.title.localeCompare(b.title)
    return a.date < b.date ? 1 : -1
  })
}

export const articles: NewsArticle[] = mergeArticles()

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}

/** Project-update posts deep-link to the matching section on /projects. */
export function projectsHrefForArticle(article: Pick<NewsArticle, 'slug'>) {
  const match = /^project-update-(.+)$/.exec(article.slug)
  return match ? `/projects#${match[1]}` : null
}
