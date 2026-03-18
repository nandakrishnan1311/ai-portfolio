import React from 'react'
import { techIcons } from '../../data/skills'

export default function SkillIcons({ inView }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 32,
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
        color: 'var(--text-dim)', textTransform: 'uppercase',
        letterSpacing: '0.15em' }}>
        Core Technologies
      </div>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        {techIcons.map((tech, i) => (
          <div key={tech.name}
            data-hover="true"
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              padding: '18px 14px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              minWidth: 76,
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease ${i * 0.05}s`,
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = tech.color + '88'
              e.currentTarget.style.background = 'var(--bg-card-hover)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-subtle)'
              e.currentTarget.style.background = 'var(--bg-card)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{tech.emoji}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
              color: 'var(--text-dim)', textTransform: 'uppercase',
              letterSpacing: '0.05em', textAlign: 'center' }}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}