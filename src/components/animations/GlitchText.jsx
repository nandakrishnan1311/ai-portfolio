import React, { useState } from 'react'

export default function GlitchText({ text, tag: Tag = 'span', className = '', style = {} }) {
  const [glitching, setGlitching] = useState(false)
  const chars = '!<>-_\\/[]{}—=+*^?#________'

  const scramble = () => {
    setGlitching(true)
    let iteration = 0
    const el = document.querySelector(`[data-glitch="${text}"]`)
    const interval = setInterval(() => {
      if (!el) return
      el.innerText = text.split('').map((letter, idx) => {
        if (idx < iteration) return letter
        return chars[Math.floor(Math.random() * chars.length)]
      }).join('')
      if (iteration >= text.length) {
        clearInterval(interval)
        el.innerText = text
        setGlitching(false)
      }
      iteration += 1/3
    }, 30)
  }

  return (
    <Tag
      data-glitch={text}
      className={`glitch ${className}`}
      data-text={text}
      onMouseEnter={scramble}
      style={{ display: 'inline-block', ...style }}
    >
      {text}
    </Tag>
  )
}
