import { Link } from 'react-router'
import { DocumentList } from '../components/DocumentList'
import { PageHero } from '../components/PageHero'
import { agmDocuments, constitution } from '../content/documents'
import { board, otherRoles, type Person } from '../content/people'
import { site } from '../content/site'
import { usePageTitle } from '../lib/usePageTitle'

export function WhosWhoPage() {
  usePageTitle("Who's who")

  return (
    <>
      <PageHero
        eyebrow="The charity"
        title="Who's who"
        lede="The board, the constitution, and the annual report and accounts sent to OSCR."
      />

      <div className="container section whos-who">
        <section className="block" id="board">
          <h2>Board of trustees</h2>
          <PersonList people={board} />
          <h3 className="subhead">Other roles</h3>
          <PersonList people={otherRoles} />
        </section>

        <section className="block" id="constitution">
          <h2>Constitution</h2>
          <p className="intro">
            {site.shortName} is a {site.charityForm}, {site.charityNumber}. The constitution covers
            membership, the board, meetings, and the accounts.
          </p>
          <DocumentList items={[constitution]} />
        </section>

        <section className="block" id="reports">
          <h2 id="accounts">AGM Documents</h2>
          <p className="intro">
            Annual Reports and Accounts, Agendas, Minutes and more.
          </p>
          <DocumentList items={agmDocuments} />
        </section>

        <section className="block" id="projects">
          <h2>Projects</h2>
          <p className="intro">
            FoMBL works with the Council and other partners on planting, playgrounds, wildflower
            meadows, benches, and other improvements across the Meadows and Bruntsfield Links.
            Progress is recorded in regular project and volunteer updates.
          </p>
          <p>
            <Link className="button" to="/projects">
              Read the projects report
            </Link>
          </p>
        </section>
      </div>
    </>
  )
}

function PersonList({ people }: { people: Person[] }) {
  return (
    <ul className="roster">
      {people.map((person) => (
        <li key={`${person.role}-${person.name}`}>
          <span className="roster-role">{person.role}</span>
          <span className="roster-person">
            <span className={person.name === 'Vacant' ? 'is-vacant' : undefined}>{person.name}</span>
            {person.note ? <span className="roster-note"> · {person.note}</span> : null}
          </span>
          {person.email ? (
            <a className="roster-contact" href={`mailto:${person.email}`}>
              {person.email}
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
