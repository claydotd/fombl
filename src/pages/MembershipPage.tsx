import { DocumentList } from '../components/DocumentList'
import { PageHero } from '../components/PageHero'
import {
  adultRate,
  concessionRate,
  memberMojo,
  membershipEmail,
  membershipForms,
  membershipPage,
  organisationRate,
} from '../content/membership'
import { externalLinkProps } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

const formDocuments = [
  {
    title: membershipForms.membership.title,
    href: membershipForms.membership.href,
  },
  {
    title: membershipForms.standingOrder.title,
    href: membershipForms.standingOrder.href,
  },
]

export function MembershipPage() {
  usePageTitle(membershipPage.title)

  return (
    <>
      <PageHero title={membershipPage.title} lede={membershipPage.lede} />

      <div className="container section membership">
        <section className="block" id="join">
          <h2>{membershipPage.join.title}</h2>
          <p>{membershipPage.join.preferred}</p>
          <p>
            <a className="button" href={memberMojo.join} {...externalLinkProps(memberMojo.join)}>
              Join FoMBL on MemberMojo
            </a>
          </p>
          <p>
            {membershipPage.join.offline} Email{' '}
            <a
              href={`mailto:${membershipEmail}?subject=${encodeURIComponent(
                'From the FoMBL website: New member',
              )}`}
            >
              {membershipEmail}
            </a>
            .
          </p>
          <DocumentList items={[formDocuments[0]]} />
          <p>
            <strong>
              The subscription is currently {adultRate.price} per year for individual members, or{' '}
              {concessionRate.price} per year for students and young people under 25, and{' '}
              {organisationRate.price} for organisations.
            </strong>
          </p>
        </section>

        <section className="block" id="renew">
          <h2>{membershipPage.renew.title}</h2>
          <p>{membershipPage.renew.body}</p>
          <p>
            <a className="button" href={memberMojo.renew} {...externalLinkProps(memberMojo.renew)}>
              Renew membership on MemberMojo
            </a>
          </p>
        </section>

        <section className="block" id="standing-orders">
          <h2>{membershipPage.standingOrders.title}</h2>
          <p>{membershipPage.standingOrders.body}</p>
          <DocumentList items={formDocuments} />
        </section>

        <section className="block" id="donations">
          <h2>{membershipPage.donations.title}</h2>
          <p>
            {membershipPage.donations.bank} See the standing order form for details.
          </p>
          <DocumentList items={[formDocuments[1]]} />

          <h3 className="subhead" id="payment-by-text">
            {membershipPage.donations.textPayment.title}
          </h3>
          <p>{membershipPage.donations.textPayment.intro}</p>
          <p>{membershipPage.donations.textPayment.amountsIntro}</p>
          <ul className="text-donate-list">
            {membershipPage.donations.textPayment.amounts.map((item) => (
              <li key={item.code}>
                <code>{item.code}</code>
                <span>{item.amount}</span>
                <span>One-off</span>
              </li>
            ))}
          </ul>
          <p>{membershipPage.donations.textPayment.closing}</p>
        </section>
      </div>
    </>
  )
}
