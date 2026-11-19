import { ArticleFigure } from '../components/ArticleFigure'
import { PageHero } from '../components/PageHero'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/history/${encodeURI(file)}`)
}

export function InternationalExhibitionPage() {
  usePageTitle('International Exhibition 1886')

  return (
    <>
      <PageHero
        title="International Exhibition 1886"
        lede="The Prince Albert sundial and other traces of the International Exhibition."
        backTo={{ to: '/about', label: 'Back to History and Archaeology' }}
      />

      <div className="container section about-history about-article">
        <p className="intro">Here are a few items about the sundial pillar.</p>

        <ol className="exhibit-list">
          <li className="block" id="item-1">
            <ArticleFigure
              src={photo('international-exhibition.jpg')}
              alt="Newspaper article on the first commemorative tree planted for the 1886 exhibition"
            >
              <span className="exhibit-num">1.</span> Newspaper article describing the planting of
              the first commemorative tree (an elm which died a while ago) by Prince Albert Victor
              on 6 May 1886. The silver spade is now in the Royal Collection.
            </ArticleFigure>
          </li>
          <li className="block" id="item-2">
            <ArticleFigure
              src={photo('Sundial4.jpg')}
              alt="Painting of the Prince Albert sundial pillar in 1948"
            >
              <span className="exhibit-num">2.</span> A painting of the pillar in 1948. There were,
              in fact, four dials not three.
            </ArticleFigure>
          </li>
          <li className="block" id="item-3">
            <ArticleFigure
              src={photo('Sundial3.jpg')}
              alt="Plan showing commemorative trees planted by members of the royal family"
            >
              <span className="exhibit-num">3.</span> A plan held in the Bartholomew Archive. It
              shows the dates and location of all four trees planted by members of the royal
              family. The Marquis of Lothian stood in for Queen Victoria. The only trees remaining
              are the two sycamores planted in October 1886 by the future King Edward VII and Queen
              Alexandra.
            </ArticleFigure>
          </li>
          <li className="block" id="item-4">
            <ArticleFigure
              src={photo('Sundial1.jpg')}
              alt="Description of the sundial by James Gowans"
            >
              <span className="exhibit-num">4.</span> A description of the sundial by James Gowans.
            </ArticleFigure>
          </li>
          <li className="block" id="item-5">
            <ArticleFigure
              src={photo('Sundial2.jpg')}
              alt="Sundial drawing by James Gowans with the exhibition manager’s house behind"
            >
              <span className="exhibit-num">5.</span> Painting of the sundial by James Gowans
              (around 1886) showing the exhibition manager’s house behind (demolished) and dials
              in place, as intended, on the pillar.
            </ArticleFigure>
          </li>
        </ol>
      </div>
    </>
  )
}