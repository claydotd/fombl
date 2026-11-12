// Newsletter archive from https://fombl.org.uk/news.html
// Local copies in public/news/ are preferred when present; otherwise links
// point at the live site until those PDFs are copied across.

export type NewsletterIssue = {
  number: number
  slug: string
  label: string
  season: string
  year: number
  /** YYYY-MM for sorting and display */
  date: string
  href: string
}

function issue(
  number: number,
  season: string,
  year: number,
  month: string,
  ext: 'pdf' | 'html' = 'pdf',
): NewsletterIssue {
  const file = `nl${number}.${ext}`
  return {
    number,
    slug: `nl${number}`,
    label: `Newsletter No. ${number}, ${season} ${year}`,
    season,
    year,
    date: `${year}-${month}`,
    href: `https://fombl.org.uk/Newsletters/${file}`,
  }
}

export const newsletters: NewsletterIssue[] = [
  issue(69, 'Spring', 2025, '03'),
  issue(68, 'Autumn', 2024, '10'),
  issue(67, 'Summer', 2024, '06'),
  issue(66, 'Spring', 2024, '03'),
  issue(65, 'Autumn', 2023, '10'),
  issue(64, 'Summer', 2023, '06'),
  issue(63, 'Spring', 2023, '03'),
  issue(62, 'Autumn', 2022, '10'),
  issue(61, 'Summer', 2022, '06'),
  issue(60, 'Spring', 2022, '03'),
  issue(59, 'Autumn', 2021, '10'),
  issue(58, 'Summer', 2021, '06'),
  issue(57, 'Spring', 2021, '03'),
  issue(56, 'Autumn', 2020, '10'),
  issue(55, 'Summer', 2020, '06'),
  issue(54, 'Spring', 2020, '03'),
  issue(53, 'Autumn', 2019, '10'),
  issue(52, 'Summer', 2019, '06'),
  issue(51, 'Spring', 2019, '03'),
  issue(50, 'Autumn', 2018, '10'),
  issue(49, 'Summer', 2018, '06'),
  issue(48, 'Spring', 2018, '03'),
  issue(47, 'Autumn', 2017, '10'),
  issue(46, 'Summer', 2017, '06'),
  issue(45, 'Spring', 2017, '03'),
  issue(44, 'Autumn', 2016, '10'),
  issue(43, 'Summer', 2016, '06'),
  issue(42, 'Spring', 2016, '03'),
  issue(41, 'Autumn', 2015, '10'),
  issue(40, 'Summer', 2015, '06'),
  issue(39, 'Spring', 2015, '03'),
  issue(38, 'Autumn', 2014, '10'),
  issue(37, 'Summer', 2014, '06'),
  issue(36, 'Spring', 2014, '03'),
  issue(35, 'Autumn', 2013, '10'),
  issue(34, 'Summer', 2013, '06'),
  issue(33, 'Spring', 2013, '03'),
  issue(32, 'Autumn', 2012, '10'),
  issue(31, 'Summer', 2012, '06'),
  issue(30, 'Spring', 2012, '03'),
  issue(29, 'Autumn', 2011, '10'),
  issue(28, 'Summer', 2011, '06'),
  issue(27, 'Spring', 2011, '03'),
  issue(26, 'Autumn', 2010, '10'),
  issue(25, 'Summer', 2010, '06'),
  issue(24, 'Spring', 2010, '03'),
  issue(23, 'Autumn', 2009, '10'),
  issue(22, 'Summer', 2009, '06'),
  issue(21, 'Spring', 2009, '03'),
  issue(20, 'Autumn', 2008, '10'),
  issue(19, 'Summer', 2008, '06'),
  issue(18, 'Spring', 2008, '03'),
  issue(17, 'Autumn', 2007, '10'),
  issue(16, 'Summer', 2007, '06'),
  issue(15, 'Spring', 2007, '03'),
  issue(14, 'Autumn', 2006, '10'),
  issue(13, 'Summer', 2006, '06'),
  issue(12, 'Spring', 2006, '03'),
  issue(11, 'Autumn', 2005, '10'),
  issue(10, 'Summer', 2005, '06'),
  issue(9, 'Spring', 2005, '03'),
  issue(8, 'Autumn', 2004, '10'),
  issue(7, 'Summer', 2004, '06', 'html'),
  issue(6, 'January', 2004, '01', 'html'),
  issue(5, 'Autumn', 2003, '10'),
  issue(4, 'Spring', 2003, '03'),
  issue(3, 'Autumn', 2002, '10'),
  issue(2, 'Spring', 2002, '03'),
  issue(1, 'Autumn', 2001, '10'),
]
