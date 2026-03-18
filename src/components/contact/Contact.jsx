import React, { useState } from 'react'
import { useInView } from '../animations/ScrollEffects'
import { profile } from '../../data/profile'

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // ── Connect to Formspree or EmailJS here ──
    console.log('Form submitted:', form)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section" ref={ref}
      style={{ background: 'var(--bg-secondary)', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'start',
        }}>
          {/* Left */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 0.6s ease',
          }}>
            <div className="section-label">Contact</div>
            <h2 className="section-title">
              Let's <span style={{ color: 'var(--accent-green)' }}>Connect.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8,
              marginBottom: 48, fontSize: '1.05rem' }}>
              Have an interesting project, want to collaborate, or just want to say hello?
              My inbox is always open.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Email',    value: profile.email,
                  href: 'mailto:' + profile.email },
                { label: 'Phone',    value: profile.phone,
                  href: 'tel:' + profile.phone },
                { label: 'GitHub',   value: 'github.com/' + profile.github,
                  href: 'https://github.com/' + profile.github },
                { label: 'LinkedIn', value: 'linkedin.com/in/' + profile.linkedin,
                  href: 'https://linkedin.com/in/' + profile.linkedin },
                { label: 'Kaggle',      value: 'kaggle.com/nandakrishnan1311',
                  href: profile.kaggle },
                { label: 'HuggingFace', value: 'huggingface.co/nandakrishnan1311',
                  href: profile.huggingface },
                { label: 'arXiv',       value: 'arxiv.org',
                  href: profile.arxiv },
              ].map(item => (
                <a key={item.label} href={item.href}
                  target={item.label !== 'Phone' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '14px 18px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none', transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-bright)'
                    e.currentTarget.style.transform = 'translateX(4px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                    e.currentTarget.style.transform = 'translateX(0)'
                  }}
                >
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      color: 'var(--accent-green)', textTransform: 'uppercase',
                      letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                      {item.value}
                    </div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--text-dim)' }}>↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right – form */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.6s ease 0.2s',
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: 40,
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✓</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                    color: 'var(--accent-green)', fontWeight: 700 }}>Message Sent!</div>
                  <div style={{ color: 'var(--text-secondary)', marginTop: 8 }}>
                    I'll get back to you soon.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { name: 'name',  label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
                    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  ].map(field => (
                    <div key={field.name}>
                      <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                        color: 'var(--accent-green)', textTransform: 'uppercase',
                        letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>
                        {field.label}
                      </label>
                      <input type={field.type} name={field.name} value={form[field.name]}
                        onChange={handleChange} placeholder={field.placeholder} required
                        style={{
                          width: '100%', padding: '14px 16px',
                          background: 'var(--bg-primary)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-sm)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                          outline: 'none', transition: 'border-color 0.2s',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--accent-green)'}
                        onBlur={e  => e.target.style.borderColor = 'var(--border-subtle)'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                      color: 'var(--accent-green)', textTransform: 'uppercase',
                      letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>
                      Message
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell me about your project..." required rows={5}
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                        fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                        outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent-green)'}
                      onBlur={e  => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
