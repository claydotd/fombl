# Friends of the Meadows and Bruntsfield Links

Design prototype for the FoMBL website.

## Pages

- Home
- Who’s who, with the constitution, annual reports, and accounts
- Events and meetings
- About and history (and related article pages)
- News, including a newsletter list
- Membership
- Volunteering and Tree Group
- Projects
- Contact

## Edit the site

Most page copy lives as HTML/JSX in the page file under `src/pages/` (same pattern as Volunteering). Shared data that appears on more than one page stays in `src/content/`.

| What | Where |
| --- | --- |
| Page copy and layout | `src/pages/*.tsx` (edit the page you want to change) |
| Name, navigation, contacts, purposes | `src/content/site.ts` |
| Board and other roles | `src/content/people.ts` |
| Constitution, reports, accounts | `src/content/documents.ts` |
| Meetings and volunteering diary | `src/content/events.ts` |
| News posts and newsletters | `public/news/` (markdown posts and PDF newsletters) |
| Rates and how to join | `src/content/membership.ts` |
| Mural interactive content | `src/content/mural.ts` |
| Project reports | `src/pages/projects/reports/*.tsx` |
| Shared styles | `src/index.css` (mural/quiz styles load with those pages) |

Put photographs in `public/images/` and PDFs in `public/documents/`. A document `href` can be a full URL, or a path such as `documents/constitution.pdf`. Local paths keep the correct prefix on GitHub Pages and at the domain root.

### News feed

Drop content into `public/news/`. The site scans that folder in development and at build time.

- **News posts** — markdown files with YAML frontmatter (`title`, `date`, `summary`) and a short body. Example: `public/news/agm-2026.md`.
- **Newsletters** — PDF files, optionally with a matching JSON sidecar for `title`, `date`, and `summary`. Example: `nl69.pdf` with `nl69.json`.

Items appear on `/news` newest first. Markdown posts open at `/news/<filename>`; newsletters open a short page with an Open PDF link.

Membership applications stay on [MemberMojo](https://membermojo.co.uk/fombl). Heart Internet does not need PHP or a database for this site.
