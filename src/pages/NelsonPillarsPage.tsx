import { AboutArticle } from '../components/AboutArticle'
import { ArticleFigure } from '../components/ArticleFigure'
import { SectionBlock } from '../components/SectionBlock'
import { nelsonPillars } from '../content/nelsonPillars'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function NelsonPillarsPage() {
  usePageTitle(nelsonPillars.title)

  return (
    <AboutArticle title={nelsonPillars.title} lede={nelsonPillars.lede}>
      <p className="intro">{nelsonPillars.intro}</p>

      {nelsonPillars.sections.map((section, index) => (
        <SectionBlock key={section.heading} heading={section.heading}>
          {index === 1 ? (
            <ArticleFigure
              src={resolveHref(`images/history/${nelsonPillars.image.file}`)}
              alt={nelsonPillars.image.alt}
              caption={nelsonPillars.image.caption}
            />
          ) : null}
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SectionBlock>
      ))}

      <p className="credit">
        <em>{nelsonPillars.credit}</em>
      </p>
    </AboutArticle>
  )
}
