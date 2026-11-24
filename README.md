# Friends of the Meadows and Bruntsfield Links

Static React site for FoMBL. No PHP or database is required on Heart Internet.

## Pages

- Home
- Who’s who, with the constitution, annual reports, and accounts
- Events and meetings
- About and history (and related article pages)
- News, including a newsletter list
- Membership
- Volunteering and Tree Group
- Project Reports & Newsletters
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
| Project reports & newsletters | `src/pages/projects/reports/*.tsx` (newsletter archive on the same page) |
| Shared styles | `src/index.css` (mural/quiz styles load with those pages) |

Put photographs in `public/images/` and PDFs in `public/documents/`. A document `href` can be a full URL, or a path such as `documents/constitution.pdf`. Local paths keep the correct prefix on GitHub Pages and at the domain root.

### News feed

Drop content into `public/news/`. The site scans that folder in development and at build time.

- **News posts** — markdown files with YAML frontmatter (`title`, `date`, `summary`) and a short body. Example: `public/news/agm-2026.md`.
- **Newsletters** — PDF files, optionally with a matching JSON sidecar for `title`, `date`, and `summary`. Example: `nl69.pdf` with `nl69.json`.

Items appear on `/news` newest first. Markdown posts open at `/news/<filename>`; newsletters open a short page with an Open PDF link.

Membership applications stay on [MemberMojo](https://membermojo.co.uk/fombl). Heart Internet does not need PHP or a database for this site.

## Publish on Heart Internet

The live build is `dist/` after `npm run build:host` (domain root, searchable, with `.htaccess` for deep links). Prefer the FTP workflow so you do not have to upload by hand.

### One-time setup

1. In the GitHub repo, add secrets `HEART_FTP_SERVER`, `HEART_FTP_USERNAME`, and `HEART_FTP_PASSWORD` (from the Heart control panel FTP details).
2. Download a full backup of the current `public_html` before the first upload.
3. Leave folders the new site still links to in place (`Newsletters/`, `Trees/`, and similar) until those files are copied into this project.

### Deploy

**GitHub Actions (preferred):** Actions → **Deploy to Heart Internet** → Run workflow. Start with **dry_run** on, remote folder `public_html/`, protocol `ftp`. If the FTP account already lands inside `public_html`, set the remote folder to `/`. Review the log, then run again with dry run off. If the first real upload dies with `ECONNRESET`, create an empty `.ftp-deploy-sync-state.json` in that remote folder via File Manager and re-run until it finishes.

**Manual File Manager:** `npm run build:host`, then upload everything inside `dist/` into `public_html` (including `.htaccess`). Do not nest an extra `dist` folder.

### After upload

- Confirm `https://www.fombl.org.uk/` loads the new homepage and that a deep link such as `/events` works.
- If an old `index.htm` or similar still wins over `index.html`, rename or remove it in File Manager.
- GitHub Pages remains the review prototype (`npm run build:pages`); it does not change `fombl.org.uk`.
