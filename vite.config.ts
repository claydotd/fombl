import { copyFileSync, createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { newsFeedPlugin } from './vite/newsFeedPlugin.ts'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const AGDFORMS_ROOT = resolve(rootDir, '../agdforms')
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json',
}

function normalizeBase(value: string | undefined) {
  const raw = value?.trim() || '/'
  if (raw === '/') return '/'
  const withLead = raw.startsWith('/') ? raw : `/${raw}`
  return withLead.endsWith('/') ? withLead : `${withLead}/`
}

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    apply: 'build',
    writeBundle(options) {
      if (!options.dir) return
      const indexPath = join(options.dir, 'index.html')
      if (existsSync(indexPath)) {
        copyFileSync(indexPath, join(options.dir, '404.html'))
        // public/news/ is a real asset folder (PDFs). Without an index, Apache
        // returns 403 for /news because directory listing is disabled.
        const newsDir = join(options.dir, 'news')
        if (existsSync(newsDir) && statSync(newsDir).isDirectory()) {
          copyFileSync(indexPath, join(newsDir, 'index.html'))
        }
      }
      const htaccess = resolve('public/.htaccess')
      if (existsSync(htaccess)) {
        copyFileSync(htaccess, join(options.dir, '.htaccess'))
      }
    },
  }
}

/** Serve the sibling agdforms project in dev so iframe height work can be tested locally. */
function localAgdforms(): Plugin {
  return {
    name: 'local-agdforms',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''
        if (!url.startsWith('/__forms/')) return next()

        const rel = decodeURIComponent(url.slice('/__forms/'.length).split('?')[0] || '')
        const filePath = normalize(join(AGDFORMS_ROOT, rel))
        if (!filePath.startsWith(AGDFORMS_ROOT)) {
          res.statusCode = 403
          res.end('Forbidden')
          return
        }

        let target = filePath
        try {
          if (statSync(target).isDirectory()) {
            target = join(target, 'index.html')
          }
        } catch {
          res.statusCode = 404
          res.end('Not found')
          return
        }

        if (!existsSync(target)) {
          res.statusCode = 404
          res.end('Not found')
          return
        }

        res.setHeader('Content-Type', MIME[extname(target)] || 'application/octet-stream')
        res.setHeader('Cache-Control', 'no-store')
        createReadStream(target).pipe(res)
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), '')
  const phase = process.env.VITE_SITE_PHASE || fileEnv.VITE_SITE_PHASE || 'prototype'
  const base = normalizeBase(process.env.VITE_BASE_PATH || fileEnv.VITE_BASE_PATH)

  return {
    base,
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      newsFeedPlugin(),
      {
        name: 'phase-robots',
        transformIndexHtml(html) {
          if (phase === 'live' || html.includes('name="robots"')) return html
          return html.replace(
            '</head>',
            '    <meta name="robots" content="noindex, nofollow" />\n  </head>',
          )
        },
      },
      spaFallback(),
      localAgdforms(),
    ],
  }
})
