import { Link, useParams } from 'react-router'
import { bodies } from 'virtual:news-bodies'
import { PageHero } from '../components/PageHero'
import { getArticle } from '../content/news'
import { formatDate } from '../lib/dates'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'
import { getProjectReportForSlug } from './projects/reports'

export function NewsArticlePage() {
  const { slug = '' } = useParams()
  const article = getArticle(slug)
  const bodyHtml = bodies[slug]
  const projectReport = getProjectReportForSlug(slug)
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

  if (projectReport) {
    const { Report } = projectReport
    return (
      <>
        <PageHero
          title={article.title}
          lede={article.summary}
          action={
            <p className="crumb">
              <Link to="/news">Back to News</Link>
              <span aria-hidden="true"> · </span>
              <Link to={`/projects#${projectReport.meta.id}`}>All project reports</Link>
            </p>
          }
        />
        <div className="container section news-article projects-page">
          <div className="projects-reports">
            <p className="eyebrow">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true"> · </span>
              <span>Project report</span>
            </p>
            <Report />
          </div>
        </div>
      </>
    )
  }

  if (article.kind === 'newsletter') {
    const pdfHref = article.pdf ? resolveHref(article.pdf) : null
    const isHtml = Boolean(pdfHref && /\.html?(?:$|[?#])/i.test(pdfHref))

    return (
      <>
        <PageHero
          title={article.title}
          lede={article.summary}
          action={
            <p className="crumb">
              <Link to="/news">Back to News</Link>
              <span aria-hidden="true"> · </span>
              <Link to="/projects#newsletters">All newsletters</Link>
            </p>
          }
        />
        <div className="container section news-article">
          <p className="eyebrow">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true"> · </span>
            <span>Newsletter</span>
          </p>
          {pdfHref ? (
            <>
              <p>
                <a className="button" href={pdfHref} target="_blank" rel="noreferrer">
                  {isHtml ? 'Open in new tab' : 'Open PDF'}
                </a>
              </p>
              <div className="newsletter-frame">
                <iframe
                  className="newsletter-embed"
                  src={pdfHref}
                  title={article.title}
                  loading="lazy"
                />
              </div>
            </>
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
