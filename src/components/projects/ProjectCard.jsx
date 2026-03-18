import React, { useState } from 'react'

export default function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? project.accentColor + '44' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        padding: 32,
        position: 'relative', overflow: 'hidden',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 0.1}s`,
        cursor: 'none',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: hovered
          ? `linear-gradient(90deg, ${project.accentColor}, transparent)`
          : 'transparent',
        transition: 'background 0.3s',
      }} />

      {/* Glow on hover */}
      <div style={{
        position: 'absolute', top: -40, right: -40, width: 160, height: 160,
        background: `radial-gradient(circle, ${project.accentColor}0A, transparent 70%)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s',
        pointerEvents: 'none',
      }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: project.accentColor, textTransform: 'uppercase',
            letterSpacing: '0.1em', marginBottom: 6 }}>
            {project.subtitle}
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem',
            fontWeight: 700, color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', fontSize: '1.1rem',
                transition: 'color 0.2s', lineHeight: 1 }}
              onMouseEnter={e => e.currentTarget.style.color = project.accentColor}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >⌥</a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', fontSize: '1.1rem',
                transition: 'color 0.2s', lineHeight: 1 }}
              onMouseEnter={e => e.currentTarget.style.color = project.accentColor}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dim)'}
            >↗</a>
          )}
        </div>
      </div>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem',
        lineHeight: 1.7, marginBottom: 24 }}>
        {project.description}
      </p>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
        {Object.entries(project.stats).map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem',
              fontWeight: 700, color: project.accentColor }}>{v}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              color: 'var(--text-dim)', textTransform: 'uppercase',
              letterSpacing: '0.1em' }}>{k}</div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: '4px 10px',
            fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
            color: 'var(--text-dim)',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 3,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
