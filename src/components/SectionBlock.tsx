import type { ReactNode } from 'react'
import { slugify } from '../lib/slug'

type Props = {
  heading: string
  id?: string
  children: ReactNode
}

export function SectionBlock({ heading, id, children }: Props) {
  return (
    <section className="block" id={id ?? slugify(heading)}>
      <h2>{heading}</h2>
      {children}
    </section>
  )
}
