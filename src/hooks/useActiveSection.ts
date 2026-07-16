import { useEffect, useState } from 'react'

/** Returns the id of the section currently dominating the viewport. */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const ratios = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        let bestId = ''
        let bestRatio = 0
        for (const [id, ratio] of ratios) {
          if (ratio > bestRatio) {
            bestId = id
            bestRatio = ratio
          }
        }
        if (bestId) setActive(bestId)
      },
      { threshold: [0.1, 0.25, 0.5, 0.75] },
    )
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
