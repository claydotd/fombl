import { ArticleGallery } from '../components/ArticleGallery'
import { PageHero } from '../components/PageHero'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/wildflower/${encodeURI(file)}`)
}

export function WildflowerMeadowsPage() {
  usePageTitle('Wildflower meadows and relaxed mowing')

  return (
    <>
      <PageHero
        title="Wildflower meadows and relaxed mowing"
        lede="Tall grass, cat’s ear, and a wider range of flowers for pollinators on the Links."
        backTo={{ to: '/about', label: 'Back to History and Archaeology' }}
      />

      <div className="container section about-history about-article">
        <p>
          Thanks to relaxed mowing there has been a huge show of Hypochaeris radicata (cat’s ear)
          to be enjoyed at the South Links play area / wildflower meadow and elsewhere throughout
          the park. These support pollinators and should not be picked!
        </p>

        <ArticleGallery
          pair
          images={[
            { src: photo('Catsear.jpg'), alt: 'Cat’s ear on the Links' },
            { src: photo('Catsear2.jpg'), alt: 'Cat’s ear growing among tall grass' },
          ]}
        />

        <p>
          The Links wildflower meadow has done quite well this summer with a good range of
          pollinators growing amongst tall grasses which in themselves are also valuable
          pollinators.
        </p>
        <p>
          So this year we have observed ox-eye daisies, plantago, red and white campion, wood
          betony, toadflax, geranium, yellow rattle, rosebay willow herb, tansy, knapweed, meadow
          cranesbill.
        </p>

        <ArticleGallery
          pair
          images={[
            { src: photo('Wildflowers2.jpg'), alt: 'Wild flowers in the Links meadow' },
            {
              src: photo('Wildflowers3.jpg'),
              alt: 'Wild flowers among tall grass on the Links',
            },
          ]}
        />
      </div>
    </>
  )
}
