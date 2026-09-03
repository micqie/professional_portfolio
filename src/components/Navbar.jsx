import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, profile } from '../data/portfolioData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65%', threshold: [0, 0.2, 0.6] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const closeOnResize = () => window.innerWidth > 880 && setOpen(false)
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const closeMenu = (event) => {
      if (event.type === 'keydown' && event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
      if (event.type === 'pointerdown' && !headerRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', closeMenu)
    document.addEventListener('pointerdown', closeMenu)
    return () => {
      document.removeEventListener('keydown', closeMenu)
      document.removeEventListener('pointerdown', closeMenu)
    }
  }, [open])

  return (
    <header className="site-header" ref={headerRef}>
      <nav className="navbar container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">ML</span>
          <span>{profile.name}</span>
        </a>
        <button className="menu-toggle" ref={menuButtonRef} type="button" aria-expanded={open} aria-controls="main-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <div id="main-menu" className={`nav-links ${open ? 'is-open' : ''}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  )
}
