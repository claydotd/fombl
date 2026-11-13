import type { DocumentLink } from '../content/documents'
import { externalLinkProps, resolveHref } from '../lib/url'

export function DocumentList({ items }: { items: DocumentLink[] }) {
  if (items.length === 0) {
    return <p className="empty">Nothing is listed here yet.</p>
  }

  return (
    <ul className="documents">
      {items.map((item) => {
        const links =
          item.links ??
          (item.href ? [{ label: linkLabel(item.href), href: item.href }] : [])

        return (
          <li key={`${item.title}-${item.meta ?? ''}`} className="doc">
            <div>
              <strong>{item.title}</strong>
              {item.meta ? <span className="hint">{item.meta}</span> : null}
              {item.note ? <span className="hint">{item.note}</span> : null}
            </div>
            {links.length > 0 ? (
              <div className="doc-links">
                {links.map((link) => (
                  <a
                    key={`${link.label}-${link.href}`}
                    className="button button-small"
                    href={resolveHref(link.href)}
                    {...externalLinkProps(link.href)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              <span className="slot">File not added</span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function linkLabel(href: string) {
  return /\.html?(?:$|[?#])/i.test(href) ? 'Open' : 'Open PDF'
}
