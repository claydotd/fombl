/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH?: string
  readonly VITE_SITE_PHASE?: string
}

declare module 'virtual:news-feed' {
  export const articles: ReadonlyArray<{
    slug: string
    title: string
    date: string
    summary: string
    kind: 'post' | 'newsletter'
    bodyHtml?: string
    pdf?: string
    related?: ReadonlyArray<{
      label: string
      to: string
    }>
  }>
}
