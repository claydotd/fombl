import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { usePageTitle } from '../lib/usePageTitle'
import { June2026Report, June2026Meta } from './projects/reports/June2026'
import { February2026Report, February2026Meta } from './projects/reports/February2026'
import { September2025Report, September2025Meta } from './projects/reports/September2025'
import { June2025Report, June2025Meta } from './projects/reports/June2025'
import { February2025Report, February2025Meta } from './projects/reports/February2025'
import { November2024Report, November2024Meta } from './projects/reports/November2024'
import { October2024Report, October2024Meta } from './projects/reports/October2024'
import { June2024Report, June2024Meta } from './projects/reports/June2024'
import { April2024Report, April2024Meta } from './projects/reports/April2024'
import { October2023Report, October2023Meta } from './projects/reports/October2023'
import { September2023Report, September2023Meta } from './projects/reports/September2023'
import { July2023Report, July2023Meta } from './projects/reports/July2023'
import { April2023Report, April2023Meta } from './projects/reports/April2023'
import { September2022Report, September2022Meta } from './projects/reports/September2022'

const reports = [
  { meta: June2026Meta, Report: June2026Report },
  { meta: February2026Meta, Report: February2026Report },
  { meta: September2025Meta, Report: September2025Report },
  { meta: June2025Meta, Report: June2025Report },
  { meta: February2025Meta, Report: February2025Report },
  { meta: November2024Meta, Report: November2024Report },
  { meta: October2024Meta, Report: October2024Report },
  { meta: June2024Meta, Report: June2024Report },
  { meta: April2024Meta, Report: April2024Report },
  { meta: October2023Meta, Report: October2023Report },
  { meta: September2023Meta, Report: September2023Report },
  { meta: July2023Meta, Report: July2023Report },
  { meta: April2023Meta, Report: April2023Report },
  { meta: September2022Meta, Report: September2022Report },
] as const

export function ProjectsPage() {
  usePageTitle('Projects')

  return (
    <>
      <PageHero
        title="Projects"
        lede="FoMBL works with other agencies on a variety of projects in the Meadows and Bruntsfield Links. Updates from the project and volunteer programme."
        backTo={{ to: '/whos-who#projects', label: "Back to Who's who" }}
      />

      <div className="container section about-history about-article projects-page">
        <div className="projects-reports">
          <OnThisPageNav
            links={reports.map(({ meta }) => ({
              href: `#${meta.id}`,
              label: meta.navLabel,
            }))}
          />

          {reports.map(({ Report, meta }) => (
            <Report key={meta.id} />
          ))}
        </div>
      </div>
    </>
  )
}
