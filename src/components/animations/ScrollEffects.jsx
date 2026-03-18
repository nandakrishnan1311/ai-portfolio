import { useEffect, useRef, useState } from 'react'

/**
 * useInView – returns a ref + boolean indicating if the element is in the viewport.
 * @param {number} threshold  – intersection threshold (0–1)
 * @param {boolean} once      – stop observing once visible
 */
export function useInView(threshold = 0.15, once = true) {
  const ref       = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, inView]
}

export default function ScrollEffects() { return null }
