import { ArticleFigure } from '../components/ArticleFigure'
import { PageHero } from '../components/PageHero'
import { SectionBlock } from '../components/SectionBlock'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function NelsonPillarsPage() {
  usePageTitle('The Nelson Pillars')

  return (
    <>
      <PageHero
        title="The Nelson Pillars"
        lede="The story of the twin pillars at the east end of Melville Drive."
        backTo={{ to: '/about', label: 'Back to History and Archaeology' }}
      />

      <div className="container section about-history about-article">
        <p className="intro">
          The two pillars at the east end of Melville Drive were erected by Thomas Nelson and Sons,
          Printers and Publishers, in 1881.
        </p>

        <SectionBlock heading="Description of the pillars">
          <p>
            Two square freestanding polished ashlar pillars are surmounted by carved heraldic
            beasts. The lion atop the north pillar supports the castle emblem of the City of
            Edinburgh with a shield below which reads “The Right Hon. Thomas J Boyd, Lord Provost
            1880”. The shield under a unicorn at the south pillar reads “Presented to the City of
            Edinburgh by Messrs T Nelson and Sons”. The pillars were designed by John Lessels
            (1809–1883) in 1880 and erected in 1881.
          </p>
        </SectionBlock>

        <SectionBlock heading="Thomas Nelson & Sons">
          <ArticleFigure
            src={resolveHref('images/history/NelsonsFire.jpg')}
            alt="Fire at Nelsons printworks, 1878"
            caption="Fire at Nelsons printworks, 1878"
          />
          <p>
            Thomas Neilson, later spelt Nelson, (1780–1861) opened a second-hand bookshop at West
            Bow in 1798. He started printing books and moved to a larger premises at Castle Hill.
            This became such a success that Thomas and his sons William and Thomas junior acquired
            a site to build a purpose-made printing works at Hope Park End (now Hope Park Crescent)
            in 1843. In 1850 Thomas junior improved the Rotary Press, which revolutionised
            printing, and the Nelson works expanded to become the largest printing and publishing
            house in Scotland.
          </p>
          <p>
            In 1878 a huge fire completely destroyed the Hope Park works. At that time Nelsons was
            of major importance to the Edinburgh economy, employing around 600 workers. The City of
            Edinburgh, recognising this, provided Nelsons with a temporary site opposite the
            destroyed works at the east end of the Meadows. The new printing presses allowed the
            business to continue until a permanent location was found. Luckily all the original
            plates were stored in fireproof safes and survived the fire.
          </p>
          <p>
            Fortunately the ideal site was soon acquired nearby, adjacent to Holyrood Park on
            Parkside, fronting Old Dalkeith Road. The new building opened in 1880 and the temporary
            printing works were removed from the Meadows. In the same year William and Thomas
            junior commissioned the design of these two pillars in gratitude to the City and people
            of Edinburgh for providing a site to enable them to continue printing after the 1878
            fire. The printing works were demolished in the 1970s and the A-listed Scottish Widows
            office opened in 1976. As for Nelson’s, the publishing business was, after several
            owners, acquired by HarperCollins and, in 2019, trades under the name “Thomas Nelson”
            in Tennessee, USA.
          </p>
        </SectionBlock>

        <p className="credit">
          <em>Neil Roger</em>
        </p>
      </div>
    </>
  )
}
