import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

/**
 * A full-viewport comic scene chapter. The scene video is sticky and fills the
 * viewport (object-fit: contain — its cream bg is color-matched to the page, so
 * letterboxing is invisible and characters never crop). Content scrolls over it.
 * Video plays only while the chapter is on screen; reduced-motion gets the poster.
 */

type Props = {
  id: string
  /** which side of the scene the body content hugs, so characters stay visible */
  align?: 'left' | 'center' | 'right'
  children: ReactNode
}

export function SceneChapter({ id, align = 'center', children }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {}) // autoplay can be blocked; poster remains
        } else {
          video.pause()
        }
      },
      { threshold: 0.05 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const reduced =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section id={id} className="chapter" aria-labelledby={`${id}-heading`}>
      <div className="chapter-scene" aria-hidden="true">
        {reduced ? (
          <img src={`/media/scenes/${id}.webp`} alt="" />
        ) : (
          <video
            ref={videoRef}
            src={`/media/scenes/${id}.webm`}
            poster={`/media/scenes/${id}.webp`}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
      <div className={`chapter-content chapter-content--${align}`}>{children}</div>
    </section>
  )
}
