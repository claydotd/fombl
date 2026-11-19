import { PageHero } from '../components/PageHero'
import {
  individualRate,
  concessionRate,
  organisationRate,
} from '../content/membership'
import { externalLinkProps, resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

const membershipEmail = 'membership@fombl.org.uk'

const memberMojo = {
  join: 'https://membermojo.co.uk/fombl/joinus',
  renew: 'https://membermojo.co.uk/fombl/signin',
} as const

const membershipForm = {
  title: 'Membership form',
  href: 'documents/MembershipForm.pdf',
} as const

const standingOrderForm = {
  title: 'Standing order form',
  href: 'documents/StandingOrderForm.pdf',
} as const

const textDonateAmounts = [
  { code: 'FOMBL 3', amount: '£3' },
  { code: 'FOMBL 5', amount: '£5' },
  { code: 'FOMBL 15', amount: '£15' },
  { code: 'FOMBL 4', amount: '£4' },
  { code: 'FOMBL 10', amount: '£10' },
  { code: 'FOMBL 20', amount: '£20' },
] as const

function FormButtons({
  forms,
}: {
  forms: readonly { title: string; href: string }[]
}) {
  return (
    <p className="membership-forms">
      {forms.map((form) => (
        <a
          key={form.href}
          className="button button-file"
          href={resolveHref(form.href)}
          target="_blank"
          rel="noreferrer"
        >
          {form.title}
        </a>
      ))}
    </p>
  )
}

export function MembershipPage() {
  usePageTitle('Membership')

  return (
    <>
      <PageHero
        title="Membership"
        lede="Membership is open to people and organisations who support the aims of the charity and pay the annual subscription."
      />

      <div className="container section membership">
        <section className="block" id="join">
          <h2>Joining FoMBL</h2>
          <p>
            If you would like to join FoMBL, our preferred method is for you to use our MemberMojo
            system where you can pay by credit card.
          </p>
          <p>
            <a
              className="button button-membermojo"
              href={memberMojo.join}
              {...externalLinkProps(memberMojo.join)}
            >
              Join FoMBL on MemberMojo
            </a>
          </p>
          <p>
            Alternatively there is a membership form which allows you to join offline. Download the
            PDF form and fill it in. If you are not sending a cheque you can email it to our
            membership secretary. If you are sending a cheque, print the form and post it to the
            address given on the form. Email{' '}
            <a
              href={`mailto:${membershipEmail}?subject=${encodeURIComponent(
                'From the FoMBL website: New member',
              )}`}
            >
              {membershipEmail}
            </a>
            .
          </p>
          <FormButtons forms={[membershipForm]} />
          <p>
            <strong>
              The subscription is currently {individualRate.price} per year for individual members, or{' '}
              {concessionRate.price} per year for students and young people under 25, and{' '}
              {organisationRate.price} for organisations.
            </strong>
          </p>
        </section>

        <section className="block" id="renew">
          <h2>Renewing your membership</h2>
          <p>
            Membership details are now handled by MemberMojo. Use the link below to check your
            details and renew your membership. Membership is due to be renewed each year in June.
            You can pay instantly by card (preferred) or by cheque, bank transfer or standing order.
            For these last three options your membership will be confirmed when the payment clears.
          </p>
          <p>
            <a
              className="button button-membermojo"
              href={memberMojo.renew}
              {...externalLinkProps(memberMojo.renew)}
            >
              Renew membership on MemberMojo
            </a>
          </p>
        </section>

        <section className="block" id="standing-orders">
          <h2>Standing orders</h2>
          <p>
            Standing orders can be set up directly with the bank. FoMBL bank details are supplied
            during the registration process. However, if you wish to fill out a standing order form
            to send to the bank then it is linked here along with a membership form. We can process
            membership forms for you if you prefer not to complete the online version.
          </p>
          <FormButtons forms={[membershipForm, standingOrderForm]} />
        </section>

        <section className="block" id="donations">
          <h2>Donations</h2>
          <p>
            If you wish to make a donation to FoMBL, this can be made by online bank transfer. Bank
            details are on the standing order form. See the standing order form for details.
          </p>
          <FormButtons forms={[standingOrderForm]} />

          <h3 className="subhead" id="payment-by-text">
            Payment by text
          </h3>
          <p>
            It is now possible to make payments to FoMBL by text message. To make a donation, text
            'FOMBL' to 70490 to donate £5. This costs £5 plus a standard rate message. Alternatively,
            you can opt to give any whole amount up to £20. Thanks!
          </p>
          <p>List below shows how to donate other amounts:</p>
          <ul className="text-donate-list">
            {textDonateAmounts.map((item) => (
              <li key={item.code}>
                <code>{item.code}</code>
                <span>{item.amount}</span>
                <span>One-off</span>
              </li>
            ))}
          </ul>
          <p>
            Your donation will help us maintain this lovely park, with all its trees, wildflowers and
            historical interest.
          </p>
        </section>
      </div>
    </>
  )
}
