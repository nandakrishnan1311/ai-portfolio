import React from 'react'
import { useInView } from '../animations/ScrollEffects'

const timeline = [
  {
    year: '2025',
    items: [
      {
        type: 'edu',
        title: 'B.Tech in Computer Science and Engineering — Completed',
        desc: 'Successfully completed B.Tech in Computer Science and Engineering from Mount Zion Institute of Science & Technology, Alappuzha, Kerala, affiliated to APJ Abdul Kalam Technological University, Thiruvananthapuram.',
      },
      {
        type: 'work',
        title: 'AI Intern — Edunet Foundation (MS AINSI Internship)',
        desc: 'April 2025 – May 2025. A 4-week AICTE internship in collaboration with Microsoft, focusing on AI, Machine Learning, Deep Learning, and Generative AI. Gained hands-on experience with Azure, Custom Vision tools, and real-world AI problem statements under expert mentorship.',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        type: 'work',
        title: 'Intern — Edunet Foundation (Techsaksham Internship)',
        desc: 'January 2025 – February 2025. A 4-week AICTE internship in collaboration with Microsoft and SAP, specializing in Data Analytics, Machine Learning, Deep Learning, and GenAI. Worked on real-world problem definitions, developed project prototypes, and received personalized mentorship from industry experts.',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        type: 'cert',
        title: 'NPTEL Robotics Course — IIT Kharagpur (Elite)',
        desc: 'Completed an 8-week Robotics course hosted by Swayam NPTEL in collaboration with IIT Kharagpur. Duration: July–September 2024. Consolidated Score: 61% (Elite).',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        type: 'work',
        title: 'Python Developer Intern — Mallikarjuna Infosys',
        desc: 'October 2023 – December 2023. Gained practical experience in Python development in collaboration with AICTE. Worked on designing, coding, testing, and debugging Python applications, implementing algorithms, optimizing code efficiency, and integrating APIs.',
      },
      {
        type: 'cert',
        title: 'Python Training — CADD Centre Training Services, Thiruvalla',
        desc: 'Completed an intensive Python training program. Duration: 07 September 2023 – 15 December 2023.',
      },
      {
        type: 'work',
        title: 'Student coordinator PACE in the college',
        desc: 'Joined as a PACE Coordinator (Project for Accident-Free Campus Environment) at our college in September 2023.',
      },
      {
        type: 'award',
        title: 'Surakshayanam PACE — Certificate of Participation',
        desc: 'Participated in Surakshayanam PACE (Project for Accident Free Campus Environment) held at SCMS School of Engineering & Technology, Karukutty, on 9th & 10th September 2023. Organized by KTU NSS Cell in collaboration with MVD.',
      },
      {
        type: 'project',
        title: 'Industrial Visit — Infodawn, Pathanamthitta',
        desc: 'Completed second industrial visit at Infodawn, Pathanamthitta in October 2023, gaining exposure to real-world software development processes and industry practices.',
      },
      {
        type: 'edu',
        title: 'Seminar on Artificial Intelligence — Networkz Systems, Thiruvalla',
        desc: 'Attended a seminar on Artificial Intelligence organized by Networkz Systems, Thiruvalla on 17 February 2023.',
      },
    ],
  },
  {
    year: '2022',
    items: [
      {
        type: 'cert',
        title: 'Workshop on Python Django Web Application Development',
        desc: 'Completed a workshop on Python Django Web Application Development organized by Orion Club Innovations, held at Mount Zion Institute of Science & Technology on 15 November 2022.',
      },
      {
        type: 'project',
        title: 'Industrial Visit — Orion Club Innovations',
        desc: 'Completed an industrial visit at Orion Club Innovations on 23 July 2022, gaining hands-on exposure to software development tools and real-world project workflows.',
      },
      {
        type: 'edu',
        title: 'Seminar on Machine Learning — KITES Softwares Pvt. Ltd.',
        desc: 'Completed a seminar on Machine Learning organized by KITES Softwares Pvt. Ltd., held at Mount Zion Institute of Science & Technology on 16 May 2022.',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        type: 'edu',
        title: 'B.Tech in Computer Science and Engineering — Started',
        desc: 'Enrolled in B.Tech Computer Science and Engineering at Mount Zion Institute of Science & Technology, Alappuzha, Kerala, affiliated to APJ Abdul Kalam Technological University, Thiruvananthapuram, Kerala.',
      },
    ],
  },
]

