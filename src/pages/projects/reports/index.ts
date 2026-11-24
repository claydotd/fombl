import type { ComponentType } from 'react'
import { April2023Report, April2023Meta } from './April2023'
import { April2024Report, April2024Meta } from './April2024'
import { February2025Report, February2025Meta } from './February2025'
import { February2026Report, February2026Meta } from './February2026'
import { July2023Report, July2023Meta } from './July2023'
import { June2024Report, June2024Meta } from './June2024'
import { June2025Report, June2025Meta } from './June2025'
import { June2026Report, June2026Meta } from './June2026'
import { November2024Report, November2024Meta } from './November2024'
import { November2026Report, November2026Meta } from './November2026'
import { October2023Report, October2023Meta } from './October2023'
import { October2024Report, October2024Meta } from './October2024'
import { September2022Report, September2022Meta } from './September2022'
import { September2023Report, September2023Meta } from './September2023'
import { September2025Report, September2025Meta } from './September2025'

export type ProjectReportMeta = {
  id: string
  title: string
  navLabel: string
}

export type ProjectReportEntry = {
  meta: ProjectReportMeta
  Report: ComponentType
}

export const projectReports: readonly ProjectReportEntry[] = [
  { meta: November2026Meta, Report: November2026Report },
  { meta: June2026Meta, Report: June2026Report },
  { meta: February2026Meta, Report: February2026Report },
  { meta: September2025Meta, Report: September2025Report },
  { meta: June2025Meta, Report: June2025Report },
  { meta: February2025Meta, Report: February2025Report },
  { meta: November2024Meta, Report: November2024Report },
  { meta: October2024Meta, Report: October2024Report },
  { meta: June2024Meta, Report: June2024Report },
  { meta: April2024Meta, Report: April2024Report },
  { meta: October2023Meta, Report: October2023Report },
  { meta: September2023Meta, Report: September2023Report },
  { meta: July2023Meta, Report: July2023Report },
  { meta: April2023Meta, Report: April2023Report },
  { meta: September2022Meta, Report: September2022Report },
]

export function projectReportIdForSlug(slug: string) {
  const match = /^project-update-(.+)$/.exec(slug)
  return match?.[1] ?? null
}

export function getProjectReport(id: string) {
  return projectReports.find((entry) => entry.meta.id === id)
}

export function getProjectReportForSlug(slug: string) {
  const id = projectReportIdForSlug(slug)
  return id ? getProjectReport(id) : undefined
}
