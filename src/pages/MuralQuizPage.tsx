import { useEffect, useLayoutEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import { Link } from 'react-router'
import { AboutArticle } from '../components/AboutArticle'
import { mural, type MuralQuizAnnotation, type MuralQuizHotspot } from '../content/mural'
import { resolveHref } from '../lib/url'
import { usePageTitle } from '../lib/usePageTitle'

function muralPhoto(file: string) {
  return resolveHref(`images/mural/${encodeURI(file)}`)
}

function hotspotKey(questionId: string, hotspotId: string) {
  return `${questionId}:${hotspotId}`
}

function uniqueIds(hotspots: readonly { readonly id: string }[]) {
  return [...new Set(hotspots.map((hotspot) => hotspot.id))]
}

function allHotspots(question: (typeof mural.quiz.questions)[number]) {
  return question.panels.flatMap((entry) => [...entry.hotspots])
}

function cleanLabel(label: string) {
  return label.replace(/^You found the |!$/g, '').trim()
}

type Callout = {
  key: string
  hotspot: MuralQuizHotspot
  side: 'top' | 'bottom'
  cx: number
  cy: number
  labelX: number
}

type Leader = {
  key: string
  x1: number
  y1: number
  x2: number
  y2: number
}

type BoardSize = {
  width: number
  height: number
}

function spaceLabels<T extends { cx: number }>(items: T[], minGap = 16): (T & { labelX: number })[] {
  if (items.length === 0) return []
  const sorted = [...items].sort((a, b) => a.cx - b.cx)
  const xs = sorted.map((item) => item.cx)

  for (let i = 1; i < xs.length; i += 1) {
    if (xs[i] - xs[i - 1] < minGap) xs[i] = xs[i - 1] + minGap
  }

  const overflow = xs[xs.length - 1] - 96
  if (overflow > 0) {
    for (let i = 0; i < xs.length; i += 1) xs[i] -= overflow
  }
  if (xs[0] < 4) {
    const shift = 4 - xs[0]
    for (let i = 0; i < xs.length; i += 1) xs[i] += shift
  }

  return sorted.map((item, index) => ({ ...item, labelX: xs[index] }))
}

function AnnotationNote({ annotation }: { annotation: MuralQuizAnnotation }) {
  return (
    <span className={annotation.image ? 'mural-quiz-note has-image' : 'mural-quiz-note'}>
      {annotation.image ? (
        <img src={muralPhoto(annotation.image.file)} alt={annotation.image.alt} />
      ) : null}
      <span className="mural-quiz-note-label">{cleanLabel(annotation.label)}</span>
    </span>
  )
}

export function MuralQuizPage() {
  usePageTitle(mural.quiz.heading)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [panelIndex, setPanelIndex] = useState(0)
  const [revealed, setRevealed] = useState<ReadonlySet<string>>(() => new Set())
  const [toast, setToast] = useState<string | null>(null)
  const [missFlash, setMissFlash] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)
  const [leaders, setLeaders] = useState<Leader[]>([])
  const [boardSize, setBoardSize] = useState<BoardSize>({ width: 0, height: 0 })
  const boardRef = useRef<HTMLDivElement>(null)
  const toastTimer = useRef<number | null>(null)
  const missTimer = useRef<number | null>(null)

  const question = mural.quiz.questions[questionIndex]
  const panel = question.panels[panelIndex]
  const targets = allHotspots(question)
  const targetIds = uniqueIds(targets)
  const foundIds = targetIds.filter((id) => revealed.has(hotspotKey(question.id, id)))
  const foundCount = foundIds.length
  const totalCount = targetIds.length
  const questionComplete = foundCount === totalCount
  const isLastQuestion = questionIndex === mural.quiz.questions.length - 1
  const remainingCount = totalCount - foundCount

  const openCallouts = useMemo(() => {
    const raw = panel.hotspots.flatMap((hotspot, index) => {
      if (!revealed.has(hotspotKey(question.id, hotspot.id))) return []
      const cx = hotspot.rect.left + hotspot.rect.width / 2
      const cy = hotspot.rect.top + hotspot.rect.height / 2
      return [
        {
          key: `${hotspot.id}-${index}`,
          hotspot,
          side: (cy < 48 ? 'top' : 'bottom') as 'top' | 'bottom',
          cx,
          cy,
        },
      ]
    })
    const top = spaceLabels(raw.filter((item) => item.side === 'top'))
    const bottom = spaceLabels(raw.filter((item) => item.side === 'bottom'))
    return [...top, ...bottom] as Callout[]
  }, [panel.hotspots, question.id, revealed])

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current)
      if (missTimer.current) window.clearTimeout(missTimer.current)
    }
  }, [])

  useLayoutEffect(() => {
    const board = boardRef.current
    if (!board) return

    function updateLeaders() {
      if (!board) return
      const boardRect = board.getBoundingClientRect()
      if (boardRect.width === 0 || boardRect.height === 0) {
        setLeaders([])
        setBoardSize({ width: 0, height: 0 })
        return
      }

      setBoardSize({ width: boardRect.width, height: boardRect.height })

      const next: Leader[] = []
      for (const callout of openCallouts) {
        const mark = board.querySelector(`[data-hotspot="${callout.key}"]`)
        const label = board.querySelector(`[data-callout="${callout.key}"]`)
        if (!(mark instanceof HTMLElement) || !(label instanceof HTMLElement)) continue

        const markRect = mark.getBoundingClientRect()
        const labelRect = label.getBoundingClientRect()
        next.push({
          key: callout.key,
          x1: labelRect.left + labelRect.width / 2 - boardRect.left,
          y1:
            callout.side === 'top'
              ? labelRect.bottom - boardRect.top
              : labelRect.top - boardRect.top,
          x2: markRect.left - boardRect.left,
          y2: markRect.top - boardRect.top,
        })
      }
      setLeaders(next)
    }

    updateLeaders()
    const observer = new ResizeObserver(updateLeaders)
    observer.observe(board)
    window.addEventListener('resize', updateLeaders)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateLeaders)
    }
  }, [openCallouts, panel.file, panelIndex, questionIndex])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setPanelIndex((current) => Math.max(0, current - 1))
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setPanelIndex((current) => Math.min(question.panels.length - 1, current + 1))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [question.panels.length])

  function showToast(message: string) {
    setToast(message)
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setToast(null), 1800)
  }

  function flashMiss() {
    setMissFlash(true)
    if (missTimer.current) window.clearTimeout(missTimer.current)
    missTimer.current = window.setTimeout(() => setMissFlash(false), 450)
  }

  function reveal(hotspot: MuralQuizHotspot) {
    const key = hotspotKey(question.id, hotspot.id)
    if (revealed.has(key)) return

    setRevealed((current) => {
      const next = new Set(current)
      next.add(key)
      return next
    })
    showToast(`Found: ${cleanLabel(hotspot.annotation.label)}`)
  }

  function onStageClick(event: MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement
    if (target.closest('.mural-quiz-hotspot')) return
    flashMiss()
  }

  function goQuestion(delta: number) {
    const nextIndex = questionIndex + delta
    if (nextIndex < 0 || nextIndex >= mural.quiz.questions.length) return
    if (delta > 0 && !questionComplete) return
    setQuestionIndex(nextIndex)
    setPanelIndex(0)
    setToast(null)
  }

  function finishQuiz() {
    if (!questionComplete || !isLastQuestion) return
    setQuizFinished(true)
  }

  function playAgain() {
    setQuestionIndex(0)
    setPanelIndex(0)
    setRevealed(new Set())
    setQuizFinished(false)
    setToast(null)
  }

  function panelState(entry: (typeof question.panels)[number]) {
    const ids = uniqueIds([...entry.hotspots])
    if (ids.length === 0) return 'empty' as const
    const found = ids.filter((id) => revealed.has(hotspotKey(question.id, id))).length
    if (found === ids.length) return 'done' as const
    if (found > 0) return 'partial' as const
    return 'todo' as const
  }

  if (quizFinished) {
    return (
      <AboutArticle title={mural.quiz.heading}>
        <p className="crumb mural-quiz-crumb">
          <Link to="/about/mural">{mural.title}</Link>
        </p>
        <div className="mural-quiz mural-quiz-finish">
          <p className="mural-quiz-finish-eyebrow">Quiz complete</p>
          <h2>You found everything on the mural, well done!</h2>
          <p className="intro">
            Try again anytime, or head back to read more about the mural.
          </p>
          <div className="mural-quiz-finish-actions">
            <button type="button" className="mural-quiz-cta" onClick={playAgain}>
              Play again
            </button>
            <Link className="more" to="/about/mural">
              Back to the mural
            </Link>
          </div>
        </div>
      </AboutArticle>
    )
  }

  return (
    <AboutArticle title={mural.quiz.heading}>
      <p className="crumb mural-quiz-crumb">
        <Link to="/about/mural">{mural.title}</Link>
      </p>
      <p className="intro">{mural.quiz.blurb}</p>

      <div className={questionComplete ? 'mural-quiz is-complete' : 'mural-quiz'}>
        <div className="mural-quiz-hud" aria-label="Quiz progress">
          <ol className="mural-quiz-rounds">
            {mural.quiz.questions.map((entry, index) => {
              const done =
                index < questionIndex ||
                (index === questionIndex && questionComplete) ||
                uniqueIds(allHotspots(entry)).every((id) =>
                  revealed.has(hotspotKey(entry.id, id)),
                )
              return (
                <li key={entry.id}>
                  <span
                    className={[
                      'mural-quiz-round',
                      index === questionIndex ? 'is-current' : '',
                      done ? 'is-done' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-current={index === questionIndex ? 'step' : undefined}
                  >
                    {index + 1}
                  </span>
                </li>
              )
            })}
          </ol>
          <div className="mural-quiz-score" aria-live="polite">
            <span className="mural-quiz-score-num">
              {foundCount}/{totalCount}
            </span>
            <span className="mural-quiz-score-label">found</span>
          </div>
        </div>

        <h2 className="mural-quiz-prompt">{question.prompt}</h2>

        <div className="mural-quiz-panels" role="tablist" aria-label="Mural panels">
          {question.panels.map((entry, index) => {
            const state = panelState(entry)
            return (
              <button
                key={entry.panel}
                type="button"
                role="tab"
                aria-selected={index === panelIndex}
                className={[
                  'mural-quiz-panel-tab',
                  index === panelIndex ? 'is-current' : '',
                  `is-${state}`,
                ]
                  .filter(Boolean)
                  .join(' ')}
                onClick={() => setPanelIndex(index)}
              >
                <img src={muralPhoto(entry.file)} alt="" />
                <span className="mural-quiz-panel-label">Panel {entry.panel}</span>
                {state === 'todo' || state === 'partial' ? (
                  <span className="mural-quiz-panel-badge" aria-hidden="true" />
                ) : null}
                {state === 'done' ? (
                  <span className="mural-quiz-panel-check" aria-label="All found on this panel">
                    ✓
                  </span>
                ) : null}
              </button>
            )
          })}
        </div>

        <div
          ref={boardRef}
          className={[
            'mural-quiz-board',
            mural.quiz.showHotspots ? 'is-debugging' : '',
            missFlash ? 'is-miss' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <div className="mural-quiz-rail is-top" aria-live="polite">
            {openCallouts
              .filter((callout) => callout.side === 'top')
              .map((callout) => (
                <div
                  key={callout.key}
                  className="mural-quiz-callout"
                  data-callout={callout.key}
                  style={{ left: `${callout.labelX}%` }}
                >
                  <AnnotationNote annotation={callout.hotspot.annotation} />
                </div>
              ))}
          </div>

          <figure className="mural-quiz-stage" onClick={onStageClick}>
            <img src={muralPhoto(panel.file)} alt={panel.alt} draggable={false} />
            {panel.hotspots.map((hotspot, index) => {
              const key = `${hotspot.id}-${index}`
              const isOpen = revealed.has(hotspotKey(question.id, hotspot.id))
              const { left, top, width, height } = hotspot.rect

              return (
                <button
                  key={key}
                  type="button"
                  data-hotspot={key}
                  className={isOpen ? 'mural-quiz-hotspot is-open' : 'mural-quiz-hotspot'}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${width}%`,
                    height: `${height}%`,
                  }}
                  aria-label={isOpen ? cleanLabel(hotspot.annotation.label) : 'Look here'}
                  aria-expanded={isOpen}
                  onClick={(event) => {
                    event.stopPropagation()
                    reveal(hotspot)
                  }}
                />
              )
            })}

            {toast ? (
              <p className="mural-quiz-toast" role="status">
                {toast}
              </p>
            ) : null}
          </figure>

          <div className="mural-quiz-rail is-bottom" aria-live="polite">
            {openCallouts
              .filter((callout) => callout.side === 'bottom')
              .map((callout) => (
                <div
                  key={callout.key}
                  className="mural-quiz-callout"
                  data-callout={callout.key}
                  style={{ left: `${callout.labelX}%` }}
                >
                  <AnnotationNote annotation={callout.hotspot.annotation} />
                </div>
              ))}
          </div>

          {boardSize.width > 0 ? (
            <svg
              className="mural-quiz-leaders"
              width={boardSize.width}
              height={boardSize.height}
              viewBox={`0 0 ${boardSize.width} ${boardSize.height}`}
              aria-hidden="true"
            >
              {leaders.map((leader) => (
                <line
                  key={leader.key}
                  x1={leader.x1}
                  y1={leader.y1}
                  x2={leader.x2}
                  y2={leader.y2}
                />
              ))}
            </svg>
          ) : null}
        </div>

        <div className="mural-quiz-nav">
          <button type="button" onClick={() => setPanelIndex((n) => Math.max(0, n - 1))} disabled={panelIndex === 0}>
            ← Prev
          </button>
          <p className="mural-quiz-hint" aria-live="polite">
            {questionComplete
              ? 'Great work! You found everything for this question.'
              : `Found ${foundCount} of ${totalCount} · ${remainingCount} still to find.`}
          </p>
          <button
            type="button"
            onClick={() => setPanelIndex((n) => Math.min(question.panels.length - 1, n + 1))}
            disabled={panelIndex === question.panels.length - 1}
          >
            Next →
          </button>
        </div>

        {foundIds.length > 0 ? (
          <ul className="mural-quiz-found" aria-label="Found so far">
            {foundIds.map((id) => {
              const match = targets.find((hotspot) => hotspot.id === id)
              if (!match) return null
              return (
                <li key={id}>
                  <span>{cleanLabel(match.annotation.label)}</span>
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="mural-quiz-found-empty">Tap the mural to collect finds.</p>
        )}

        <div className="mural-quiz-advance">
          {questionIndex > 0 ? (
            <button type="button" className="mural-quiz-ghost" onClick={() => goQuestion(-1)}>
              ← Previous question
            </button>
          ) : (
            <span />
          )}
          {isLastQuestion ? (
            <button
              type="button"
              className="mural-quiz-cta"
              onClick={finishQuiz}
              disabled={!questionComplete}
            >
              Finish quiz
            </button>
          ) : (
            <button
              type="button"
              className="mural-quiz-cta"
              onClick={() => goQuestion(1)}
              disabled={!questionComplete}
            >
              Next question →
            </button>
          )}
        </div>
      </div>
    </AboutArticle>
  )
}
