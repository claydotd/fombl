import { writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'
import type { Plugin } from 'vite'
import { newsletters } from '../src/content/newsletters.ts'
import { site } from '../src/content/site.ts'
import { loadNewsItems } from './newsFeedPlugin.ts'

/** Keep in sync with indexable routes in src/App.tsx (exclude 404). */
const STATIC_PATHS = [
  '/',
  '/whos-who',
  '/events',
  '/about',
  '/about/helen-acquroff',
  '/about/nelson-pillars',
  '/about/international-exhibition',
  '/about/mural',
  '/about/mural/quiz',
  '/about/the-jawbones',
  '/about/play',
  '/about/wildflower-meadows',
  '/news',
  '/membership',
  '/contact',
  '/volunteering',
  '/projects',
  '/tree-group',
] as const

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function pageUrl(path: string) {
  if (path === '/') return `${site.url}/`
  return `${site.url}${path}`
}

function collectPaths() {
  const newsDir = resolve('public/news')
  const slugs = new Set<string>()

  for (const item of loadNewsItems(newsDir)) {
    slugs.add(item.slug)
  }
  for (const issue of newsletters) {
    slugs.add(issue.slug)
  }

  return [...STATIC_PATHS, ...[...slugs].sort().map((slug) => `/news/${slug}`)]
}

function sitemapXml(paths: string[]) {
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${escapeXml(pageUrl(path))}</loc>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

function robotsTxt(phase: string) {
  if (phase === 'live') {
    return `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`
  }

  return `User-agent: *
Disallow: /
`
}

export function sitemapPlugin(phase: string): Plugin {
  return {
    name: 'sitemap',
    apply: 'build',
    writeBundle(options) {
      if (!options.dir) return

      writeFileSync(join(options.dir, 'robots.txt'), robotsTxt(phase))

      // Only the live domain should be indexed; prototype builds stay noindex.
      if (phase !== 'live') return

      writeFileSync(join(options.dir, 'sitemap.xml'), sitemapXml(collectPaths()))
    },
  }
}
