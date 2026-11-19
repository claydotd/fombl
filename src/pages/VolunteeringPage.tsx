import { Link } from 'react-router'
import { ArticleGallery } from '../components/ArticleGallery'
import { PageHero } from '../components/PageHero'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/volunteering/${encodeURI(file)}`)
}

type InlinePhoto = {
  file: string
  alt: string
  side: 'left' | 'right'
  wide?: boolean
}

function VolunteeringPhoto({ file, alt, side, wide }: InlinePhoto) {
  return (
    <figure
      className={[
        'volunteering-inline',
        `volunteering-inline--${side}`,
        wide ? 'volunteering-inline--wide' : null,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img src={photo(file)} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}

export function VolunteeringPage() {
  usePageTitle('Volunteering')

  return (
    <>
      <PageHero title="Volunteering" />

      <div className="container section volunteering-page">
        <section className="block volunteering-prose" id="saturday-sessions">
          <VolunteeringPhoto
            file="volunteer3.jpg"
            alt="Volunteer driving a wooden post into the ground with a post driver"
            side="right"
          />

          <p className="intro">
            There are always little jobs to be done around the park, and in these times of tightening
            budgets the Council can&apos;t always afford the manpower to do as much as it would like.
            So FoMBL members have been helping out.
          </p>
          <p className="block-quote">
            If you would like to help you are most welcome to come along.
          </p>

          <VolunteeringPhoto
            file="volunteer1.jpg"
            alt="Volunteers digging soil into a wheelbarrow along a park path beside a fence"
            side="left"
            wide
          />

          <p className="volunteering-details">
            Volunteering is on the last Saturday of the month. <br />
            Meet at the Cricket Pavilion. 10:00 am.
          </p>

          <p>
            The <Link to="/tree-group">Tree Group</Link> also welcomes volunteers, and meets every
            week on Friday at 1:30 pm at the Cricket Pavilion. <br />
            <Link to="/contact?subject=volunteering">
              Get in touch to let us know you&apos;re coming
            </Link>
            .
          </p>

          <p>
            Look out for the monthly reminder emailed to all members. Any changes to the regular
            pattern will be given there.
          </p>

          <ArticleGallery
            pair
            images={[
              {
                src: photo('volunteer2.jpg'),
                alt: 'Volunteers kneeling and working in mulched garden beds',
              },
              {
                src: photo('volunteer4.jpg'),
                alt: 'Volunteer and children planting beside a park path',
              },
            ]}
          />
        </section>
      </div>
    </>
  )
}
