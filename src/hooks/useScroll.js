import { useState, useEffect } from 'react'

export default function useScroll() {
  const [scrollY,    setScrollY]    = useState(0)
  const [scrollDir,  setScrollDir]  = useState('down')
  const [progress,   setProgress]   = useState(0)

  useEffect(() => {
    let prev = window.scrollY
    const onScroll = () => {
      const curr = window.scrollY
      setScrollY(curr)
      setScrollDir(curr > prev ? 'down' : 'up')
      const docH   = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? curr / docH : 0)
      prev = curr
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollY, scrollDir, progress }
}
