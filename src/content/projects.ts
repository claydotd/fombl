import data from './projects.json'

export type ProjectInlinePart =
  | { type: 'text'; text: string }
  | { type: 'link'; label: string; href: string }

export type ProjectImage = {
  file: string
  alt: string
}

export type ProjectBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'rich'; parts: ProjectInlinePart[] }
  | { type: 'image'; file: string; alt: string }
  | { type: 'gallery'; images: ProjectImage[] }
  | { type: 'list'; items: string[] }

export type ProjectReport = {
  id: string
  title: string
  navLabel: string
  blocks: ProjectBlock[]
}

export type ProjectsPageContent = {
  title: string
  lede: string
  reports: ProjectReport[]
}

export const projectsPage = data as ProjectsPageContent
