import React from 'react'
import { profile } from '../../data/profile'

export default function Footer() {
  return (
    <footer style={{
      padding: '48px 40px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20,
      textAlign: 'center',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-green)' }}>
        &lt;{profile.name} /&gt;
      </span>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-dim)',
        letterSpacing: '0.08em' }}>
        Designed & Built by {profile.name} · {new Date().getFullYear()}
      </p>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)' }}>
        Made with React · Three.js · Framer Motion
      </p>
    </footer>
  )
}
