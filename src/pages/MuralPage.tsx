import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { Link } from 'react-router'
import { AboutArticle } from '../components/AboutArticle'
import { OnThisPageNav } from '../components/OnThisPageNav'
import {
  mural,
  type MuralPoemLine,
  type MuralTone,
} from '../content/mural'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

const ZOOM_MIN = 1
const ZOOM_MAX = 4
const ZOOM_STEP = 0.35

type ZoomState = {
  scale: number
  x: number
  y: number
}

const ZOOM_RESET: ZoomState = { scale: 1, x: 0, y: 0 }

function muralPhoto(file: string) {
  return resolveHref(`images/mural/${encodeURI(file)}`)
}

function poemLineText(line: string | MuralPoemLine) {
  return typeof line === 'string' ? line : line.text
}

function PoemLine({ line }: { line: string | MuralPoemLine }) {
  if (typeof line === 'string') {
    return line === '' ? <br /> : <span className="mural-poem-line">{line}</span>
  }

  const className = [
    'mural-poem-line',
    line.italic ? 'is-italic' : '',
    line.script ? 'is-script' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return line.text === '' ? <br /> : <span className={className}>{line.text}</span>
}

function toneClass(tone: MuralTone) {
  return `is-${tone}`
}

function clampZoom(scale: number) {
  return Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, scale))
}

