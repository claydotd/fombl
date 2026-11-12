import { AboutArticle } from '../components/AboutArticle'
import { ArticleGallery } from '../components/ArticleGallery'
import { wildflowerMeadows } from '../content/wildflowerMeadows'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/wildflower/${encodeURI(file)}`)
}

export function WildflowerMeadowsPage() {
  usePageTitle(wildflowerMeadows.title)

  return (
    <AboutArticle title={wildflowerMeadows.title} lede={wildflowerMeadows.lede}>
      {wildflowerMeadows.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <ArticleGallery
        pair
        images={wildflowerMeadows.catsearImages.map((image) => ({
          src: photo(image.file),
          alt: image.alt,
        }))}
      />

      {wildflowerMeadows.more.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <ArticleGallery
        pair
        images={wildflowerMeadows.meadowImages.map((image) => ({
          src: photo(image.file),
          alt: image.alt,
        }))}
      />
    </AboutArticle>
  )
}
