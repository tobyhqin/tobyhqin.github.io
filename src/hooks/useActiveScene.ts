import { useEffect, useState } from 'react'
import type { SceneId } from '../data/content'

export function useActiveScene(sceneIds: SceneId[]) {
  const [activeScene, setActiveScene] = useState<SceneId | null>(null)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const visibility = new Map<Element, boolean>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visibility.set(entry.target, entry.isIntersecting)

        const visible = [...visibility.entries()]
          .filter(([, isVisible]) => isVisible)
          .map(([element]) => element)
          .sort((a, b) => {
            const center = window.innerHeight / 2
            const aCenter = a.getBoundingClientRect().top + a.getBoundingClientRect().height / 2
            const bCenter = b.getBoundingClientRect().top + b.getBoundingClientRect().height / 2
            return Math.abs(aCenter - center) - Math.abs(bCenter - center)
          })[0]

        setActiveScene((visible?.getAttribute('data-scene') as SceneId | null) ?? null)
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 },
    )

    for (const id of sceneIds) {
      const section = document.querySelector(`[data-scene="${id}"]`)
      if (section) {
        visibility.set(section, false)
        observer.observe(section)
      }
    }

    return () => observer.disconnect()
  }, [sceneIds])

  return activeScene
}
