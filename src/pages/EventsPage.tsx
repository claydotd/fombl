import { Link } from 'react-router'
import { OnThisPageNav } from '../components/OnThisPageNav'
import { PageHero } from '../components/PageHero'
import { meetings, recurringVolunteering, volunteerSessions } from '../content/events'
import { formatDateWithWeekday, isOnOrAfterToday } from '../lib/dates'
import { usePageTitle } from '../lib/usePageTitle'

const saturdayCopy = recurringVolunteering.find((item) => item.id === 'saturday-sessions')
const treeGroup = recurringVolunteering.find((item) => item.id === 'tree-group')

export function EventsPage() {
  usePageTitle('Events and meetings')
  const upcomingSessions = volunteerSessions.filter((session) => isOnOrAfterToday(session.date))

  return (
    <>
      <PageHero
        title="Events and meetings"
        lede="Check here for upcoming meetings, events and volunteer sessions."
      />

      <div className="container section events-page">
        <OnThisPageNav
          links={[
            { href: '#meetings', label: 'Meetings' },
            { href: '#volunteering', label: 'Volunteering' },
          ]}
        />

        <section className="listings" id="meetings" aria-labelledby="meetings-title">
          <h2 id="meetings-title">Meetings</h2>
          <div className="listing-dates">
            <ul>
              {meetings.map((meeting) => (
                <li
                  key={meeting.id}
                  id={meeting.id}
                  className={meeting.tag ? 'listing listing-tagged' : 'listing'}
                >
                  {meeting.tag ? (
                    <p className="event-tag">
                      <Link to="/membership">{meeting.tag}</Link>
                    </p>
                  ) : null}
                  <p className="stamp">
                    <time dateTime={meeting.date}>{formatDateWithWeekday(meeting.date)}</time>
                  </p>
                  <h3>{meeting.title}</h3>
                  {meeting.time ? <p className="stamp-time">{meeting.time}</p> : null}
                  <p>{meeting.place}</p>
                  <p>{meeting.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="listings" id="volunteering" aria-labelledby="volunteering-title">
          <h2 id="volunteering-title">Volunteering</h2>
          <p className="intro">
            Members and anyone else who wants to help are welcome. There is always a small job to
            be done, and the Council cannot cover all of them.{' '}
            <Link to="/volunteering">More about volunteering</Link>.
          </p>

          <div className="listing-row">
            <div className="listing-dates" id="saturday-sessions">
              <h3 className="listing-subhead">Saturday volunteer sessions</h3>
              {upcomingSessions.length === 0 ? (
                <p>The next Saturday sessions have not been listed yet.</p>
              ) : (
                <ul>
                  {upcomingSessions.map((session) => (
                    <li key={session.date} id={`session-${session.date}`} className="listing">
                      <p className="stamp">
                        <time dateTime={session.date}>{formatDateWithWeekday(session.date)}</time>
                      </p>
                      <h3>
                        <Link to="/volunteering">Volunteer morning</Link>
                      </h3>
                      <p className="stamp-time">10:00am</p>
                      {session.note || session.contact ? (
                        <p>
                          {session.note}
                          {session.note && session.contact ? '. ' : null}
                          {session.contact ? (
                            <Link to="/contact?subject=volunteering">{session.contact}</Link>
                          ) : null}
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <ul className="listing-weekly">
              {treeGroup ? (
                <li className="listing listing-standing" id={treeGroup.id}>
                  <p className="stamp">
                    <span className="when">Every Friday</span>
                  </p>
                  <h3>
                    <Link to="/tree-group">{treeGroup.title}</Link>
                  </h3>
                  <p className="stamp-time">
                    <Link to="/contact?subject=volunteering">
                      Please check for times and meeting place
                    </Link>
                  </p>
                  <p>{treeGroup.text}</p>
                </li>
              ) : null}
              {saturdayCopy ? (
                <li className="listing listing-standing">
                  <p className="stamp">
                    <span className="when">Last Saturday of the month</span>
                  </p>
                  <h3>
                    <Link to="/volunteering">{saturdayCopy.title}</Link>
                  </h3>
                  <p className="stamp-time">10:00am</p>
                  <p className="stamp-time">
                    <Link to="/contact?subject=volunteering">
                      {saturdayCopy.where ?? 'Please check for meeting place'}
                    </Link>
                  </p>
                  <p>{saturdayCopy.text}</p>
                </li>
              ) : null}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
