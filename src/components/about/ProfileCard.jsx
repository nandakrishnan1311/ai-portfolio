import React, { useState } from 'react'
import { profile } from '../../data/profile'

export default function ProfileCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [imgError, setImgError] = useState(false)

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top)  / rect.height - 0.5) * 14
    const y = ((e.clientX - rect.left) / rect.width  - 0.5) * -14
    setTilt({ x, y })
  }
  const onMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease',
        position: 'relative',
      }}
    >
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Gradient accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 200, height: 200,
          background: 'radial-gradient(circle at top right, rgba(0,255,178,0.08), transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Profile image */}
        <div style={{
          width: 120, height: 120, borderRadius: '50%',
          margin: '0 auto 24px',
          border: '3px solid var(--border-bright)',
          boxShadow: 'var(--shadow-glow-green)',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, var(--accent-green), var(--accent-purple))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {!imgError ? (
            <img
              src={profile.profileImage}
              alt={profile.name}
              onError={() => setImgError(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <span style={{ fontSize: '3rem' }}>👨‍💻</span>
          )}
        </div>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem',
            fontWeight: 700, marginBottom: 6 }}>{profile.name}</h3>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
            color: 'var(--accent-green)' }}>{profile.title}</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)',
            marginTop: 8 }}>{profile.location}</p>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', justifyContent: 'space-around',
          paddingTop: 24, borderTop: '1px solid var(--border-subtle)' }}>
          {profile.stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                fontWeight: 800, color: 'var(--accent-green)' }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                color: 'var(--text-dim)', textTransform: 'uppercase',
                letterSpacing: '0.08em' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social icons row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 24,
          paddingTop: 20, borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub',       href: `https://github.com/${profile.github}`,  icon: '⌥' },
            { label: 'LinkedIn',     href: `https://linkedin.com/in/${profile.linkedin}`, icon: 'in' },
            { label: 'Kaggle',       href: profile.kaggle,       icon: 'K' },
            { label: 'HuggingFace', href: profile.huggingface,  icon: '🤗' },
            { label: 'arXiv',        href: profile.arxiv,        icon: 'aX' },
          ].map(link => (
            <a key={link.label} href={link.href}
              target="_blank" rel="noopener noreferrer"
              title={link.label}
              style={{
                width: 36, height: 36,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 6,
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent-green)'
                e.currentTarget.style.color = 'var(--accent-green)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.color = 'var(--text-secondary)'
              }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div style={{
        position: 'absolute', bottom: -16, right: -16,
        width: 80, height: 80,
        border: '1px solid var(--border-bright)',
        borderRadius: 'var(--radius-md)', zIndex: -1,
      }} />
      <div style={{
        position: 'absolute', top: -16, left: -16,
        width: 60, height: 60,
        border: '1px solid rgba(123,97,255,0.2)',
        borderRadius: 'var(--radius-md)', zIndex: -1,
      }} />
    </div>
  )
}
