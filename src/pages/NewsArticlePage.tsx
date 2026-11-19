import { Link, useParams } from 'react-router'
import { bodies } from 'virtual:news-bodies'
import { PageHero } from '../components/PageHero'
import { getArticle } from '../content/news'
import { formatDate } from '../lib/dates'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function NewsArticlePage() {
  const { slug = '' } = useParams()
  const article = getArticle(slug)
  const bodyHtml = bodies[slug]
  usePageTitle(article?.title ?? 'News')

  if (!article) {
    return (
      <PageHero
        title="Story not found"
        lede="That page is not in the news list."
        action={
          <p className="crumb">
            <Link to="/news">Back to News</Link>
          </p>
        }
      />
    )
  }

  if (article.kind === 'newsletter') {
    return (
      <>
        <PageHero
          title={article.title}
          lede={article.summary}
          action={
            <p className="crumb">
              <Link to="/news">Back to News</Link>
            </p>
          }
        />
        <div className="container section news-article">
          <p className="eyebrow">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true"> · </span>
            <span>Newsletter</span>
          </p>
          {article.pdf ? (
            <p>
              <a
                className="button"
                href={resolveHref(article.pdf)}
                target="_blank"
                rel="noreferrer"
              >
                {article.pdf.toLowerCase().endsWith('.html') ? 'View newsletter' : 'Open PDF'}
              </a>
            </p>
          ) : null}
          {article.related?.length ? (
            <p className="news-related">
              {article.related.map((link) => (
                <Link key={link.to} className="more" to={link.to}>
                  {link.label}
                </Link>
              ))}
            </p>
          ) : null}
        </div>
      </>
    )
  }

  return (
    <>
      <PageHero
        title={article.title}
        lede={article.summary}
        action={
          <p className="crumb">
            <Link to="/news">Back to News</Link>
          </p>
        }
      />
      <div className="container section news-article">
        <p className="eyebrow">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        {bodyHtml ? (
          <div className="news-prose" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        ) : null}
      </div>
    </>
  )
}
