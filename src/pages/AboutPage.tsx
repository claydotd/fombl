import { Fragment } from 'react'
import { Link } from 'react-router'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { SectionBlock } from '../components/SectionBlock'
import {
  archaeology,
  bruntsfieldLinks,
  greenHeritageCredit,
  historyNav,
  historyPictures,
  relatedTopics,
  theMeadows,
  type HistoryPicture,
} from '../content/history'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function historyPhoto(file: string) {
  return resolveHref(`images/history/${encodeURI(file)}`)
}

function pictureByFile(file: string) {
  const picture = historyPictures.find((item) => item.file === file)
  if (!picture) throw new Error(`Missing history picture: ${file}`)
  return picture
}

type InlineInsert = {
  file: string
  side: 'left' | 'right'
}

function HistoryInlinePhoto({
  picture,
  side,
}: {
  picture: HistoryPicture
  side: 'left' | 'right'
}) {
  return (
    <figure className={`history-inline history-inline--${side}`}>
      <img src={historyPhoto(picture.file)} alt={picture.alt} />
    </figure>
  )
}

function ParagraphsWithPhotos({
  paragraphs,
  inserts = {},
}: {
  paragraphs: readonly string[]
  inserts?: Partial<Record<number, readonly InlineInsert[]>>
}) {
  return (
    <div className="history-prose">
      {paragraphs.map((paragraph, index) => (
        <Fragment key={paragraph}>
          <p>{paragraph}</p>
          {inserts[index]?.map((insert) => (
            <HistoryInlinePhoto
              key={insert.file}
              picture={pictureByFile(insert.file)}
              side={insert.side}
            />
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export function AboutPage() {
  usePageTitle('About and history')

  return (
    <>
      <PageHero
        title="History and Archaeology"
      />

      <div className="container section about-history">
        <OnThisPageNav
          links={historyNav.map((item) => ({ href: `#${item.id}`, label: item.label }))}
        />

        <SectionBlock heading={bruntsfieldLinks.title} id="bruntsfield-links">
          <p className="meta-line">
            <span>Situation:</span> {bruntsfieldLinks.situation}
          </p>
          <p className="meta-line">
            <span>Area:</span> {bruntsfieldLinks.area}
          </p>
          <ParagraphsWithPhotos
            paragraphs={bruntsfieldLinks.paragraphs}
            inserts={{
              4: [{ file: 'golf1.jpg', side: 'right' }],
            }}
          />
          {bruntsfieldLinks.facilities ? (
            <p className="meta-line">
              <span>Facilities:</span> {bruntsfieldLinks.facilities}
            </p>
          ) : null}
        </SectionBlock>

        <SectionBlock heading={theMeadows.title} id="the-meadows">
          <p className="meta-line">
            <span>Situation:</span> {theMeadows.situation}
          </p>
          <p className="meta-line">
            <span>Area:</span> {theMeadows.area}
          </p>
          <ParagraphsWithPhotos
            paragraphs={theMeadows.paragraphs}
            inserts={{
              3: [{ file: 'H4.jpg', side: 'left' }],
              6: [{ file: 'H2.jpg', side: 'right' }],
              9: [{ file: 'H3.jpg', side: 'left' }],
              12: [{ file: 'H6.jpg', side: 'right' }],
              15: [{ file: 'H5.jpg', side: 'left' }],
            }}
          />
          <p className="credit">
            <em>{greenHeritageCredit.source}</em>
            <br />
            {greenHeritageCredit.courtesy}
          </p>
        </SectionBlock>

        <SectionBlock heading={archaeology.title} id="archaeology">
          {archaeology.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="credit">
            <em>{archaeology.author}</em>
          </p>
        </SectionBlock>

        <div className="related-topics">
          {relatedTopics.map((topic) => (
            <section className="related-topic" id={topic.id} key={topic.id}>
              {'image' in topic ? (
                <figure className="related-topic-photo">
                  <img
                    src={resolveHref(`images/${encodeURI(topic.image.path)}`)}
                    alt={topic.image.alt}
                  />
                </figure>
              ) : null}
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
              {'href' in topic ? (
                <a className="more" href={resolveHref(topic.href)} target="_blank" rel="noreferrer">
                  {topic.cta}
                </a>
              ) : (
                <Link className="more" to={topic.to}>
                  {topic.cta}
                </Link>
              )}
            </section>
          ))}
        </div>

        <SectionBlock heading="Historical pictures" id="pictures">
          <p className="intro">Some historical pictures of the area.</p>
          <ul className="history-gallery">
            {historyPictures.map((picture) => (
              <li key={picture.file}>
                <figure>
                  <img src={historyPhoto(picture.file)} alt={picture.alt} />
                </figure>
              </li>
            ))}
          </ul>
        </SectionBlock>
      </div>
    </>
  )
}
