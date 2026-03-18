import React, { useState, useEffect } from 'react'

const roles = [
  'CSE Graduate',
  'AI & ML Enthusiast',
  'Python Developer',
  'Full-Stack Developer',
  'Deep Learning Explorer',
  'Open Source Contributor',
]

export default function HeroText() {
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting,  setDeleting]  = useState(false)
  const [paused,    setPaused]    = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (paused) {
      timeout = setTimeout(() => { setDeleting(true); setPaused(false) }, 1800)
    } else if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
    } else if (!deleting && displayed.length === current.length) {
      setPaused(true)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, paused, roleIdx])

  return (
    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem',
      color: 'var(--text-secondary)', marginBottom: 32, minHeight: 28,
      display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ color: 'var(--accent-green)' }}>$</span>
      <span> role = "</span>
      <span style={{ color: 'var(--accent-green)' }}>{displayed}</span>
      <span className="animate-blink" style={{
        display: 'inline-block', width: 2, height: '1em',
        background: 'var(--accent-green)', marginLeft: 2 }} />
      <span>"</span>
    </div>
  )
}
