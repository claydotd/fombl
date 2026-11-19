// Rates and copy from the legacy Membership.html page.
// Update rates if the board changes them.

export const adultRate = {
  id: 'adult',
  name: 'Adult',
  price: '£8',
  detail: 'For anyone aged 16 or over.',
}

export const concessionRate = {
  id: 'concession',
  name: 'Student or under 25',
  price: '£5',
  detail: 'For students, and for members under 25.',
}

export const organisationRate = {
  id: 'organisation',
  name: 'Organisation',
  price: '£15',
  detail: 'For a group that supports the aims of FoMBL.',
}

export const membershipEmail = 'membership@fombl.org.uk'

export const memberMojo = {
  join: 'https://membermojo.co.uk/fombl/joinus',
  renew: 'https://membermojo.co.uk/fombl/signin',
} as const

export const membershipForms = {
  membership: {
    title: 'Membership form',
    href: 'documents/MembershipForm.pdf',
  },
  standingOrder: {
    title: 'Standing order form',
    href: 'documents/StandingOrderForm.pdf',
  },
} as const

export const membershipPage = {
  title: 'Membership',
  lede: 'Membership is open to people and organisations who support the aims of the charity and pay the annual subscription.',
  join: {
    title: 'Joining FoMBL',
    preferred:
      'If you would like to join FoMBL, our preferred method is for you to use our MemberMojo system where you can pay by credit card.',
    offline:
      'Alternatively there is a membership form which allows you to join offline. Download the PDF form and fill it in. If you are not sending a cheque you can email it to our membership secretary. If you are sending a cheque, print the form and post it to the address given on the form.',
  },
  renew: {
    title: 'Renewing your membership',
    body: 'Membership details are now handled by MemberMojo. Use the link below to check your details and renew your membership. Membership is due to be renewed each year in June. You can pay instantly by card (preferred) or by cheque, bank transfer or standing order. For these last three options your membership will be confirmed when the payment clears.',
  },
  standingOrders: {
    title: 'Standing orders',
    body: 'Standing orders can be set up directly with the bank. FoMBL bank details are supplied during the registration process. However, if you wish to fill out a standing order form to send to the bank then it is linked here along with a membership form. We can process membership forms for you if you prefer not to complete the online version.',
  },
  donations: {
    title: 'Donations',
    bank: 'If you wish to make a donation to FoMBL, this can be made by online bank transfer. Bank details are on the standing order form.',
    textPayment: {
      title: 'Payment by text',
      intro:
        "It is now possible to make payments to FoMBL by text message. To make a donation, text 'FOMBL' to 70490 to donate £5. This costs £5 plus a standard rate message. Alternatively, you can opt to give any whole amount up to £20. Thanks!",
      amountsIntro: 'List below shows how to donate other amounts:',
      amounts: [
        { code: 'FOMBL 3', amount: '£3' },
        { code: 'FOMBL 5', amount: '£5' },
        { code: 'FOMBL 15', amount: '£15' },
        { code: 'FOMBL 4', amount: '£4' },
        { code: 'FOMBL 10', amount: '£10' },
        { code: 'FOMBL 20', amount: '£20' },
      ],
      closing:
        'Your donation will help us maintain this lovely park, with all its trees, wildflowers and historical interest.',
    },
  },
} as const
