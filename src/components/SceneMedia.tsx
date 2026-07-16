import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { scenes, type Scene, type SceneId } from '../data/content'
import { useMediaQuery } from '../hooks/useMediaQuery'

type SceneVideoProps = {
  scene: Scene
  active: boolean
  priority?: boolean
}

function SceneVideo({ scene, active, priority = false }: SceneVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  useEffect(() => {
    const video = videoRef.current
    if (!video || !priority) return
    video.setAttribute('fetchpriority', 'high')
  }, [priority])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const syncPlayback = () => {
      if (reduceMotion) {
        video.pause()
        video.currentTime = 0
        video.load()
        return
      }

      if (!active || document.hidden) {
        video.pause()
        return
      }

      void video.play().catch(() => {
        // The poster remains visible if a browser declines ambient autoplay.
      })
    }

    syncPlayback()
    document.addEventListener('visibilitychange', syncPlayback)
    return () => document.removeEventListener('visibilitychange', syncPlayback)
  }, [active, reduceMotion])

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      disablePictureInPicture
      poster={scene.poster}
      preload={priority ? 'metadata' : 'none'}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={scene.webm} type="video/webm" />
      <source src={scene.mp4} type="video/mp4" />
    </video>
  )
}

export function HeroScene() {
  const scene = scenes[0]
  const figureRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const figure = figureRef.current
    if (!figure || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.08 },
    )
    observer.observe(figure)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className="hero-scene" ref={figureRef}>
      <SceneVideo scene={scene} active={active} priority />
      <figcaption>{scene.caption}</figcaption>
    </figure>
  )
}

type SceneStackProps = {
  activeId: SceneId | null
  items: Scene[]
}

export function SceneStack({ activeId, items }: SceneStackProps) {
  const isDesktop = useMediaQuery('(min-width: 1201px)')
  const visualId = activeId ?? items[0].id
  const activeIndex = Math.max(0, items.findIndex((scene) => scene.id === visualId))
  const progress = (activeIndex + 1) / items.length
  const activeScene = items[activeIndex]
  const style = { '--journey-progress': progress } as CSSProperties

  return (
    <div className="scene-rail" style={style}>
      <div className="scene-stack">
        {items.map((scene) => (
          <div
            className={`scene-stack__item${scene.id === visualId ? ' is-active' : ''}`}
            key={scene.id}
            aria-hidden={scene.id !== visualId}
          >
            <SceneVideo scene={scene} active={isDesktop && scene.id === activeId} />
          </div>
        ))}
      </div>
      <div className="scene-rail__meta">
        <p className="scene-count">
          <span>{activeScene.number}</span> / 05
        </p>
        <p className="scene-caption">{activeScene.caption}</p>
      </div>
      <div className="journey-progress" aria-hidden="true">
        <span />
      </div>
    </div>
  )
}

export function InlineScene({ id }: { id: SceneId }) {
  const scene = scenes.find((item) => item.id === id)
  const figureRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const figure = figureRef.current
    if (!figure || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.25 },
    )
    observer.observe(figure)
    return () => observer.disconnect()
  }, [])

  if (!scene) return null

  return (
    <figure className="inline-scene" ref={figureRef}>
      <SceneVideo scene={scene} active={active} />
      <figcaption>{scene.caption}</figcaption>
    </figure>
  )
}
