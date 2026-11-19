import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { isPrototype, site } from '../content/site'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      {isPrototype ? (
        <p className="prototype">
          Design prototype for review. The live site stays on{' '}
          <a href={site.liveUrl}>Github Pages</a> until the launch.
        </p>
      ) : null}
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
