import { Link } from 'react-router'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { newsletters } from '../content/newsletters'
import { usePageTitle } from '../lib/usePageTitle'
import { projectReports } from './projects/reports'

const pageTitle = 'Project Reports & Newsletters'

export function ProjectsPage() {
  usePageTitle(pageTitle)

  return (
    <>
      <PageHero
        title={pageTitle}
        lede="FoMBL works with other agencies on a variety of projects in the Meadows and Bruntsfield Links. Updates from the project and volunteer programme, plus the Friends newsletter archive."
        backTo={{ to: '/whos-who#projects', label: "Back to Who's who" }}
      />

      <div className="container section has-sticky-titles prose-page">
        <div className="projects-reports">
          <OnThisPageNav
            links={[
              ...projectReports.map(({ meta }) => ({
                href: `#${meta.id}`,
                label: meta.navLabel,
              })),
              { href: '#newsletters', label: 'Newsletters' },
            ]}
          />

          {projectReports.map(({ Report, meta }) => (
            <Report key={meta.id} />
          ))}

          <section className="block" id="newsletters">
            <h2>Newsletters</h2>
            <p className="intro">
              The Friends newsletter is published a few times a year. Open an issue for the full
              PDF, or browse everything on the{' '}
              <Link to="/news">News</Link> page.
            </p>
            <ul className="documents">
              {newsletters.map((issue) => (
                <li key={issue.slug} className="doc">
                  <div>
                    <strong>{issue.label}</strong>
                    <span className="hint">
                      {issue.season} {issue.year}
                    </span>
                  </div>
                  <div className="doc-links">
                    <Link className="button-small" to={`/news/${issue.slug}`}>
                      View
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
