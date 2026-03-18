import React, { useEffect, useRef } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero3D from './components/hero/Hero3D'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Publications from './components/publications/Publications'
import Achievements from './components/achievements/Achievements'
import Contact from './components/contact/Contact'
import ParticleBackground from './components/animations/ParticleBackground'

export default function App() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX  = 0, ringY  = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dot) {
        dot.style.left = mouseX + 'px'
        dot.style.top  = mouseY + 'px'
      }
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      if (ring) {
        ring.style.left = ringX + 'px'
        ring.style.top  = ringY + 'px'
      }
      requestAnimationFrame(animate)
    }

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [data-hover]')) ring?.classList.add('hovered')
    }
    const onMouseOut = () => ring?.classList.remove('hovered')

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout',  onMouseOut)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout',  onMouseOut)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
      <div className="noise-overlay" />
      <div className="scanline" />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero3D />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
