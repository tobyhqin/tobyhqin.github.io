import { useEffect } from 'react'

/**
 * Fade-up reveal for .reveal elements. Elements are visible by default;
 * this hook hides them (.reveal-pending) and un-hides on intersection, so a
 * missing/never-firing IntersectionObserver degrades to a fully visible page.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    const elements = [...document.querySelectorAll('.reveal')]
    for (const el of elements) {
      el.classList.add('reveal-pending')
      observer.observe(el)
    }
    // fail-safe: if the observer never fires (throttled renderer, embed quirks),
    // reveal everything rather than leave the page hidden
    const failSafe = setTimeout(() => {
      for (const el of elements) el.classList.remove('reveal-pending')
    }, 2000)
    return () => {
      clearTimeout(failSafe)
      observer.disconnect()
      for (const el of elements) el.classList.remove('reveal-pending')
    }
  }, [])
}
