import { Link } from 'react-router'
import { ArticleFigure } from '../components/ArticleFigure'
import { ArticleGallery } from '../components/ArticleGallery'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import {
  projectsPage,
  type ProjectBlock,
  type ProjectInlinePart,
  type ProjectReport,
} from '../content/projects'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

function imageAlt(alt: string, report: ProjectReport) {
  const trimmed = alt.trim()
  if (trimmed) return trimmed
  return `Photograph from the ${report.navLabel} project update`
}

function InlineParts({ parts }: { parts: ProjectInlinePart[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (part.type === 'text') return <span key={index}>{part.text}</span>
        if (part.href.startsWith('/')) {
          return (
            <Link key={index} to={part.href}>
              {part.label}
            </Link>
          )
        }
        return (
          <a key={index} href={part.href} target="_blank" rel="noreferrer">
            {part.label}
          </a>
        )
      })}
    </>
  )
}

function ReportBlocks({ report }: { report: ProjectReport }) {
  return (
    <>
      {report.blocks.map((block, index) => (
        <ReportBlock key={`${report.id}-${index}`} block={block} report={report} />
      ))}
    </>
  )
}

function ReportBlock({ block, report }: { block: ProjectBlock; report: ProjectReport }) {
  switch (block.type) {
    case 'heading':
      return <h3>{block.text}</h3>
    case 'paragraph':
      return <p>{block.text}</p>
    case 'rich':
      return (
        <p>
          <InlineParts parts={block.parts} />
        </p>
      )
    case 'list':
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'image':
      return (
        <ArticleFigure
          src={photo(block.file)}
          alt={imageAlt(block.alt, report)}
        />
      )
    case 'gallery':
      return (
        <ArticleGallery
          tiles
          images={block.images.map((image) => ({
            src: photo(image.file),
            alt: imageAlt(image.alt, report),
          }))}
        />
      )
    default:
      return null
  }
}

export function ProjectsPage() {
  usePageTitle(projectsPage.title)
  const { reports } = projectsPage

  return (
    <>
      <PageHero
        title={projectsPage.title}
        lede={projectsPage.lede}
        action={
          <p className="crumb">
            <Link to="/whos-who#projects">Back to Who&apos;s who</Link>
          </p>
        }
      />

      <div className="container section about-history about-article projects-page">
        <div className="projects-reports">
          <OnThisPageNav
            links={reports.map((report) => ({
              href: `#${report.id}`,
              label: report.navLabel,
            }))}
          />

          {reports.map((report) => (
            <section className="block project-report" id={report.id} key={report.id}>
              <h2>{report.title}</h2>
              <ReportBlocks report={report} />
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
