import { useEffect } from 'react'

/**
 * Fade-up reveal for .reveal elements. Elements are visible by default;
 * this hook hides them (.reveal-pending) and un-hides on intersection, so a
 * missing/never-firing IntersectionObserver degrades to a fully visible page.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    // fail-safe (armed below): reveal everything if the observer never fires.
    // The observer ALWAYS fires an initial callback when alive, which disarms it —
    // so this only trips in throttled/embed renderers where IO is dead.
    let failSafe: ReturnType<typeof setTimeout> | undefined
    const observer = new IntersectionObserver(
      (entries) => {
        clearTimeout(failSafe)
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
      // stagger siblings: index among .reveal elements sharing a parent
      const siblings = el.parentElement
        ? [...el.parentElement.children].filter((c) => c.classList.contains('reveal'))
        : [el]
      ;(el as HTMLElement).style.setProperty('--reveal-i', String(siblings.indexOf(el)))
      el.classList.add('reveal-pending')
      observer.observe(el)
    }
    failSafe = setTimeout(() => {
      for (const el of elements) el.classList.remove('reveal-pending')
    }, 2000)
    return () => {
      clearTimeout(failSafe)
      observer.disconnect()
      for (const el of elements) el.classList.remove('reveal-pending')
    }
  }, [])
}
