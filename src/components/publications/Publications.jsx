import React from 'react'
import { useInView } from '../animations/ScrollEffects'
import { publications } from '../../data/publications'

const statusColors = {
  published:      { color: '#00FFB2', label: 'Published' },
  'under-review': { color: '#FFD93D', label: 'Under Review' },
  upcoming:       { color: '#7B61FF', label: 'Upcoming' },
}

export default function Publications() {
  const [ref, inView] = useInView()

  return (
    <section id="publications" className="section" ref={ref}
      style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Publications</div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Research & <span style={{ color: 'var(--accent-green)' }}>Papers</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 56, maxWidth: 560,
          fontSize: '1rem', lineHeight: 1.7 }}>
          My research work in AI, Machine Learning, and related fields.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {publications.map((pub, i) => {
            const statusInfo = statusColors[pub.status] || statusColors['upcoming']
            return (
              <div key={pub.id} style={{
                padding: '32px 36px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderLeft: '4px solid ' + statusInfo.color,
                borderRadius: '0 var(--radius-lg) var(--radius-lg) 0',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.6s ease ' + (i * 0.1) + 's',
              }}>
                <div style={{ display: 'flex', alignItems: 'center',
                  gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: statusInfo.color, textTransform: 'uppercase',
                    letterSpacing: '0.1em', padding: '3px 10px',
                    border: '1px solid ' + statusInfo.color + '44', borderRadius: 3,
                  }}>{statusInfo.label}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                    color: 'var(--text-dim)' }}>{pub.year}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem',
                  fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.4 }}>
                  {pub.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  color: 'var(--accent-green)', marginBottom: 6 }}>{pub.authors}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                  color: 'var(--text-dim)', fontStyle: 'italic', marginBottom: 16 }}>{pub.journal}</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)',
                  lineHeight: 1.75, marginBottom: 20 }}>{pub.abstract}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                  {pub.tags.map(tag => (
                    <span key={tag} style={{
                      padding: '4px 10px', fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      color: 'var(--text-dim)', background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border-subtle)', borderRadius: 3,
                    }}>{tag}</span>
                  ))}
                </div>
                {pub.status === 'upcoming' && (
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
                    color: 'var(--text-dim)' }}>
                    🕐 Coming soon — links will be available upon publication
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
