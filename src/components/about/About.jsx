import React from 'react'
import { useInView } from '../animations/ScrollEffects'
import { profile } from '../../data/profile'
import ProfileCard from './ProfileCard'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }}>
          {/* Left: text */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'all 0.7s ease',
          }}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              Building AI that{' '}
              <span style={{ color: 'var(--accent-green)' }}>matters.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85,
              marginBottom: 16, fontSize: '1.02rem' }}>{profile.bio1}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85,
              marginBottom: 16, fontSize: '1.02rem' }}>{profile.bio2}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85,
              marginBottom: 36, fontSize: '1.02rem' }}>{profile.bio3}</p>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {[
                { label: 'Location', value: profile.location },
                { label: 'Email',    value: profile.email },
                { label: 'Phone',    value: profile.phone },
                { label: 'GitHub',   value: `@${profile.github}` },
                { label: 'Status',   value: profile.available ? 'Open to Work ✓' : 'Not Available' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '14px 18px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                    color: 'var(--accent-green)', textTransform: 'uppercase',
                    letterSpacing: '0.1em', marginBottom: 4 }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={`https://github.com/${profile.github}`}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.78rem' }}>
                GitHub ↗
              </a>
              <a href={`https://linkedin.com/in/${profile.linkedin}`}
                target="_blank" rel="noopener noreferrer"
                className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '0.78rem' }}>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: profile card */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(40px)',
            transition: 'all 0.7s ease 0.2s',
          }}>
            <ProfileCard />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
