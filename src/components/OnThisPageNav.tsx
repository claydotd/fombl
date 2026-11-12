import type { ReactNode } from 'react'

type LinkItem = {
  href: string
  label: string
  external?: boolean
}

type Props = {
  label?: string
  links?: readonly LinkItem[]
  children?: ReactNode
}

export function OnThisPageNav({ label = 'On this page', links, children }: Props) {
  return (
    <nav className="contents" aria-label={label}>
      {links
        ? links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ),
          )
        : children}
    </nav>
  )
}
