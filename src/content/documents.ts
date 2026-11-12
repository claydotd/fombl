// PDFs. A href can be a full URL, or a file under public/ such as
// "documents/constitution.pdf". Local paths pick up the site base, so the
// same build works on GitHub Pages and on Heart Internet.

export type DocumentLink = {
  title: string
  href?: string
  meta?: string
  note?: string
}

export type Statement = DocumentLink & {
  covers: Array<'report' | 'accounts'>
}

export const constitution: DocumentLink = {
  title: 'Constitution, September 2025',
  meta: 'The current published constitution',
  href: 'https://www.fombl.org.uk/FoMBLConstitution%20Sept%202025.pdf',
}

export const annualStatements: Statement[] = [
  {
    title: 'Annual report and accounts 2025–2026',
    meta: '1 April 2025 to 31 March 2026',
    href: encodeURI(
      'documents/AGM2026/FoMBL annual report and accounts 202526 FINAL.pdf',
    ),
    covers: ['report', 'accounts'],
  },
  {
    title: 'Annual report and accounts 2024–2025',
    meta: '1 April 2024 to 31 March 2025',
    href: encodeURI(
      'documents/FOMBL annual report accounts 2024-2025 final signatures removed.pdf',
    ),
    covers: ['report', 'accounts'],
  },
  {
    title: 'Annual report and accounts 2023–2024',
    meta: '1 April 2023 to 31 March 2024',
    href: encodeURI(
      'documents/FOMBL annual report accounts 2023-2024 signatures removed.pdf',
    ),
    covers: ['report', 'accounts'],
  },
]

export function hasLegacyHost(items: DocumentLink[]) {
  return items.some((item) => item.href?.includes('fombl.org.uk'))
}