export function MuralPage() {
  usePageTitle(mural.title)

  const panels = mural.panels
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState<ZoomState>(ZOOM_RESET)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    originX: number
    originY: number
  } | null>(null)
  const titleId = useId()
  const activePanel = panels[activeIndex]
  const isZoomed = zoom.scale > 1.01

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (lightboxOpen && !dialog.open) dialog.showModal()
    if (!lightboxOpen && dialog.open) dialog.close()
  }, [lightboxOpen])

  useEffect(() => {
    setZoom(ZOOM_RESET)
  }, [activeIndex, lightboxOpen])

  useEffect(() => {
    if (!lightboxOpen) return
    const viewport = viewportRef.current
    if (!viewport) return

    function onWheel(event: WheelEvent) {
      event.preventDefault()
      const delta = event.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP
      setZoom((current) => {
        const nextScale = clampZoom(current.scale + delta)
        return nextScale <= 1 ? ZOOM_RESET : { ...current, scale: nextScale }
      })
    }

    viewport.addEventListener('wheel', onWheel, { passive: false })
    return () => viewport.removeEventListener('wheel', onWheel)
  }, [lightboxOpen, activeIndex])

  useEffect(() => {
    if (!lightboxOpen) return

    function onKey(event: globalThis.KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActiveIndex((index) => (index - 1 + panels.length) % panels.length)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActiveIndex((index) => (index + 1) % panels.length)
      }
      if (event.key === '+' || event.key === '=') {
        event.preventDefault()
        setZoom((current) => ({
          ...current,
          scale: clampZoom(current.scale + ZOOM_STEP),
        }))
      }
      if (event.key === '-' || event.key === '_') {
        event.preventDefault()
        setZoom((current) => {
          const nextScale = clampZoom(current.scale - ZOOM_STEP)
          return nextScale <= 1 ? ZOOM_RESET : { ...current, scale: nextScale }
        })
      }
      if (event.key === '0') {
        event.preventDefault()
        setZoom(ZOOM_RESET)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxOpen, panels.length])

  function openLightbox(index: number) {
    setActiveIndex(index)
    setZoom(ZOOM_RESET)
    setLightboxOpen(true)
  }

  function closeLightbox() {
    setLightboxOpen(false)
    setZoom(ZOOM_RESET)
  }

  function stepPanel(delta: number) {
    setActiveIndex((index) => (index + delta + panels.length) % panels.length)
  }

  function zoomBy(delta: number) {
    setZoom((current) => {
      const nextScale = clampZoom(current.scale + delta)
      return nextScale <= 1 ? ZOOM_RESET : { ...current, scale: nextScale }
    })
  }

  function onCarouselKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      stepPanel(-1)
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      stepPanel(1)
    }
  }

  function onViewportPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (zoom.scale <= 1) return
    if (event.button !== 0) return
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: zoom.x,
      originY: zoom.y,
    }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function onViewportPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    setZoom((current) => ({
      ...current,
      x: drag.originX + (event.clientX - drag.startX),
      y: drag.originY + (event.clientY - drag.startY),
    }))
  }

  function onViewportPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return
    dragRef.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  function onViewportDoubleClick() {
    setZoom((current) => (current.scale > 1 ? ZOOM_RESET : { scale: 2.2, x: 0, y: 0 }))
  }

  return (
    <AboutArticle title={mural.title}>
      <p className="mural-work-title">
        <span className="mural-work-name">{mural.artworkTitle}</span>
      </p>
      <p className="intro">{mural.blurb}</p>

      <OnThisPageNav>
        <a href="#panels">Panels</a>
        <a href="#words">The words</a>
        <a href="#explore">Explore</a>
        <a href="#interviews">Five Questions</a>
        <a href="#launch">Launch Party</a>
        <Link to={mural.quiz.to}>Quiz</Link>
        <a href={mural.reviewUrl} target="_blank" rel="noreferrer">
          Augusta Kirkwood’s review
        </a>
      </OnThisPageNav>

      <section className="block" id="panels">
        <h2>The panels</h2>
        <p className="intro">
          Click to zoom in on a panel and see more detail.
        </p>

        <div
          className="mural-carousel"
          onKeyDown={onCarouselKey}
          aria-roledescription="carousel"
          aria-label="Meadows mural panels"
        >
          <div className="mural-carousel-stage">
            <button
              type="button"
              className="mural-carousel-nav is-prev"
              aria-label="Previous panel"
              onClick={() => stepPanel(-1)}
            >
              ‹
            </button>

            <button
              type="button"
              className="mural-carousel-frame"
              onClick={() => openLightbox(activeIndex)}
              aria-label={`Open ${activePanel.label} larger`}
            >
              <img
                src={muralPhoto(activePanel.full)}
                alt={activePanel.alt}
                draggable={false}
              />
            </button>

            <button
              type="button"
              className="mural-carousel-nav is-next"
              aria-label="Next panel"
              onClick={() => stepPanel(1)}
            >
              ›
            </button>
          </div>

          <p className="mural-carousel-status" aria-live="polite">
            {activePanel.label} of {panels.length}
          </p>

          <ul className="mural-carousel-thumbs" role="list">
            {panels.map((panel, index) => (
              <li key={panel.full}>
                <button
                  type="button"
                  className={
                    index === activeIndex
                      ? 'mural-carousel-thumb is-current'
                      : 'mural-carousel-thumb'
                  }
                  aria-label={`Show ${panel.label}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => setActiveIndex(index)}
                  onDoubleClick={() => openLightbox(index)}
                >
                  <img src={muralPhoto(panel.thumb)} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <dialog
          ref={dialogRef}
          className="mural-lightbox"
          aria-labelledby={titleId}
          onClose={closeLightbox}
          onClick={(event) => {
            if (event.target === dialogRef.current) closeLightbox()
          }}
        >
          <div className="mural-lightbox-inner">
            <div className="mural-lightbox-bar">
              <p id={titleId}>{activePanel.label}</p>
              <div className="mural-lightbox-tools" role="group" aria-label="Zoom controls">
                <button
                  type="button"
                  className="mural-lightbox-tool"
                  aria-label="Zoom out"
                  disabled={zoom.scale <= ZOOM_MIN}
                  onClick={() => zoomBy(-ZOOM_STEP)}
                >
                  −
                </button>
                <button
                  type="button"
                  className="mural-lightbox-tool"
                  aria-label="Reset zoom"
                  onClick={() => setZoom(ZOOM_RESET)}
                >
                  {Math.round(zoom.scale * 100)}%
                </button>
                <button
                  type="button"
                  className="mural-lightbox-tool"
                  aria-label="Zoom in"
                  disabled={zoom.scale >= ZOOM_MAX}
                  onClick={() => zoomBy(ZOOM_STEP)}
                >
                  +
                </button>
                <button
                  type="button"
                  className="mural-lightbox-close"
                  aria-label="Close enlarged panel"
                  onClick={closeLightbox}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="mural-lightbox-stage">
              <button
                type="button"
                className="mural-carousel-nav is-prev"
                aria-label="Previous panel"
                onClick={() => stepPanel(-1)}
              >
                ‹
              </button>
              <div
                ref={viewportRef}
                className={
                  isZoomed
                    ? 'mural-lightbox-viewport is-zoomed'
                    : 'mural-lightbox-viewport'
                }
                onPointerDown={onViewportPointerDown}
                onPointerMove={onViewportPointerMove}
                onPointerUp={onViewportPointerUp}
                onPointerCancel={onViewportPointerUp}
                onDoubleClick={onViewportDoubleClick}
              >
                <img
                  src={muralPhoto(activePanel.full)}
                  alt={activePanel.alt}
                  draggable={false}
                  style={{
                    transform: `translate(${zoom.x}px, ${zoom.y}px) scale(${zoom.scale})`,
                  }}
                />
              </div>
              <button
                type="button"
                className="mural-carousel-nav is-next"
                aria-label="Next panel"
                onClick={() => stepPanel(1)}
              >
                ›
              </button>
            </div>
            <p className="mural-lightbox-help">
              Scroll or use +/− to zoom. Drag to pan when zoomed. Double-click to toggle.
            </p>
          </div>
        </dialog>
      </section>

      <section className="block" id="words">
        <h2>The words</h2>

        <div className="mural-words">
          <blockquote className="mural-spark">
            {mural.sparkExtract.lines.map((line, index) => (
              <PoemLine key={`${poemLineText(line)}-${index}`} line={line} />
            ))}
            <cite>{mural.sparkExtract.credit}</cite>
          </blockquote>

          <div className="mural-poem">
            <p className="mural-poem-title">{mural.poem.title}</p>
            <div className="mural-poem-stanzas">
              {mural.poem.stanzas.map((stanza, index) => (
                <p
                  key={index}
                  className={`mural-poem-stanza ${toneClass(stanza.tone)}`}
                >
                  {stanza.lines.map((line, lineIndex) => (
                    <PoemLine
                      key={`${poemLineText(line)}-${lineIndex}`}
                      line={line}
                    />
                  ))}
                </p>
              ))}
            </div>
            <p className="mural-poem-credit">{mural.poem.credit}</p>
          </div>
        </div>
      </section>

      <section className="block" id="explore">
        <h2>Explore the mural</h2>

        <nav className="mural-explore-nav" aria-label="Explore sections">
          {mural.explore.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className={`mural-explore-jump ${toneClass(group.tone)}`}
            >
              {group.heading}
            </a>
          ))}
        </nav>

        {mural.explore.map((group) => (
          <div
            key={group.id}
            id={group.id}
            className={`mural-explore-group ${toneClass(group.tone)}`}
          >
            <h3 className="subhead">{group.heading}</h3>
            <ul className="mural-explore-cards">
              {group.items.map((item) => (
                <li key={item.title} className="mural-explore-card">
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                  {'links' in item && item.links ? (
                    <ul className="mural-explore-links">
                      {item.links.map((link) => (
                        <li key={link.href}>
                          <a href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {'audio' in item && item.audio ? (
                    <figure className="mural-audio">
                      <figcaption>{item.audio.label}</figcaption>
                      <audio controls preload="none" src={resolveHref(item.audio.src)}>
                        <a href={resolveHref(item.audio.src)}>Download the audio</a>
                      </audio>
                    </figure>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="block" id="interviews">
        <h2>Five questions</h2>
        <p className="intro">
          Heather Goodare, Astrid Jaekel and Rachel Woolf on how the mural came
          about.
        </p>

        <nav className="interview-nav" aria-label="Interview subjects">
          {mural.interviews.map((person, index) => (
            <a key={person.id} href={`#${person.id}`} className="interview-jump">
              <span className="interview-jump-index" aria-hidden="true">
                {index + 1}
              </span>
              <span className="interview-jump-name">{person.name}</span>
            </a>
          ))}
        </nav>

        {mural.interviews.map((person, personIndex) => (
          <article key={person.id} id={person.id} className="interview">
            <header className="interview-head">
              <p className="interview-index">
                {personIndex + 1} of {mural.interviews.length}
              </p>
              <h3>{person.name}</h3>
              <p className="interview-role">{person.role}</p>
            </header>
            <ol className="qa">
              {person.items.map((item, itemIndex) => (
                <li key={item.q} className="qa-item">
                  <p className="qa-question">
                    <span className="qa-label" aria-hidden="true">
                      Q{itemIndex + 1}
                    </span>
                    <span>{item.q}</span>
                  </p>
                  <p className="qa-answer">{item.a}</p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </section>

      <section className="block mural-launch" id="launch">
        <h2>{mural.launch.heading}</h2>
        <p className="intro">{mural.launch.intro}</p>

        <ul className="mural-launch-mosaic">
          {mural.launch.photos.map((photo) => (
            <li key={photo.file} className={`mural-launch-shot is-${photo.layout}`}>
              <figure>
                <img src={muralPhoto(photo.file)} alt={photo.alt} />
                <figcaption>{photo.caption}</figcaption>
              </figure>
              {'audio' in photo && photo.audio ? (
                <figure className="mural-audio mural-launch-audio">
                  <figcaption>{photo.audio.label}</figcaption>
                  <audio
                    controls
                    preload="none"
                    src={resolveHref(photo.audio.src)}
                  >
                    <a href={resolveHref(photo.audio.src)}>Download the audio</a>
                  </audio>
                </figure>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <section className="block" id="quiz">
        <h2>{mural.quiz.heading}</h2>
        <p className="intro">{mural.quiz.blurb}</p>
        <ol className="quiz-questions">
          {mural.quiz.questions.map((question) => (
            <li key={question.id}>{question.prompt}</li>
          ))}
        </ol>
        <p>
          <Link className="more" to={mural.quiz.to}>
            Open the interactive quiz
          </Link>
        </p>
      </section>
    </AboutArticle>
  )
}
