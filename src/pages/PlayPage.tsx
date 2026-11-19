import { ArticleFigure } from '../components/ArticleFigure'
import { PageHero } from '../components/PageHero'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

export function PlayPage() {
  usePageTitle('Playgrounds')

  return (
    <>
      <PageHero
        title="Playgrounds"
        lede="A new toddlers’ playground on south-west Bruntsfield Links."
        backTo={{ to: '/about', label: 'Back to History and Archaeology' }}
      />

      <div className="container section about-history about-article">
        <ArticleFigure
          src={resolveHref(
            `images/play/${encodeURI('Bruntfield LInks new toddlers playground.jpg')}`,
          )}
          alt="New toddlers’ playground at south-west Bruntsfield Links"
          caption="New toddlers’ playground at SW Bruntsfield Links (adjoining Muriel Spark Walk)"
        />

        <p>
          I realised that there was a lack of play equipment serving families who live around the
          South area of the Links and after consultation with local families I raised sufficient
          funds to install two simple pieces of wooden equipment in the form of a covered log house
          and a wooden train on a special safety mat.
        </p>
        <p>
          The site chosen was considered ideal as it is a completely fenced area with one access
          gate thus minimising dog entry and toddler escape! There is also a FoMBL wildflower
          meadow which we hope can be used by the children to plant their own bulbs and seeds.
        </p>
        <p>
          We have provided wood chip access paths to prevent damage to seeded soil as well as muddy
          feet! Funds were provided by a generous donation by nearby Forbes nursery, CEC community
          fund, the Scottish Government and FoMBL. Contractor (Landcare Solutions) organisation was
          by Alan Grevers of CEC.
        </p>

        <p className="credit">
          <em>Neil Roger</em>
        </p>
      </div>
    </>
  )
}
