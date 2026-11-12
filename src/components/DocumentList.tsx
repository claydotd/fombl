import type { DocumentLink } from '../content/documents'
import { externalLinkProps, resolveHref } from '../lib/url'

export function DocumentList({ items }: { items: DocumentLink[] }) {
  if (items.length === 0) {
    return <p className="empty">Nothing is listed here yet.</p>
  }

  return (
    <ul className="documents">
      {items.map((item) => (
        <li key={`${item.title}-${item.meta ?? ''}`} className="doc">
          <div>
            <strong>{item.title}</strong>
            {item.meta ? <span className="hint">{item.meta}</span> : null}
            {item.note ? <span className="hint">{item.note}</span> : null}
          </div>
          {item.href ? (
            <a
              className="button button-small"
              href={resolveHref(item.href)}
              {...externalLinkProps(item.href)}
            >
              Open PDF
            </a>
          ) : (
            <span className="slot">File not added</span>
          )}
        </li>
      ))}
    </ul>
  )
}
