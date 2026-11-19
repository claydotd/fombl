import type { ReactNode } from 'react'
import { Link } from 'react-router'

type Props = {
  eyebrow?: string
  title: string
  lede?: string
  action?: ReactNode
  /** Shortcut for the usual “Back to …” crumb on about articles. */
  backTo?: { to: string; label: string }
}

export function PageHero({ eyebrow, title, lede, action, backTo }: Props) {
  const crumb =
    action ??
    (backTo ? (
      <p className="crumb">
        <Link to={backTo.to}>{backTo.label}</Link>
      </p>
    ) : null)

  return (
    <header className="page-hero">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        {crumb ? (
          <div className="page-hero-heading">
            <h1>{title}</h1>
            {crumb}
          </div>
        ) : (
          <h1>{title}</h1>
        )}
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  )
}
