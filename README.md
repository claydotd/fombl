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

## Content admin (Decap CMS)

Editors with **write access** to this GitHub repo can add and edit meetings, Friday/Saturday volunteer sessions, and news posts through a browser UI. There is no shared site password: login is **GitHub OAuth**, and GitHub’s own account security (password / SSO / 2FA) is what protects access.

### Open the admin

After the GitHub Pages prototype is deployed:

`https://claydotd.github.io/fombl/admin/`

(If `PAGES_BASE_PATH` is `/`, use `/admin/` on that host instead.)

Collections:

| Collection | Edits |
| --- | --- |
| Meetings | `src/content/data/meetings.json` |
| Friday sessions | `src/content/data/friday-sessions.json` (date, time, meeting place) |
| Saturday sessions | `src/content/data/saturday-sessions.json` |
| News posts | `public/news/*.md` (title, date, summary, markdown body) |

Saving in the CMS commits to `main`. GitHub Pages rebuilds the prototype. Changes under `src/content/data/` or `public/news/` also trigger **Deploy content to Heart Internet**, which updates `fombl.org.uk` (usually a few minutes).

Newsletter PDFs and project-update React reports are still edited in the repo by a developer, not in the CMS.

### One-time OAuth setup (webmaster)

Decap on static hosting needs a small OAuth proxy. The client secret stays on that proxy—not in this repo and not in the static admin files.

1. **Create a GitHub OAuth App** (GitHub → Settings → Developer settings → OAuth Apps → New):
   - Homepage URL: your proxy URL (e.g. `https://fombl-decap-oauth.workers.dev`)
   - Authorization callback URL: `https://<proxy-host>/callback`
2. **Deploy an OAuth proxy** (Cloudflare Worker is fine). Use a maintained Decap GitHub OAuth template such as [sterlingwes/decap-proxy](https://github.com/sterlingwes/decap-proxy) or [ottmartens/decap-cms-github-oauth-provider-cloudflare](https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare). Store the OAuth App **client ID** and **client secret** as Worker secrets.
3. **Point Decap at the proxy** in [`public/admin/config.yml`](public/admin/config.yml): set `backend.base_url` to the proxy origin (no trailing path). Leave `auth_endpoint: auth`.
4. Grant editors **write** access to this repository (Collaborators or a team). Only those accounts can publish through `/admin`.

Until `base_url` is set to a real proxy, the Login with GitHub button will fail.

## Edit the site (developers)

Most page copy lives as HTML/JSX in the page file under `src/pages/` (same pattern as Volunteering). Shared data that appears on more than one page stays in `src/content/`.

| What | Where |
| --- | --- |
| Page copy and layout | `src/pages/*.tsx` (edit the page you want to change) |
| Name, navigation, contacts, purposes | `src/content/site.ts` |
| Board and other roles | `src/content/people.ts` |
| Constitution, reports, accounts | `src/content/documents.ts` |
| Meetings and dated volunteer sessions | `src/content/data/*.json` (loaded by `src/content/events.ts`) |
| Standing Friday/Saturday copy | `src/content/events.ts` (`recurringVolunteering`) |
| News posts and newsletters | `public/news/` (markdown posts and PDF newsletters) |
| Rates and how to join | `src/content/membership.ts` |
| Mural interactive content | `src/content/mural.ts` |
| Project reports & newsletters | `src/pages/projects/reports/*.tsx` (newsletter archive on the same page) |
| Shared styles | `src/index.css` (mural/quiz styles load with those pages) |
| CMS admin UI | `public/admin/` |

Put photographs in `public/images/` and PDFs in `public/documents/`. A document `href` can be a full URL, or a path such as `documents/constitution.pdf`. Local paths keep the correct prefix on GitHub Pages and at the domain root.

### News feed

Drop content into `public/news/` (or use `/admin`). The site scans that folder in development and at build time.

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

**Automatic (CMS content):** pushes to `main` that change `src/content/data/**`, `public/news/**`, or `public/admin/**` run **Deploy content to Heart Internet** (remote folder `public_html/`, protocol `ftp`).

**Manual (full site):** Actions → **Deploy to Heart Internet** → Run workflow. Start with **dry_run** on, remote folder `public_html/`, protocol `ftp`. If the FTP account already lands inside `public_html`, set the remote folder to `/`. Review the log, then run again with dry run off. If the first real upload dies with `ECONNRESET`, create an empty `.ftp-deploy-sync-state.json` in that remote folder via File Manager and re-run until it finishes.

**Manual File Manager:** `npm run build:host`, then upload everything inside `dist/` into `public_html` (including `.htaccess`). Do not nest an extra `dist` folder.

### After upload

- Confirm `https://www.fombl.org.uk/` loads the new homepage and that a deep link such as `/events` works.
- If an old `index.htm` or similar still wins over `index.html`, rename or remove it in File Manager.
- GitHub Pages remains the review prototype (`npm run build:pages`); it does not change `fombl.org.uk` by itself.
