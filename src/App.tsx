import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router'
import { Layout } from './components/Layout'
import { routerBasename } from './lib/url'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { EventsPage } from './pages/EventsPage'
import { HelenAcquroffPage } from './pages/HelenAcquroffPage'
import { HomePage } from './pages/HomePage'
import { InternationalExhibitionPage } from './pages/InternationalExhibitionPage'
import { JawbonesPage } from './pages/JawbonesPage'
import { MembershipPage } from './pages/MembershipPage'
import { MuralPage } from './pages/MuralPage'
import { MuralQuizPage } from './pages/MuralQuizPage'
import { NelsonPillarsPage } from './pages/NelsonPillarsPage'
import { NewsArticlePage } from './pages/NewsArticlePage'
import { NewsPage } from './pages/NewsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PlayPage } from './pages/PlayPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { TreeGroupPage } from './pages/TreeGroupPage'
import { VolunteeringPage } from './pages/VolunteeringPage'
import { WhosWhoPage } from './pages/WhosWhoPage'
import { WildflowerMeadowsPage } from './pages/WildflowerMeadowsPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    const id = decodeURIComponent(hash.slice(1))
    let cancelled = false
    let userMoved = false

    const scrollToTarget = () => {
      if (cancelled || userMoved) return false
      const target = document.getElementById(id)
      if (!target) return false
      target.scrollIntoView()
      return true
    }

    const stopFollowing = () => {
      userMoved = true
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'PageUp' ||
        event.key === 'PageDown' ||
        event.key === 'Home' ||
        event.key === 'End' ||
        event.key === ' '
      ) {
        stopFollowing()
      }
    }

    // Images above the hash target often load after the first paint and push
    // the section down. Re-scroll on load until layout settles or the user moves.
    window.addEventListener('wheel', stopFollowing, { passive: true })
    window.addEventListener('touchmove', stopFollowing, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    scrollToTarget()

    const pendingImages = Array.from(document.images).filter((img) => !img.complete)
    const onImageLoad = () => {
      scrollToTarget()
    }
    for (const img of pendingImages) {
      img.addEventListener('load', onImageLoad)
      img.addEventListener('error', onImageLoad)
    }

    const retries = [50, 200, 500, 1000].map((ms) =>
      window.setTimeout(() => {
        if (!scrollToTarget() && !userMoved && ms === 1000) window.scrollTo(0, 0)
      }, ms),
    )

    void document.fonts?.ready.then(() => {
      scrollToTarget()
    })

    return () => {
      cancelled = true
      for (const retry of retries) window.clearTimeout(retry)
      window.removeEventListener('wheel', stopFollowing)
      window.removeEventListener('touchmove', stopFollowing)
      window.removeEventListener('keydown', onKeyDown)
      for (const img of pendingImages) {
        img.removeEventListener('load', onImageLoad)
        img.removeEventListener('error', onImageLoad)
      }
    }
  }, [pathname, hash])

  return null
}

function TrailingSlash() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname.length > 1 && pathname.endsWith('/')) {
      navigate(`${pathname.replace(/\/+$/, '')}${search}${hash}`, { replace: true })
    }
  }, [pathname, search, hash, navigate])

  return null
}

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <ScrollManager />
      <TrailingSlash />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="whos-who" element={<WhosWhoPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/helen-acquroff" element={<HelenAcquroffPage />} />
          <Route path="about/nelson-pillars" element={<NelsonPillarsPage />} />
          <Route path="about/international-exhibition" element={<InternationalExhibitionPage />} />
          <Route path="about/mural" element={<MuralPage />} />
          <Route path="about/mural/quiz" element={<MuralQuizPage />} />
          <Route path="about/the-jawbones" element={<JawbonesPage />} />
          <Route path="about/play" element={<PlayPage />} />
          <Route path="about/wildflower-meadows" element={<WildflowerMeadowsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsArticlePage />} />
          <Route path="membership" element={<MembershipPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="volunteering" element={<VolunteeringPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="tree-group" element={<TreeGroupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
