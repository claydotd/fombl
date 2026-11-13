// PDFs. A href can be a full URL, or a file under public/ such as
// "documents/constitution.pdf". Local paths pick up the site base, so the
// same build works on GitHub Pages and on Heart Internet.

export type DocumentLink = {
  title: string
  href?: string
  meta?: string
  note?: string
  links?: Array<{ label: string; href: string }>
}

export const constitution: DocumentLink = {
  title: 'Constitution, September 2025',
  meta: 'The current published constitution',
  href: 'https://www.fombl.org.uk/FoMBLConstitution%20Sept%202025.pdf',
}

function doc(path: string) {
  return encodeURI(path)
}

/** One row per AGM, with every paper from that year's pack. */
export const agmDocuments: DocumentLink[] = [
  {
    title: 'AGM 2026',
    meta: '19 June 2026 · German Church, Chalmers Crescent',
    links: [
      {
        label: 'Agenda',
        href: doc('documents/AGM2026/Agenda fombl AGM 19th June 2026.pdf'),
      },
      {
        label: 'Draft minutes',
        href: doc('documents/AGM2026/FoMBL AGM 2025 draft Minutes.pdf'),
      },
      {
        label: 'Annual report and accounts',
        href: doc(
          'documents/AGM2026/FoMBL annual report and accounts 202526 FINAL.pdf',
        ),
      },
    ],
  },
  {
    title: 'AGM 2025',
    meta: '26 September 2025 · German Church, Chalmers Crescent',
    links: [
      {
        label: 'Agenda',
        href: doc(
          'documents/AGM2025/Agenda fombl AGM 26th September 2025 v2.pdf',
        ),
      },
      {
        label: 'Draft minutes',
        href: doc('documents/AGM2025/Draft minutes fombl AGM June 2024.pdf'),
      },
      {
        label: 'Constitutional amendments',
        href: doc(
          'documents/AGM2025/Paper on proposed constitutional amendments for 2025 AGM.pdf',
        ),
      },
      {
        label: 'Annual report and accounts',
        href: doc(
          'documents/AGM2025/FOMBL annual report accounts 2024-2025 final signatures removed.pdf',
        ),
      },
    ],
  },
  {
    title: 'AGM 2024',
    meta: '28 June 2024 · Meadows Croquet Club',
    links: [
      {
        label: 'Agenda',
        href: doc('documents/AGM2024/Agenda fombl AGM 28th June 2024.pdf'),
      },
      {
        label: 'Minutes',
        href: doc('documents/AGM2024/FoMBL AGM 2023 Minutes.pdf'),
      },
      {
        label: 'Annual report and accounts',
        href: doc(
          'documents/AGM2024/FOMBL annual report accounts 2023-2024 signatures removed.pdf',
        ),
      },
    ],
  },
  {
    title: 'AGM 2023',
    meta: '12 September 2023 · Meadows Croquet Club',
    links: [
      {
        label: 'Agenda',
        href: doc('documents/AGM2023/AGM Agenda 2023 FOMBL.pdf'),
      },
      {
        label: 'Draft minutes',
        href: doc('documents/AGM2023/FOMBLAGM2022DraftMinutes.pdf'),
      },
      {
        label: 'Annual report',
        href: doc('documents/AGM2023/Annual report 2023.pdf'),
      },
      {
        label: 'Accounts',
        href: doc(
          'documents/AGM2023/Fombl Summary of Accounts for AGM23 redacted .pdf',
        ),
      },
    ],
  },
  {
    title: 'AGM 2022',
    meta: '24 June 2022 · Croquet Club',
    links: [
      {
        label: 'Draft minutes',
        href: doc('documents/AGM2022/FOMBLAGM2022DraftMinutes.pdf'),
      },
      {
        label: 'Annual report',
        href: doc('documents/AGM2022/Report 2022.html'),
      },
      {
        label: 'Accounts',
        href: doc('documents/AGM2022/Accounts 2022.html'),
      },
    ],
  },
  {
    title: 'AGM 2021',
    meta: '25 June 2021',
    links: [
      {
        label: 'Annual report',
        href: doc('documents/AGM2021/Annual report 2021.pdf'),
      },
      {
        label: 'Accounts',
        href: doc(
          'documents/AGM2021/FOMBL final accounts 2020_21 220721.pdf',
        ),
      },
    ],
  },
  {
    title: 'AGM 2020',
    meta: '7 September 2020 · Zoom',
    links: [
      {
        label: 'Minutes',
        href: doc('documents/AGM2020/AGMminutes2020.pdf'),
      },
      {
        label: 'Accounts',
        href: doc(
          'documents/AGM2020/FOMBL FINAL accounts 2019_20 240920.pdf',
        ),
      },
    ],
  },
  {
    title: 'AGM 2019',
    meta: '21 June 2019 · Croquet Pavilion, Leven Terrace',
    links: [
      {
        label: 'Minutes',
        href: doc('documents/AGM2019/AGM Minutes 2019.pdf'),
      },
      {
        label: 'Annual report',
        href: doc('documents/AGM2019/annual report 2019.pdf'),
      },
      {
        label: 'Accounts',
        href: doc('documents/AGM2019/FOMBL final accounts 1819.pdf'),
      },
    ],
  },
  {
    title: 'AGM 2018',
    meta: '22 June 2018',
    links: [
      {
        label: 'Agenda',
        href: doc('documents/AGM2018/FOMBL AGM agenda June 22 2018.pdf'),
      },
      {
        label: 'Minutes',
        href: doc('documents/AGM2018/AGM Minutes 2018.pdf'),
      },
      {
        label: 'Annual report',
        href: doc('documents/AGM2018/FOMBL Annual Report 2018.pdf'),
      },
      {
        label: 'Accounts',
        href: doc('documents/AGM2018/FOMBL 2017_18 accounts FINAL jo.pdf'),
      },
    ],
  },
  {
    title: 'AGM 2017',
    meta: '23 June 2017',
    links: [
      {
        label: 'Agenda',
        href: doc('documents/AGM2017/FOMBL AGM agenda June 23 2017.pdf'),
      },
      {
        label: 'Annual report',
        href: doc('documents/AGM2017/FOMBL Annual Report 2017.pdf'),
      },
      {
        label: 'Accounts',
        href: doc('documents/AGM2017/fombl accs 2016-17.pdf'),
      },
    ],
  },
  {
    title: 'AGM 2016',
    meta: '8 June 2016',
    links: [
      {
        label: 'Agenda',
        href: doc('documents/AGM2017/AGM2016/AGM agenda 2016.pdf'),
      },
      {
        label: 'Minutes',
        href: doc('documents/AGM2017/AGM2016/AGM minutes 2016.pdf'),
      },
      {
        label: 'Annual report',
        href: doc('documents/AGM2017/AGM2016/FOMBL AR 2016.pdf'),
      },
      {
        label: 'Accounts',
        href: doc('documents/AGM2017/AGM2016/FOMBL accs 2016.pdf'),
      },
    ],
  },
]

export function hasLegacyHost(items: DocumentLink[]) {
  return items.some(
    (item) =>
      item.href?.includes('fombl.org.uk') ||
      item.links?.some((link) => link.href.includes('fombl.org.uk')),
  )
}
