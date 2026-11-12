import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { NewsStory } from '../components/NewsStory'
import { PageHero } from '../components/PageHero'
import { articles, projectsHrefForArticle, type NewsArticle } from '../content/news'
import { newsletters } from '../content/newsletters'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

type SeasonFilter = {
  key: string
  season: string
  year: number
  date: string
}

function yearOf(iso: string) {
  return iso.slice(0, 4)
}

function seasonFromMonth(month: number): string {
  if (month >= 3 && month <= 5) return 'Spring'
  if (month >= 6 && month <= 8) return 'Summer'
  if (month >= 9 && month <= 11) return 'Autumn'
  return 'Winter'
}

function seasonOf(article: NewsArticle): SeasonFilter {
  const issue = newsletters.find((item) => item.slug === article.slug)
  if (issue) {
    return {
      key: `${issue.season}-${issue.year}`,
      season: issue.season,
      year: issue.year,
      date: issue.date,
    }
  }

  const year = Number(yearOf(article.date))
  const month = Number(article.date.length >= 7 ? article.date.slice(5, 7) : '1')
  const season = seasonFromMonth(month)
  return {
    key: `${season}-${year}`,
    season,
    year,
    date: article.date.length >= 7 ? article.date.slice(0, 7) : `${year}-01`,
  }
}

function groupByYear(items: NewsArticle[]) {
  const groups = new Map<string, NewsArticle[]>()
  for (const article of items) {
    const year = yearOf(article.date)
    const list = groups.get(year)
    if (list) list.push(article)
    else groups.set(year, [article])
  }
  return [...groups.entries()]
}

function directorySeasons(items: NewsArticle[]): SeasonFilter[] {
  const byKey = new Map<string, SeasonFilter>()
  for (const article of items) {
    const entry = seasonOf(article)
    const existing = byKey.get(entry.key)
    if (!existing || entry.date > existing.date) byKey.set(entry.key, entry)
  }
  return [...byKey.values()].sort((a, b) => (a.date < b.date ? 1 : -1))
}

const PAGE_SIZE = 6

export function NewsPage() {
  usePageTitle('News')
  const seasons = useMemo(() => directorySeasons(articles), [])
  const [activeSeason, setActiveSeason] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    if (!activeSeason) return articles
    return articles.filter((article) => seasonOf(article).key === activeSeason)
  }, [activeSeason])

  const visible = filtered.slice(0, visibleCount)
  const byYear = groupByYear(visible)
  const hasMore = visibleCount < filtered.length

  return (
    <>
      <PageHero
        title="News"
        lede="Updates on projects, meetings and the FoMBL newsletter."
      />

      <div className="container section">
        <div className="news-layout">
          <div>
            {filtered.length === 0 ? (
              <p className="empty">No news has been published yet.</p>
            ) : (
              <>
                {byYear.map(([year, yearArticles]) => (
                  <section
                    key={year}
                    className="news-year"
                    id={`year-${year}`}
                    aria-labelledby={`year-${year}-title`}
                  >
                    <h2 className="news-year-title" id={`year-${year}-title`}>
                      {year}
                    </h2>
                    <ol className="news-feed">
                      {yearArticles.map((article) => {
                        const projectsHref = projectsHrefForArticle(article)
                        const pdfHref =
                          !projectsHref && article.kind === 'newsletter' && article.pdf
                            ? resolveHref(article.pdf)
                            : null
                        return (
                          <NewsStory
                            key={article.slug}
                            as="li"
                            className="news-item"
                            article={article}
                            kindLabel={article.kind === 'newsletter' ? 'Newsletter' : 'News'}
                            actions={
                              <p className="news-item-actions">
                                {projectsHref ? (
                                  <Link className="more" to={projectsHref}>
                                    Read the report
                                  </Link>
                                ) : pdfHref ? (
                                  <a className="more" href={pdfHref} target="_blank" rel="noreferrer">
                                    {article.pdf?.toLowerCase().endsWith('.html')
                                      ? 'View newsletter'
                                      : 'Open PDF'}
                                  </a>
                                ) : (
                                  <Link className="more" to={`/news/${article.slug}`}>
                                    Read more
                                  </Link>
                                )}
                                {article.related?.map((link) => (
                                  <Link key={link.to} className="more" to={link.to}>
                                    {link.label}
                                  </Link>
                                ))}
                              </p>
                            }
                          />
                        )
                      })}
                    </ol>
                  </section>
                ))}
                {hasMore ? (
                  <p className="news-load-more">
                    <button
                      type="button"
                      className="button"
                      onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                    >
                      Load more
                    </button>
                  </p>
                ) : null}
              </>
            )}
          </div>

          <aside className="news-directory">
            <label className="news-directory-label" htmlFor="news-season-filter">
              Season
            </label>
            <select
              id="news-season-filter"
              className="news-directory-select"
              value={activeSeason ?? ''}
              onChange={(event) => {
                setActiveSeason(event.target.value || null)
                setVisibleCount(PAGE_SIZE)
              }}
            >
              <option value="">All</option>
              {seasons.map((entry) => (
                <option key={entry.key} value={entry.key}>
                  {entry.season} {entry.year}
                </option>
              ))}
            </select>
          </aside>
        </div>
      </div>
    </>
  )
}
