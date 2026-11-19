import type { ReactNode } from 'react'

type Props = {
  src: string
  alt: string
  caption?: string
  children?: ReactNode
}

export function ArticleFigure({ src, alt, caption, children }: Props) {
  return (
    <figure className="article-figure">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {children ? <figcaption>{children}</figcaption> : caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
