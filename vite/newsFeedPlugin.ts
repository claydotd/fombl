import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

export type NewsKind = 'post' | 'newsletter'

export type NewsRelatedLink = {
  label: string
  to: string
}

export type NewsFeedItem = {
  slug: string
  title: string
  date: string
  summary: string
  kind: NewsKind
  bodyHtml?: string
  pdf?: string
  related?: NewsRelatedLink[]
}

const feedId = 'virtual:news-feed'
const bodiesId = 'virtual:news-bodies'
const resolvedFeedId = `\0${feedId}`
const resolvedBodiesId = `\0${bodiesId}`

function titleFromSlug(slug: string) {
  const newsletter = /^nl[-_]?(\d+)$/i.exec(slug)
  if (newsletter) return `Newsletter ${newsletter[1]}`

  return slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {} as Record<string, string>, body: raw.trim() }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const sep = trimmed.indexOf(':')
    if (sep === -1) continue
    const key = trimmed.slice(0, sep).trim()
    let value = trimmed.slice(sep + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    meta[key] = value
  }

  return { meta, body: match[2].trim() }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function renderInline(text: string) {
  let html = escapeHtml(text)
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*|mailto:[^)\s]+)\)/g, (_, label, href) => {
    return `<a href="${href}">${label}</a>`
  })
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  return html
}

function renderMarkdown(markdown: string) {
  const blocks = markdown
    .replace(/\r\n/g, '\n')
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)

  return blocks
    .map((block) => {
      if (/^###\s+/.test(block)) {
        return `<h3>${renderInline(block.replace(/^###\s+/, ''))}</h3>`
      }
      if (/^##\s+/.test(block)) {
        return `<h2>${renderInline(block.replace(/^##\s+/, ''))}</h2>`
      }
      if (/^#\s+/.test(block)) {
        return `<h2>${renderInline(block.replace(/^#\s+/, ''))}</h2>`
      }

      const listLines = block.split('\n')
      if (listLines.every((line) => /^[-*]\s+/.test(line))) {
        const items = listLines
          .map((line) => `<li>${renderInline(line.replace(/^[-*]\s+/, ''))}</li>`)
          .join('')
        return `<ul>${items}</ul>`
      }

      return `<p>${renderInline(block.replace(/\n/g, ' '))}</p>`
    })
    .join('\n')
}

function readRelated(value: unknown): NewsRelatedLink[] | undefined {
  if (!Array.isArray(value)) return undefined
  const related = value.flatMap((item) => {
    if (!item || typeof item !== 'object') return []
    const record = item as Record<string, unknown>
    if (typeof record.label !== 'string' || typeof record.to !== 'string') return []
    return [{ label: record.label, to: record.to }]
  })
  return related.length > 0 ? related : undefined
}

function readJsonMeta(filePath: string) {
  if (!fs.existsSync(filePath)) return null
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8')) as Record<string, unknown>
    return {
      title: typeof data.title === 'string' ? data.title : undefined,
      date: typeof data.date === 'string' ? data.date : undefined,
      summary: typeof data.summary === 'string' ? data.summary : undefined,
      related: readRelated(data.related),
    }
  } catch {
    return null
  }
}

export function loadNewsItems(newsDir: string): NewsFeedItem[] {
  if (!fs.existsSync(newsDir)) return []

  const entries = fs.readdirSync(newsDir, { withFileTypes: true })
  const items: NewsFeedItem[] = []
  const slugs = new Set<string>()

  const files = entries
    .filter((entry) => entry.isFile())
    .map((entry) => ({
      name: entry.name,
      ext: path.extname(entry.name).toLowerCase(),
      slug: path.basename(entry.name, path.extname(entry.name)),
    }))
    .filter((file) => file.slug && !file.slug.startsWith('.'))

  // Prefer markdown posts when a slug would collide with a PDF.
  for (const file of files.filter((item) => item.ext === '.md')) {
    const raw = fs.readFileSync(path.join(newsDir, file.name), 'utf8')
    const { meta, body } = parseFrontmatter(raw)
    const title = meta.title || titleFromSlug(file.slug)
    const date = meta.date || '1970-01-01'
    const summary =
      meta.summary || body.split(/\n{2,}/)[0]?.replace(/^#+\s+/, '').slice(0, 180) || ''
    items.push({
      slug: file.slug,
      title,
      date,
      summary,
      kind: 'post',
      bodyHtml: renderMarkdown(body),
    })
    slugs.add(file.slug)
  }

  for (const file of files.filter((item) => item.ext === '.pdf')) {
    if (slugs.has(file.slug)) continue
    const meta = readJsonMeta(path.join(newsDir, `${file.slug}.json`))
    items.push({
      slug: file.slug,
      title: meta?.title || titleFromSlug(file.slug),
      date: meta?.date || '1970-01-01',
      summary: meta?.summary || 'Open the newsletter PDF.',
      kind: 'newsletter',
      pdf: `news/${encodeURI(file.name)}`,
      ...(meta?.related ? { related: meta.related } : {}),
    })
    slugs.add(file.slug)
  }

  return items.sort((a, b) => {
    if (a.date === b.date) return a.title.localeCompare(b.title)
    return a.date < b.date ? 1 : -1
  })
}

function feedModuleSource(items: NewsFeedItem[]) {
  const meta = items.map(({ bodyHtml: _body, ...rest }) => rest)
  return `export const articles = ${JSON.stringify(meta, null, 2)}
`
}

function bodiesModuleSource(items: NewsFeedItem[]) {
  const bodies: Record<string, string> = {}
  for (const item of items) {
    if (item.bodyHtml) bodies[item.slug] = item.bodyHtml
  }
  return `export const bodies = ${JSON.stringify(bodies, null, 2)}
`
}

export function newsFeedPlugin(): Plugin {
  const newsDir = path.resolve('public/news')
  let items = loadNewsItems(newsDir)

  return {
    name: 'news-feed',
    resolveId(id) {
      if (id === feedId) return resolvedFeedId
      if (id === bodiesId) return resolvedBodiesId
    },
    load(id) {
      if (id === resolvedFeedId) {
        items = loadNewsItems(newsDir)
        return feedModuleSource(items)
      }
      if (id === resolvedBodiesId) {
        items = loadNewsItems(newsDir)
        return bodiesModuleSource(items)
      }
      return null
    },
    configureServer(server) {
      const reload = (file: string) => {
        if (!file.startsWith(newsDir)) return
        for (const id of [resolvedFeedId, resolvedBodiesId]) {
          const mod = server.moduleGraph.getModuleById(id)
          if (mod) server.moduleGraph.invalidateModule(mod)
        }
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.add(newsDir)
      server.watcher.on('add', reload)
      server.watcher.on('change', reload)
      server.watcher.on('unlink', reload)
    },
    buildStart() {
      items = loadNewsItems(newsDir)
      this.addWatchFile(newsDir)
    },
  }
}
