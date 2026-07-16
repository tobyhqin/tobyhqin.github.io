import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { scrollScrubTime, shouldSeekVideo, smoothScrubTime } from './scrollScrub'

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
      if (
        video.readyState < 2 ||
        !Number.isFinite(video.duration) ||
        video.duration <= 0 ||
        video.seeking
      )
        return

      const bounds = chapter.getBoundingClientRect()
      const target = scrollScrubTime(bounds.top, bounds.height, innerHeight, video.duration)
      if (!initialized) {
        initialized = true
        if (shouldSeekVideo(video.currentTime, target, video.seeking)) video.currentTime = target
        return
      }

      if (!shouldSeekVideo(video.currentTime, target, video.seeking)) return

      const next = smoothScrubTime(video.currentTime, target, timestamp - previousTimestamp)
      previousTimestamp = timestamp
      video.currentTime = Math.abs(next - target) <= 1 / 60 ? target : next
      frame = requestAnimationFrame(update)
    }
    const scheduleUpdate = () => {
      if (!frame) {
        previousTimestamp = performance.now()
        frame = requestAnimationFrame(update)
      }
    }

    video.pause()
    video.addEventListener('loadeddata', scheduleUpdate)
    video.addEventListener('seeked', scheduleUpdate)
    addEventListener('scroll', scheduleUpdate, { passive: true })
    addEventListener('resize', scheduleUpdate)
    scheduleUpdate()

    return () => {
      video.removeEventListener('loadeddata', scheduleUpdate)
      video.removeEventListener('seeked', scheduleUpdate)
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
            /* The media fragment makes the first decoded frame available on
               paused iOS video before scroll-driven seeking begins. */
            src={`/media/scenes/${id}.mp4#t=0.001`}
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
