import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { scrollScrubTime, smoothScrubTime } from './scrollScrub'

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
    let initialized = false
    let previousTimestamp = 0
    const update = (timestamp: number) => {
      frame = 0
      if (!Number.isFinite(video.duration) || video.duration <= 0) return

      const bounds = chapter.getBoundingClientRect()
      const target = scrollScrubTime(bounds.top, bounds.height, innerHeight, video.duration)
      if (!initialized) {
        video.currentTime = target
        initialized = true
        return
      }

      const next = smoothScrubTime(video.currentTime, target, timestamp - previousTimestamp)
      previousTimestamp = timestamp
      if (Math.abs(next - target) <= 1 / 60) {
        video.currentTime = target
        return
      }

      video.currentTime = next
      frame = requestAnimationFrame(update)
    }
    const scheduleUpdate = () => {
      if (!frame) {
        previousTimestamp = performance.now()
        frame = requestAnimationFrame(update)
      }
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
            /* all-intra mp4: every frame is a keyframe, so scrub seeks land
               frame-exact and instantly; preload=auto keeps seeks buffer-hit */
            src={`/media/scenes/${id}.mp4`}
            poster={`/media/scenes/${id}.webp`}
            muted
            playsInline
            preload="auto"
          />
        )}
      </div>
      <div className={`chapter-content chapter-content--${align}`}>{children}</div>
    </section>
  )
}
