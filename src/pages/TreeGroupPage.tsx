import { Link } from 'react-router'
import { ArticleFigure } from '../components/ArticleFigure'
import { ArticleGallery } from '../components/ArticleGallery'
import { DocumentList } from '../components/DocumentList'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { SectionBlock } from '../components/SectionBlock'
import { treeGroupPage } from '../content/treeGroup'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/trees/${encodeURI(file)}`)
}

export function TreeGroupPage() {
  usePageTitle(treeGroupPage.title)
  const { planting, newTrees, plantsAndSurveys } = treeGroupPage

  return (
    <>
      <PageHero
        title={treeGroupPage.title}
        lede={treeGroupPage.lede}
        action={
          <p className="crumb">
            <Link to="/volunteering">Back to Volunteering</Link>
          </p>
        }
      />

      <div className="container section about-history about-article tree-group-page">
        <OnThisPageNav
          links={treeGroupPage.nav.map((item) => ({ href: `#${item.id}`, label: item.label }))}
        />

        <SectionBlock heading="When we meet" id="when">
          <p className="meta-line">
            <span>When:</span> {treeGroupPage.when}
          </p>
          <p className="meta-line">
            <span>Where:</span> {treeGroupPage.where}
          </p>
          {treeGroupPage.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <Link className="more" to="/volunteering">
              More about volunteering
            </Link>
          </p>
        </SectionBlock>

        <SectionBlock heading={planting.title} id="planting">
          {planting.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ArticleGallery
            tiles
            images={planting.images.map((image) => ({
              src: photo(image.file),
              alt: image.alt,
            }))}
          />
        </SectionBlock>

        <SectionBlock heading="Planted species" id="species">
          <ul className="species-grid">
            {treeGroupPage.species.map((item) => (
              <li key={item.name} className="species-card">
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </SectionBlock>

        <SectionBlock heading={newTrees.title} id="new-trees">
          <h3>{newTrees.bruntsfield.title}</h3>
          <ArticleFigure
            src={photo(newTrees.bruntsfield.file)}
            alt={newTrees.bruntsfield.alt}
            caption={newTrees.bruntsfield.caption}
          />

          <h3>{newTrees.northMeadow.title}</h3>
          <ArticleFigure
            src={photo(newTrees.northMeadow.file)}
            alt={newTrees.northMeadow.alt}
          />
          {newTrees.northMeadow.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <ArticleGallery
            tiles
            images={newTrees.planted.map((image) => ({
              src: photo(image.file),
              alt: image.alt,
            }))}
          />
        </SectionBlock>

        <SectionBlock heading={plantsAndSurveys.title} id="plants-surveys">
          <p>{plantsAndSurveys.plantsIntro}</p>
          <DocumentList items={[plantsAndSurveys.plantsPdf]} />

          <h3>Photographs of trees</h3>
          <p>{plantsAndSurveys.photosIntro}</p>
          <ArticleGallery
            tiles
            images={plantsAndSurveys.photos.map((image) => ({
              src: photo(image.file),
              alt: image.alt,
              caption: image.alt,
            }))}
          />

          <h3>Tree surveys</h3>
          <p>
            {plantsAndSurveys.surveyIntro}{' '}
            <a href={plantsAndSurveys.councilTreesUrl} target="_blank" rel="noreferrer">
              Trees | City of Edinburgh Council
            </a>
            .
          </p>
          <DocumentList items={[...plantsAndSurveys.documents]} />
        </SectionBlock>
      </div>
    </>
  )
}
