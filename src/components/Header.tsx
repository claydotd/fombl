import { useEffect, useRef, useState, type CSSProperties, type FocusEvent, type MouseEvent } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { nav } from '../content/site'
import { seasonalTitleMask } from '../lib/dates'
import { resolveHref } from '../lib/url'

type NestedNavItem = Extract<(typeof nav)[number], { children: readonly unknown[] }>

function NestedMenu({ item, menuOpen, onNavigate }: { item: NestedNavItem; menuOpen: boolean; onNavigate: () => void }) {
  const submenuId = `${item.to.replace(/^\//, '').replace(/\//g, '-') || 'home'}-submenu`
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const here = `${location.pathname}${location.hash}`

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!menuOpen) setOpen(false)
  }, [menuOpen])

  useEffect(() => {
    if (!open) return

    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      setOpen(false)
      linkRef.current?.focus()
    }

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  function onParentClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    setOpen((current) => !current)
  }

  function onBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
  }

  return (
    <div ref={rootRef} className={open ? 'nav-item is-open' : 'nav-item'} onBlur={onBlur}>
      <NavLink
        ref={linkRef}
        to={item.to}
        aria-expanded={open}
        aria-controls={submenuId}
        onClick={onParentClick}
      >
        {item.label}
        <span className="nav-caret" aria-hidden="true" />
      </NavLink>
      <ul id={submenuId} className="nav-sub">
        {item.children.map((child) => (
          <li key={child.to}>
            <Link
              to={child.to}
              aria-current={here === child.to ? 'page' : undefined}
              onClick={() => {
                setOpen(false)
                onNavigate()
              }}
            >
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Header() {
  const location = useLocation()
  const headerRef = useRef<HTMLElement>(null)
  const [openPath, setOpenPath] = useState<string | null>(null)
  const open = openPath === location.pathname

  useEffect(() => {
    if (!open) return
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenPath(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    function syncHeaderHeight() {
      document.documentElement.style.setProperty(
        '--site-header-height',
        `${header!.offsetHeight}px`,
      )
    }

    syncHeaderHeight()
    const observer = new ResizeObserver(syncHeaderHeight)
    observer.observe(header)
    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty('--site-header-height')
    }
  }, [open])

  return (
    <header ref={headerRef} className="site-header">
      <div className="container header-bar">
        <div className="header-title">
          <NavLink
            to="/"
            className="brand"
            end
            style={
              {
                '--brand-fill': `url("${resolveHref(seasonalTitleMask())}")`,
              } as CSSProperties
            }
          >
            Friends of the Meadows and Bruntsfield&nbsp;Links
          </NavLink>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpenPath(open ? null : location.pathname)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
          {nav.map((item) =>
            'children' in item ? (
              <NestedMenu
                key={item.to}
                item={item}
                menuOpen={open}
                onNavigate={() => setOpenPath(null)}
              />
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}
