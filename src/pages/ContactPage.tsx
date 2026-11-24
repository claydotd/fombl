import { useSearchParams } from 'react-router'
import { FormEmbed } from '../components/FormEmbed'
import { PageHero } from '../components/PageHero'
import { contacts } from '../content/site'
import { usePageTitle } from '../lib/usePageTitle'

export function ContactPage() {
  usePageTitle('Contact')
  const [params] = useSearchParams()
  const subject = params.get('subject') || undefined

  return (
    <>
      <PageHero
        title="Contact"
        lede="Send a message with the form below, or email the right person directly."
      />

      <div className="container section contact-page">
        <div className="contact-page-layout">
          <FormEmbed title="Contact us" subject={subject} />

          <section className="block contact-page-emails" id="emails">
            <h2>Email</h2>
            <ul className="contact-page-list">
              {contacts.map((contact) => (
                <li key={contact.email}>
                  <span>{contact.label}</span>
                  <span className="contact-page-name">{contact.name}</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
