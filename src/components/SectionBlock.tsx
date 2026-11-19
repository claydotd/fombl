import type { ReactNode } from 'react'

type Props = {
  heading: string
  id?: string
  children: ReactNode
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function SectionBlock({ heading, id, children }: Props) {
  return (
    <section className="block" id={id ?? slugify(heading)}>
      <h2>{heading}</h2>
      {children}
    </section>
  )
}
