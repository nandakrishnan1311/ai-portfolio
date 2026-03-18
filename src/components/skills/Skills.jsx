import React, { useState } from 'react'
import { useInView } from '../animations/ScrollEffects'
import { skillCategories } from '../../data/skills'
import SkillIcons from './SkillIcons'

export default function Skills() {
  const [ref, inView]     = useInView()
  const [active, setActive] = useState('ai-ml')

  const category = skillCategories.find(c => c.id === active)

  return (
    <section id="skills" className="section" ref={ref}
      style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Skills</div>
          <h2 className="section-title">
            My Tech <span style={{ color: 'var(--accent-green)' }}>Arsenal</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
            A curated selection of tools and technologies I use to build production AI systems.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: 48 }}>
          {skillCategories.map(cat => (
            <button key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{
                padding: '10px 22px',
                fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                textTransform: 'uppercase', letterSpacing: '0.08em',
                background: active === cat.id ? cat.color : 'transparent',
                color: active === cat.id ? 'var(--bg-primary)' : 'var(--text-secondary)',
                border: `1px solid ${active === cat.id ? cat.color : 'var(--border-subtle)'}`,
                borderRadius: 4, cursor: 'none', transition: 'var(--transition)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16, marginBottom: 80,
        }}>
          {category?.skills.map((skill, i) => (
            <div key={skill.name} style={{
              padding: '20px 24px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.5s ease ${i * 0.06}s`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500,
                  fontSize: '0.9rem' }}>{skill.name}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem',
                  color: category.color }}>{skill.level}%</span>
              </div>
              {/* Bar */}
              <div style={{ height: 3, background: 'var(--border-subtle)',
                borderRadius: 2, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: inView ? `${skill.level}%` : '0%',
                  background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                  borderRadius: 2,
                  transition: `width 0.8s ease ${i * 0.08 + 0.3}s`,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Tech icons */}
        <SkillIcons inView={inView} />
      </div>
    </section>
  )
}