const certifications = [
  { name: 'NPTEL Robotics — Elite',          issuer: 'IIT Kharagpur / Swayam',     year: 2024, color: '#00FFB2' },
  { name: 'Python Training',                  issuer: 'CADD Centre, Thiruvalla',     year: 2023, color: '#7B61FF' },
  { name: 'MS AINSI AI Internship',           issuer: 'Edunet Foundation / Microsoft', year: 2025, color: '#48DBFB' },
  { name: 'Techsaksham Internship',           issuer: 'Edunet Foundation / Microsoft & SAP', year: 2025, color: '#FF6B6B' },
  { name: 'Python Django Workshop',           issuer: 'Orion Club Innovations',      year: 2022, color: '#FFD93D' },
  { name: 'Machine Learning Seminar',         issuer: 'KITES Softwares Pvt. Ltd.',   year: 2022, color: '#FF9F43' },
]

const typeColors = {
  work: '#00FFB2', edu: '#7B61FF', award: '#FFD93D',
  cert: '#FF6B6B', project: '#48DBFB',
}

export default function Achievements() {
  const [ref, inView] = useInView()

  return (
    <section id="achievements" className="section" ref={ref}
      style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="section-label">Achievements</div>
        <h2 className="section-title" style={{ marginBottom: 64 }}>
          Journey & <span style={{ color: 'var(--accent-green)' }}>Milestones</span>
        </h2>

        {/* Timeline */}
        <div style={{ marginBottom: 96 }}>
          {timeline.map((block, bi) => (
            <div key={`${block.year}-${bi}`} style={{
              display: 'grid', gridTemplateColumns: '80px 1fr',
              gap: 32, marginBottom: 32,
            }}>
              {/* Year */}
              <div style={{ paddingTop: 4 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem',
                  fontWeight: 800, color: 'var(--accent-green)', lineHeight: 1 }}>
                  {block.year}
                </div>
                <div style={{ width: 1, height: '100%',
                  background: 'var(--border-subtle)', margin: '12px auto 0' }} />
              </div>
              {/* Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {block.items.map((item, ii) => (
                  <div key={ii} style={{
                    padding: '18px 22px',
                    background: 'var(--bg-card)',
                    border: `1px solid ${typeColors[item.type]}22`,
                    borderLeft: `3px solid ${typeColors[item.type]}`,
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease ${(bi * 0.15 + ii * 0.08)}s`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center',
                      gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                        color: typeColors[item.type], textTransform: 'uppercase',
                        letterSpacing: '0.1em', padding: '2px 8px',
                        border: `1px solid ${typeColors[item.type]}44`,
                        borderRadius: 2, whiteSpace: 'nowrap' }}>
                        {item.type}
                      </span>
                      <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600,
                        fontSize: '0.92rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)',
                      lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem',
            fontWeight: 700, marginBottom: 32, color: 'var(--text-secondary)' }}>
            Certifications & Training
          </h3>
          <div style={{ display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {certifications.map((cert, i) => (
              <div key={cert.name} style={{
                padding: '22px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}>
                <div style={{ width: 32, height: 4,
                  background: cert.color, borderRadius: 2, marginBottom: 16 }} />
                <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 600,
                  fontSize: '0.92rem', marginBottom: 6 }}>{cert.name}</h4>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                  color: 'var(--text-dim)' }}>
                  {cert.issuer} · {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
