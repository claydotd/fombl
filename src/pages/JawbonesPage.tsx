import { AboutArticle } from '../components/AboutArticle'
import { ArticleGallery } from '../components/ArticleGallery'
import { SectionBlock } from '../components/SectionBlock'
import { jawbones } from '../content/jawbones'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/jawbones/${encodeURI(file)}`)
}

export function JawbonesPage() {
  usePageTitle(jawbones.title)

  return (
    <AboutArticle title={jawbones.title} lede={jawbones.lede}>
      <p className="intro">{jawbones.intro}</p>

      {jawbones.updates.map((update) => (
        <SectionBlock key={update.heading} heading={update.heading}>
          {update.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {'links' in update && update.links
            ? update.links.map((link) => (
                <p key={link.href}>
                  <a className="more" href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </p>
              ))
            : null}
        </SectionBlock>
      ))}

      <ArticleGallery
        images={jawbones.images.map((image) => ({
          src: photo(image.file),
          alt: image.alt,
          caption: image.alt,
        }))}
      />

      <SectionBlock heading="Restoration appeal" id="appeal">
        {jawbones.appeal.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </SectionBlock>

      {jawbones.sections.map((section) => (
        <SectionBlock key={section.heading} heading={section.heading}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SectionBlock>
      ))}
    </AboutArticle>
  )
}
