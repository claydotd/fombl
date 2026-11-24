import type { ReactNode } from 'react'

type Props = {
  src: string
  alt: string
  caption?: string
  className?: string
  children?: ReactNode
}

export function ArticleFigure({ src, alt, caption, className, children }: Props) {
  const classes = ['article-figure', className].filter(Boolean).join(' ')
  return (
    <figure className={classes}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {children ? <figcaption>{children}</figcaption> : caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
