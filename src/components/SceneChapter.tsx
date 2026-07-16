import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { scrollScrubTime } from './scrollScrub'

/**
 * A full-viewport comic scene chapter. The scene video is sticky and fills the
 * viewport (object-fit: contain — its cream bg is color-matched to the page, so
 * letterboxing is invisible and characters never crop). Content scrolls over it.
 * Scrolling scrubs the scene video in either direction; reduced-motion gets the poster.
 */

type Props = {
  id: string
  /** which side of the scene the body content hugs, so characters stay visible */
  align?: 'left' | 'center' | 'right'
  children: ReactNode
}

export function SceneChapter({ id, align = 'center', children }: Props) {
  const chapterRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const chapter = chapterRef.current
    const video = videoRef.current
    if (!chapter || !video || matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      if (!Number.isFinite(video.duration) || video.duration <= 0) return

      const bounds = chapter.getBoundingClientRect()
      const target = scrollScrubTime(bounds.top, bounds.height, innerHeight, video.duration)
      if (Math.abs(video.currentTime - target) > 1 / 60) video.currentTime = target
    }
    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    video.pause()
    video.addEventListener('loadedmetadata', scheduleUpdate)
    addEventListener('scroll', scheduleUpdate, { passive: true })
    addEventListener('resize', scheduleUpdate)
    scheduleUpdate()

    return () => {
      video.removeEventListener('loadedmetadata', scheduleUpdate)
      removeEventListener('scroll', scheduleUpdate)
      removeEventListener('resize', scheduleUpdate)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const reduced =
    typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <section ref={chapterRef} id={id} className="chapter" aria-labelledby={`${id}-heading`}>
      <div className="chapter-scene" aria-hidden="true">
        {reduced ? (
          <img src={`/media/scenes/${id}.webp`} alt="" />
        ) : (
          <video
            ref={videoRef}
            src={`/media/scenes/${id}.webm`}
            poster={`/media/scenes/${id}.webp`}
            muted
            playsInline
            preload="metadata"
          />
        )}
      </div>
      <div className={`chapter-content chapter-content--${align}`}>{children}</div>
    </section>
  )
}
