import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Suspense fallback={<div className="container section">Loading…</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
