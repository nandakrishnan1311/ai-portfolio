import React, { useEffect, useRef } from 'react'
import HeroText from './HeroText'
import HeroCanvas from './HeroCanvas'
import GlitchText from '../animations/GlitchText'
import { profile } from '../../data/profile'

export default function Hero3D() {
  const heroRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(0, 1 - window.scrollY / 500)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <HeroCanvas />
      </div>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'grid-move 8s linear infinite',
      }} />

      <div ref={heroRef} className="container" style={{
        position: 'relative', zIndex: 2, paddingTop: 120,
      }}>
        <div style={{ maxWidth: 700 }}>
          {profile.available && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px',
              border: '1px solid rgba(0,255,178,0.25)',
              borderRadius: 4, marginBottom: 32,
              fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
              color: 'var(--accent-green)',
              background: 'rgba(0,255,178,0.04)',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--accent-green)',
                boxShadow: '0 0 0 0 rgba(0,255,178,0.4)',
                animation: 'pulse-ring 1.5s ease-out infinite',
              }} />
              AVAILABLE FOR WORK
            </div>
          )}

          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 4.5vw, 4rem)',
            lineHeight: 0.95, marginBottom: 20, letterSpacing: '-0.02em',
          }}>
            <GlitchText text="Nandakrishnan" style={{
              display: 'block', color: 'var(--text-primary)',
            }} />
            <GlitchText text="O" style={{
              display: 'block',
              WebkitTextStroke: '1px var(--accent-green)',
              color: 'transparent',
            }} />
          </h1>

          <HeroText />

          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '1.1rem',
            color: 'var(--text-secondary)', lineHeight: 1.7,
            maxWidth: 520, marginBottom: 48,
          }}>
            {profile.tagline}
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary"
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects →
            </button>
            <button
              className="btn btn-outline"
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 48, marginTop: 72,
            paddingTop: 48, borderTop: '1px solid var(--border-subtle)',
            flexWrap: 'wrap',
          }}>
            {profile.stats.map(stat => (
              <div key={stat.label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem',
                  fontWeight: 800, color: 'var(--accent-green)' }}>{stat.n}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                  color: 'var(--text-dim)', textTransform: 'uppercase',
                  letterSpacing: '0.1em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: 'absolute', bottom: 40, left: '50%',
        transform: 'translateX(-50%)', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        color: 'var(--text-dim)', letterSpacing: '0.15em', textTransform: 'uppercase',
      }}>
        <span>Scroll</span>
        <div style={{
          width: 1, height: 48,
          background: 'linear-gradient(to bottom, var(--accent-green), transparent)',
        }} />
      </div>
    </section>
  )
}