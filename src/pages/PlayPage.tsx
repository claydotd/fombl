import { AboutArticle } from '../components/AboutArticle'
import { ArticleFigure } from '../components/ArticleFigure'
import { play } from '../content/play'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function PlayPage() {
  usePageTitle(play.title)

  return (
    <AboutArticle title={play.title} lede={play.lede}>
      <ArticleFigure
        src={resolveHref(`images/play/${encodeURI(play.image.file)}`)}
        alt={play.image.alt}
        caption={play.image.caption}
      />

      {play.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <p className="credit">
        <em>{play.credit}</em>
      </p>
    </AboutArticle>
  )
}
