import { Link } from 'react-router'
import { nav, site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{site.shortName}</p>
          <p>{site.name}</p>
          <p>
            {site.charityForm}. Scottish Charity {site.charityNumber}.
          </p>
        </div>
        <div>
          <h2>Pages</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul>
            <li>
              <Link to="/contact">Get in touch</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-base">
        <p>
          © {year} {site.name}.
        </p>
        <p>
          Site built by{' '}
          <a href="https://analoguegonedigital.co.uk" target="_blank" rel="noreferrer">
            analoguegonedigital.co.uk
          </a>
        </p>
        <p>
          <a href={site.oscrUrl} target="_blank" rel="noreferrer">
            Charity register (OSCR)
          </a>
        </p>
      </div>
    </footer>
  )
}
