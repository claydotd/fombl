import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { NewsStory } from '../components/NewsStory'
import { PageHero } from '../components/PageHero'
import { articles, isProjectUpdateArticle, type NewsArticle } from '../content/news'
import { newsletters } from '../content/newsletters'
import { usePageTitle } from '../lib/usePageTitle'

type SeasonFilter = {
  key: string
  season: string
  year: number
  date: string
}

const SEASON_ORDER = ['Spring', 'Summer', 'Autumn', 'Winter'] as const

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

function directoryOptions(items: NewsArticle[]) {
  const seasons = new Set<string>()
  const years = new Set<number>()
  for (const article of items) {
    const entry = seasonOf(article)
    seasons.add(entry.season)
    years.add(entry.year)
  }
  return {
    seasons: SEASON_ORDER.filter((season) => seasons.has(season)),
    years: [...years].sort((a, b) => b - a),
  }
}

const PAGE_SIZE = 6

export function NewsPage() {
  usePageTitle('News')
  const { seasons, years } = useMemo(() => directoryOptions(articles), [])
  const [activeSeason, setActiveSeason] = useState('')
  const [activeYear, setActiveYear] = useState('')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = useMemo(() => {
    if (!activeSeason && !activeYear) return articles
    return articles.filter((article) => {
      const entry = seasonOf(article)
      if (activeSeason && entry.season !== activeSeason) return false
      if (activeYear && String(entry.year) !== activeYear) return false
      return true
    })
  }, [activeSeason, activeYear])

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
                        const kindLabel =
                          article.kind === 'newsletter'
                            ? 'Newsletter'
                            : isProjectUpdateArticle(article)
                              ? 'Project report'
                              : 'News'
                        const cta =
                          article.kind === 'newsletter'
                            ? 'View newsletter'
                            : isProjectUpdateArticle(article)
                              ? 'Read the report'
                              : 'Read more'
                        return (
                          <NewsStory
                            key={article.slug}
                            as="li"
                            className="news-item"
                            article={article}
                            kindLabel={kindLabel}
                            actions={
                              <p className="news-item-actions">
                                <Link className="more" to={`/news/${article.slug}`}>
                                  {cta}
                                </Link>
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
            <div className="news-directory-field">
              <label className="news-directory-label" htmlFor="news-season-filter">
                Season
              </label>
              <select
                id="news-season-filter"
                className="news-directory-select"
                value={activeSeason}
                onChange={(event) => {
                  setActiveSeason(event.target.value)
                  setVisibleCount(PAGE_SIZE)
                }}
              >
                <option value="">All</option>
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
            </div>
            <div className="news-directory-field">
              <label className="news-directory-label" htmlFor="news-year-filter">
                Year
              </label>
              <select
                id="news-year-filter"
                className="news-directory-select"
                value={activeYear}
                onChange={(event) => {
                  setActiveYear(event.target.value)
                  setVisibleCount(PAGE_SIZE)
                }}
              >
                <option value="">All</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
