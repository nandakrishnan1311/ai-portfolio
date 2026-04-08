import React, { useState } from 'react'
import { useInView } from '../animations/ScrollEffects'
import { projects } from '../../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [ref, inView] = useInView()
  const [showAll, setShowAll] = useState(false)

  const featured  = projects.filter(p => p.featured)
  const rest      = projects.filter(p => !p.featured)
  const displayed = showAll ? projects : featured

  return (
    <section id="projects" className="section" ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="section-label">Projects</div>
            <h2 className="section-title">
              Things I've <span style={{ color: 'var(--accent-green)' }}>Built.</span>
            </h2>
          </div>
          <button
            onClick={() => setShowAll(s => !s)}
            className="btn btn-outline"
            style={{ padding: '10px 20px', fontSize: '0.78rem' }}
          >
            {showAll ? 'Show Featured' : `View All (${projects.length})`}
          </button>
        </div>

        {/* Featured — large grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 24,
        }}>
          {displayed.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <p style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem', marginBottom: 20 }}>
            — more on GitHub —
          </p>
          <a href="https://github.com/nandakrishnan1311"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-primary">
            View GitHub Profile ↗
          </a>
        </div>
      </div>
    </section>
  )
}
