import { Link } from 'react-router'
import { NewsStory } from '../components/NewsStory'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { individualRate, concessionRate, organisationRate } from '../content/membership'
import { articles, isProjectUpdateArticle, type NewsArticle } from '../content/news'
import { recurringVolunteering } from '../content/events'
import { comingUp } from '../lib/diary'
import { formatDateWithWeekday } from '../lib/dates'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function photo(file: string) {
  return resolveHref(`images/${encodeURI(file)}`)
}

function ParkNote({
  title,
  text,
  link,
  cta,
}: {
  title: string
  text: string
  link: string
  cta: string
}) {
  return (
    <Link className="note-card" to={link}>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="more">{cta}</span>
    </Link>
  )
}

function newsCta(article: NewsArticle) {
  if (article.kind === 'newsletter') return 'View newsletter'
  if (isProjectUpdateArticle(article) && !/newsletter/i.test(article.title)) {
    return 'Read the report'
  }
  return 'Read more'
}

const treeGroup = recurringVolunteering.find((item) => item.id === 'tree-group')
const saturdaySessionsCopy = recurringVolunteering.find((item) => item.id === 'saturday-sessions')

export function HomePage() {
  usePageTitle()
  const diary = comingUp(6)
  const [lead, follow] = articles

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
            <a href="#highlights">Look out for...</a>
            <a href="#guide">Learn more</a>
          </OnThisPageNav>

          <section className="listings" id="diary" aria-labelledby="diary-title">
            <h2 id="diary-title">Upcoming events</h2>
            <div className="listing-row">
              <div className="listing-dates">
                <ul>
                  {diary.map((item) => (
                    <li
                      key={item.id}
                      className={item.tag ? 'listing listing-tagged' : 'listing'}
                    >
                      {item.tag ? (
                        <p className="event-tag">
                          <Link to="/membership">{item.tag}</Link>
                        </p>
                      ) : null}
                      <p className="stamp">
                        <time dateTime={item.date}>{formatDateWithWeekday(item.date)}</time>
                      </p>
                      <h3>
                        {item.to.startsWith('/events') ? (
                          item.title
                        ) : (
                          <Link to={item.to}>{item.title}</Link>
                        )}
                      </h3>
                      {item.time ? <p className="stamp-time">{item.time}</p> : null}
                      {item.detail || item.contact ? (
                        <p>
                          {item.detail}
                          {item.detail && item.contact ? '. ' : null}
                          {item.contact ? (
                            <Link to="/contact?subject=volunteering">{item.contact}</Link>
                          ) : null}
                        </p>
                      ) : null}
                      {item.text && item.to !== '/volunteering' ? <p>{item.text}</p> : null}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="listing-weekly">
                {treeGroup ? (
                  <li className="listing listing-standing">
                    <p className="stamp">
                      <span className="when">Every Friday</span>
                    </p>
                    <h3>
                      <Link to="/volunteering#friday-sessions">{treeGroup.title}</Link>
                    </h3>
                    {treeGroup.time ? <p className="stamp-time">{treeGroup.time}</p> : null}
                    <p className="stamp-time">
                      Email{' '}
                      <a href={`mailto:${treeGroup.contact ?? 'projects@fombl.org.uk'}`}>
                        {treeGroup.contact ?? 'projects@fombl.org.uk'}
                      </a>{' '}
                      to check meeting location
                    </p>
                    <p>{treeGroup.text}</p>
                  </li>
                ) : null}
                {saturdaySessionsCopy ? (
                  <li className="listing listing-standing">
                    <p className="stamp">
                      <span className="when">Last Saturday of the month</span>
                    </p>
                    <h3>
                      <Link to="/volunteering#saturday-sessions">
                        {saturdaySessionsCopy.title}
                      </Link>
                    </h3>
                    {saturdaySessionsCopy.time ? (
                      <p className="stamp-time">{saturdaySessionsCopy.time}</p>
                    ) : null}
                    <p className="stamp-time">
                      <Link to="/contact?subject=volunteering">
                        {saturdaySessionsCopy.where ?? 'Please check for meeting place'}
                      </Link>
                    </p>
                    <p>{saturdaySessionsCopy.text}</p>
                  </li>
                ) : null}
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
              <strong>{individualRate.price}</strong> a year for individual members,{' '}
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
            loading="lazy"
            decoding="async"
          />

          <section className="opener" id="dispatches" aria-labelledby="dispatches-title">
            <div className="lead">
              <h2 id="dispatches-title">Latest News</h2>
              {lead ? (
                <NewsStory
                  article={lead}
                  lead
                  actions={
                    <p>
                      <Link className="more" to={`/news/${lead.slug}`}>
                        {newsCta(lead)}
                      </Link>
                    </p>
                  }
                />
              ) : null}
            </div>
            <img
              className="plate"
              src={photo('autumn 16_2.jpg')}
              alt="A row of trees in autumn colour, with people walking on the grass"
              loading="lazy"
              decoding="async"
            />
            <div className="follow">
              {follow ? (
                <NewsStory
                  article={follow}
                  actions={
                    <p>
                      <Link className="more" to={`/news/${follow.slug}`}>
                        {newsCta(follow)}
                      </Link>
                    </p>
                  }
                />
              ) : null}
              <Link className="button" to="/news">
                All news
              </Link>
            </div>
            <img
              className="portrait"
              src={photo('Links in the Mist 001.jpg')}
              alt="Morning light through the branches of a tree on the Links"
              loading="lazy"
              decoding="async"
            />
          </section>

          <section className="field" id="highlights" aria-labelledby="highlights-title">
            <h2 id="highlights-title">Look out for...</h2>
            <div className="mosaic">
              <img
                className="snapshot"
                src={photo('Baseball.jpeg')}
                alt="A baseball game on the Meadows, with tenements behind the trees"
                loading="lazy"
                decoding="async"
              />
              <ParkNote
                title="Project Reports & Newsletters"
                text="FoMBL works with other agencies on a variety of projects in the Meadows and Bruntsfield Links."
                link="/projects"
                cta="Read the latest report here"
              />
              <ParkNote
                title="Wildflower meadows"
                text="Thanks to relaxed mowing the Links Wildflower meadow has done quite well this summer with a good range of pollinators growing amongst tall grasses which in themselves are also valuable pollinators."
                link="/about/wildflower-meadows"
                cta="Read more here"
              />
              <ParkNote
                title="Play"
                text="Have you seen the new toddlers' playground on Bruntsfield Links?"
                link="/about/play"
                cta="See the big picture"
              />
              <ParkNote
                title="The Jawbones"
                text="We won't see the original Jawbones on the Meadows again, but we might see a replica."
                link="/about/the-jawbones"
                cta="Read more..."
              />
            </div>
          </section>

          <section className="essay" id="guide" aria-labelledby="guide-title">
            <img
              className="essay-photo"
              src={photo('jawbonewalk.jpg')}
              alt="The Jawbone arches over a path lined with daffodils"
              loading="lazy"
              decoding="async"
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
