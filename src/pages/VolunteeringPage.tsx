import { Link } from 'react-router'
import { ArticleGallery } from '../components/ArticleGallery'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { externalLinkProps, resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/volunteering/${encodeURI(file)}`)
}

function projectPhoto(file: string) {
  return resolveHref(`images/projects/${encodeURI(file)}`)
}

const goodGymUrl = 'https://www.goodgym.org/v3/areas/edinburgh'
const dirtyWeekendersUrl = 'https://www.dirties.org.uk'

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

const externalGroups = [
  {
    name: 'GoodGym',
    href: goodGymUrl,
    image: 'ProjRepNov26_34.jpg',
    alt: 'GoodGym volunteers posing with wheelbarrows',
    text: 'Combines fitness with volunteering: runners and walkers travel to community projects, then spend a couple of hours on practical outdoor work such as planting, weeding and mulching.',
  },
  {
    name: 'The Dirty Weekenders',
    href: dirtyWeekendersUrl,
    image: 'ProjRepNov26_38.jpg',
    alt: 'The Dirty Weekenders student volunteers',
    text: 'A University of Edinburgh student society who turn out in large numbers for practical conservation work in local green spaces.',
  },
] as const

export function VolunteeringPage() {
  usePageTitle('Volunteering')

  return (
    <>
      <PageHero title="Volunteering" />

      <div className="container section volunteering-page">
        <OnThisPageNav
          links={[
            { href: '#saturday-sessions', label: 'Saturday sessions' },
            { href: '#external-volunteers', label: 'External volunteer groups' },
          ]}
        />

        <section className="block volunteering-prose" id="saturday-sessions">
          <h2>Saturday volunteer sessions</h2>
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
            Friday.{' '}
            <Link to="/contact?subject=volunteering">Please check for times and meeting place</Link>.
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

        <section className="block" id="external-volunteers">
          <h2>External volunteer groups</h2>
          <p className="intro">
            FoMBL also works with some fantastic external groups who bring extra hands to keep the Meadows and Links looking great.
          </p>

          <ul className="volunteer-group-cards">
            {externalGroups.map((group) => (
              <li key={group.name}>
                <a
                  className="volunteer-group-card"
                  href={group.href}
                  {...externalLinkProps(group.href)}
                >
                  <img
                    src={projectPhoto(group.image)}
                    alt={group.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="volunteer-group-card-body">
                    <h3>{group.name}</h3>
                    <p>{group.text}</p>
                    <span className="more">Visit {group.name}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
