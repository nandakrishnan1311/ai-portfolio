import React, { useState, useEffect } from 'react'
import { profile } from '../../data/profile'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
      padding: scrolled ? '16px 40px' : '24px 40px',
      background: scrolled ? 'rgba(8,11,17,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,255,178,0.08)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.35s ease',
    }}>
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 700,
          color: 'var(--accent-green)', background: 'none', border: 'none', cursor: 'none',
          display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <span style={{ color: 'var(--text-dim)' }}>&lt;</span>
        Nanda
        <span style={{ color: 'var(--text-dim)' }}>/&gt;</span>
      </button>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: 28, listStyle: 'none' }} className="nav-desktop">
        {navLinks.map((link, i) => (
          <li key={link.href}>
            <button
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none', border: 'none', cursor: 'none',
                fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                color: active === link.href ? 'var(--accent-green)' : 'var(--text-secondary)',
                transition: 'color 0.2s',
                display: 'flex', alignItems: 'center', gap: 5,
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-green)'}
              onMouseLeave={e => e.currentTarget.style.color = active === link.href ? 'var(--accent-green)' : 'var(--text-secondary)'}
            >
              <span style={{ color: 'var(--accent-green)', opacity: 0.5 }}>0{i+1}.</span>
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Resume btn */}
      <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer"
        className="btn btn-outline"
        style={{ padding: '10px 20px', fontSize: '0.75rem' }}>
        Resume ↗
      </a>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-hamburger"
        style={{ display: 'none', background: 'none', border: 'none', cursor: 'none',
          flexDirection: 'column', gap: 5, padding: 4 }}
        aria-label="Toggle menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2,
            background: 'var(--accent-green)', transition: 'all 0.3s',
            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)'
              : menuOpen && i === 1 ? 'scaleX(0)'
              : menuOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none'
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(8,11,17,0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', gap: 32, zIndex: 899,
        }}>
          {navLinks.map(link => (
            <button key={link.href} onClick={() => handleNav(link.href)}
              style={{ background: 'none', border: 'none', cursor: 'none',
                fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700,
                color: active === link.href ? 'var(--accent-green)' : 'var(--text-primary)' }}>
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
