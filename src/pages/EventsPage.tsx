import { Link } from 'react-router'
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
        lede="Public meetings are usually held three times a year, often with a guest speaker. Alongside those, FoMBL runs recurring volunteer sessions and dated work mornings in the parks."
      />

      <div className="container section events-page">
        <section className="listings" aria-labelledby="meetings-title">
          <div className="listing-dates">
            <ul>
              {meetings.map((meeting) => (
                <li key={meeting.id} id={meeting.id} className="listing">
                  <p className="stamp">
                    <time dateTime={meeting.date}>{formatDateWithWeekday(meeting.date)}</time>
                    {meeting.time ? <span>{meeting.time}</span> : null}
                  </p>
                  {meeting.tag ? <p className="event-tag">{meeting.tag}</p> : null}
                  <h3>{meeting.title}</h3>
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
                        <span>10:00am</span>
                      </p>
                      <h3>
                        <Link to="/volunteering">Volunteer morning</Link>
                      </h3>
                      <p>
                        Cricket Pavilion
                        {session.note ? `. ${session.note}` : ''}
                      </p>
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
                  <p>{saturdayCopy.where}</p>
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
