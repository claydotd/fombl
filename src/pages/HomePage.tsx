import { Link } from 'react-router'
import { NewsStory } from '../components/NewsStory'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { highlights } from '../content/highlights'
import { adultRate, concessionRate, organisationRate } from '../content/membership'
import { articles } from '../content/news'
import { recurringVolunteering } from '../content/events'
import { comingUp } from '../lib/diary'
import { formatDateWithWeekday } from '../lib/dates'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/${encodeURI(file)}`)
}

function ParkNote({ title, text, link, cta }: (typeof highlights)[number]) {
  return (
    <Link className="note-card" to={link}>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="more">{cta}</span>
    </Link>
  )
}

const treeGroup = recurringVolunteering.find((item) => item.id === 'tree-group')
const saturdaySessionsCopy = recurringVolunteering.find((item) => item.id === 'saturday-sessions')

export function HomePage() {
  usePageTitle()
  const diary = comingUp(6)
  const [lead, follow] = articles
  const parkNotes: Array<(typeof highlights)[number]> = [...highlights]
  const [projectReport, wildflowers, playArea, jawbones, ...moreParks] = parkNotes

  return (
    <>
      <section className="cover">
        <img
          src={photo('Links in the Mist 003.jpg')}
          alt="A person walks across the Links in low mist, with the sun rising and Arthur’s Seat beyond"
        />
        <div className="cover-copy">
          <h1>
            Helping protect
            <br />
            Edinburgh's green space
          </h1>
        </div>
        <p className="lede">
          Friends of the Meadows and Bruntsfield Links is a voluntary organisation founded in 2001
          to help look after <strong>95 acres of parkland</strong> in the heart of Edinburgh.
        </p>
      </section>
      <div className="container front">
        <div className="issue">
          <OnThisPageNav label="In this edition">
            <a href="#diary">Upcoming events</a>
            <a href="#join">Join us!</a>
            <a href="#dispatches">Latest News</a>
            <a href="#parks">Look out for...</a>
            <a href="#guide">Learn more</a>
          </OnThisPageNav>

          <section className="listings" id="diary" aria-labelledby="diary-title">
            <h2 id="diary-title">Upcoming events</h2>
            <div className="listing-row">
              <div className="listing-dates">
                <h3 className="listing-subhead">
                  <Link to="/volunteering">Saturday Volunteer Sessions</Link>
                </h3>
                {saturdaySessionsCopy ? <p>{saturdaySessionsCopy.text}</p> : null}
                <ul>
                  {diary.map((item) => (
                    <li key={item.id} className="listing">
                      <p className="stamp">
                        <time dateTime={item.date}>{formatDateWithWeekday(item.date)}</time>
                        {item.time ? <span>{item.time}</span> : null}
                      </p>
                      <h3>
                        <Link to={item.to}>{item.title}</Link>
                      </h3>
                      <p>{item.detail}</p>
                      {item.text && item.to !== '/volunteering' ? <p>{item.text}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="listing-weekly">
                <li className="listing listing-standing">
                  <p className="stamp">
                    <span className="when">Every Friday</span>
                    <span>1:30pm</span>
                  </p>
                  <h3>
                    <Link to="/tree-group">Tree group</Link>
                  </h3>
                  <p>{treeGroup?.where ?? 'Cricket Pavilion.'}</p>
                  {treeGroup ? <p>{treeGroup.text}</p> : null}
                </li>
              </ul>
            </div>
            {diary.length === 0 ? (
              <p className="intro">
                The next public meeting has not been listed yet. Meetings are usually held three
                times a year.
              </p>
            ) : null}
            <Link className="more" to="/events">
              See more events and meetings
            </Link>
          </section>

          <section className="join" id="join" aria-labelledby="join-title">
            <h2 id="join-title">Join us!</h2>
            <p>
              If you would like to join FoMBL, the annual membership fee is{' '}
              <strong>{adultRate.price}</strong> a year for individual members,{' '}
              <strong>{concessionRate.price}</strong> for students and young people under 25, and{' '}
              <strong>{organisationRate.price}</strong> for organisations. Payment can be made by
              credit card via MemberMojo, or by Standing Order.
            </p>
            <Link className="more" to="/membership">
              Learn More
            </Link>
          </section>

          <img
            className="panorama"
            src={photo('autumn 16_1.jpg')}
            alt="Autumn leaves on the grass, with trees and tenements beyond"
          />

          <section className="opener" id="dispatches" aria-labelledby="dispatches-title">
            <div className="lead">
              <h2 id="dispatches-title">Latest News</h2>
              {lead ? <NewsStory article={lead} lead /> : null}
            </div>
            <img
              className="plate"
              src={photo('autumn 16_2.jpg')}
              alt="A row of trees in autumn colour, with people walking on the grass"
            />
            <div className="follow">
              {follow ? <NewsStory article={follow} /> : null}
              <Link className="more" to="/news">
                All news
              </Link>
            </div>
            <img
              className="portrait"
              src={photo('Links in the Mist 001.jpg')}
              alt="Morning light through the branches of a tree on the Links"
            />
          </section>

          <section className="field" id="parks" aria-labelledby="parks-title">
            <h2 id="parks-title">Look out for...</h2>
            <div className="mosaic">
              <img
                className="snapshot"
                src={photo('Baseball.jpeg')}
                alt="A baseball game on the Meadows, with tenements behind the trees"
              />
              {projectReport ? <ParkNote {...projectReport} /> : null}
              {wildflowers ? <ParkNote {...wildflowers} /> : null}
              {playArea ? <ParkNote {...playArea} /> : null}
              {jawbones ? <ParkNote {...jawbones} /> : null}
              {moreParks.map((item) => (
                <ParkNote key={item.title} {...item} />
              ))}
            </div>
          </section>

          <section className="essay" id="guide" aria-labelledby="guide-title">
            <img
              className="essay-photo"
              src={photo('jawbonewalk.jpg')}
              alt="The Jawbone arches over a path lined with daffodils"
            />
            <div className="essay-copy">
              <h2 id="guide-title">Learn about the Meadows and Bruntsfield Links</h2>
              <p>
                We've collected some information about the Meadows and Bruntsfield Links, including
                the history, archaeology and some fascinating features you can find around the area.
              </p>
              <Link className="more" to="/about">
                Learn more
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
