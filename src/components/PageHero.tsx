import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: string
  lede?: string
  action?: ReactNode
}

export function PageHero({ eyebrow, title, lede, action }: Props) {
  return (
    <header className="page-hero">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {action ? (
          <div className="page-hero-heading">
            <h1>{title}</h1>
            {action}
          </div>
        ) : (
          <h1>{title}</h1>
        )}
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  )
}
