import React from 'react'
import { useInView } from '../animations/ScrollEffects'
import useGithub from '../../hooks/useGithub'
import { profile } from '../../data/profile'

export default function Github() {
  const [ref, inView] = useInView()
  const { data, repos, loading, error } = useGithub(profile.github)

  return (
    <section id="github" className="section" ref={ref}
      style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>GitHub</div>
          <h2 className="section-title">
            Open Source <span style={{ color: 'var(--accent-green)' }}>Activity</span>
          </h2>
        </div>

        {loading && (
          <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)',
            color: 'var(--accent-green)', fontSize: '0.8rem' }}>
            Fetching GitHub data...
          </div>
        )}

        {error && (
          <div style={{ textAlign: 'center', fontFamily: 'var(--font-mono)',
            color: 'var(--accent-red)', fontSize: '0.8rem' }}>
            Error: {error} – update your GitHub username in src/data/profile.js
          </div>
        )}

        {data && (
          <>
            {/* Profile stats */}
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center',
              flexWrap: 'wrap', marginBottom: 48 }}>
              {[
                { label: 'Public Repos', value: data.public_repos },
                { label: 'Followers',    value: data.followers },
                { label: 'Following',    value: data.following },
              ].map(s => (
                <div key={s.label} style={{
                  padding: '28px 40px', textAlign: 'center',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  opacity: inView ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem',
                    fontWeight: 800, color: 'var(--accent-green)' }}>{s.value}</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                    color: 'var(--text-dim)', textTransform: 'uppercase',
                    letterSpacing: '0.1em', marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Top repos */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 16,
            }}>
              {repos.map((repo, i) => (
                <a key={repo.id} href={repo.html_url}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block', padding: '24px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease ${i * 0.08}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-bright)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-start', marginBottom: 12 }}>
                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem',
                      fontWeight: 600, color: 'var(--accent-green)' }}>
                      {repo.name}
                    </h4>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--text-dim)' }}>★ {repo.stargazers_count}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)',
                    lineHeight: 1.6, marginBottom: 16 }}>
                    {repo.description || 'No description provided.'}
                  </p>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    {repo.language && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                        color: 'var(--text-dim)' }}>
                        {repo.language}
                      </span>
                    )}
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
                      color: 'var(--text-dim)' }}>
                      🍴 {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
