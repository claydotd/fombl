import { AboutArticle } from '../components/AboutArticle'
import { ArticleFigure } from '../components/ArticleFigure'
import { SectionBlock } from '../components/SectionBlock'
import { helenAcquroff } from '../content/helenAcquroff'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function HelenAcquroffPage() {
  usePageTitle(helenAcquroff.title)

  return (
    <AboutArticle title={helenAcquroff.title} lede={helenAcquroff.lede}>
      <p className="intro">{helenAcquroff.intro}</p>

      <ArticleFigure
        src={resolveHref(`images/history/${helenAcquroff.image.file}`)}
        alt={helenAcquroff.image.alt}
        caption={helenAcquroff.image.alt}
      />

      {helenAcquroff.sections.map((section) => (
        <SectionBlock key={section.heading} heading={section.heading}>
          {section.heading === 'Memorial' ? (
            <>
              <p>{section.paragraphs[0]}</p>
              <blockquote className="inscription">
                {helenAcquroff.inscription.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </blockquote>
              {section.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          ) : (
            section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
          )}
        </SectionBlock>
      ))}

      <SectionBlock heading={helenAcquroff.poem.title} id="poem">
        <div className="poem-columns">
          {helenAcquroff.poem.columns.map((column, index) => (
            <pre className="verse" key={index}>
              {column.join('\n')}
            </pre>
          ))}
        </div>
      </SectionBlock>

      <p className="credit">
        <em>{helenAcquroff.credit}</em>
      </p>
    </AboutArticle>
  )
}
