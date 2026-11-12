import { AboutArticle } from '../components/AboutArticle'
import { ArticleFigure } from '../components/ArticleFigure'
import { internationalExhibition } from '../content/internationalExhibition'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function InternationalExhibitionPage() {
  usePageTitle(internationalExhibition.title)

  return (
    <AboutArticle title={internationalExhibition.title} lede={internationalExhibition.lede}>
      <p className="intro">
        {internationalExhibition.intro}{' '}
        <a href={internationalExhibition.nlsUrl} target="_blank" rel="noreferrer">
          Read more on the National Library of Scotland site
        </a>
        .
      </p>

      <ol className="exhibit-list">
        {internationalExhibition.items.map((item, index) => (
          <li key={item.image} className="block" id={`item-${index + 1}`}>
            <ArticleFigure
              src={resolveHref(`images/history/${encodeURI(item.image)}`)}
              alt={item.alt}
            >
              <span className="exhibit-num">{index + 1}.</span> {item.caption}
            </ArticleFigure>
          </li>
        ))}
      </ol>
    </AboutArticle>
  )
}
