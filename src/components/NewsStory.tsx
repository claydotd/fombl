import type { ElementType, ReactNode } from 'react'
import { Link } from 'react-router'
import { formatDate } from '../lib/dates'

type Article = {
  slug: string
  title: string
  date: string
  summary: string
  kind?: 'post' | 'newsletter'
  pdf?: string
  related?: ReadonlyArray<{ label: string; to: string }>
}

type Props = {
  article: Article
  lead?: boolean
  kindLabel?: string
  actions?: ReactNode
  as?: ElementType
  className?: string
  id?: string
}

export function NewsStory({
  article,
  lead = false,
  kindLabel,
  actions,
  as: Tag = 'article',
  className,
  id,
}: Props) {
  const classes = [className ?? 'story', lead ? 'story-lead' : null].filter(Boolean).join(' ')

  return (
    <Tag className={classes} id={id}>
      <p className="eyebrow">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        {kindLabel ? (
          <>
            <span aria-hidden="true"> · </span>
            <span>{kindLabel}</span>
          </>
        ) : null}
      </p>
      <h3>
        <Link to={`/news/${article.slug}`}>{article.title}</Link>
      </h3>
      <p>{article.summary}</p>
      {actions}
    </Tag>
  )
}
