import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { PageHero } from './PageHero'

type Props = {
  title: string
  lede?: string
  children: ReactNode
}

export function AboutArticle({ title, lede, children }: Props) {
  return (
    <>
      <PageHero
        title={title}
        lede={lede}
        action={
          <p className="crumb">
            <Link to="/about">Back to History and Archaeology</Link>
          </p>
        }
      />
      <div className="container section about-history about-article">{children}</div>
    </>
  )
}
