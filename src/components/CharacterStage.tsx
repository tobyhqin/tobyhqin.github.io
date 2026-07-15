import { useEffect, useRef, useState } from 'react'
import { StandInDuo } from './StandInDuo'

/**
 * The fixed character layer. One pose per section; generated art drops into
 * public/media/characters/<section>.webp (hero may also get hero.webm).
 * Until an asset exists, an ink-line SVG stand-in renders instead.
 */

export type Pose = {
  section: string
  /** what the duo is doing — drives the SVG stand-in + alt text */
  activity: 'tumble' | 'lounge' | 'wagon' | 'spaceman' | 'explore'
  alt: string
  video?: boolean
}

const POSES: Pose[] = [
  { section: 'hero', activity: 'tumble', alt: 'The duo tumbles in, mid-adventure', video: true },
  { section: 'about', activity: 'lounge', alt: 'The tiger lounges while the boy points at the bio' },
  { section: 'experience', activity: 'wagon', alt: 'The duo races their red wagon down the timeline' },
  { section: 'work', activity: 'spaceman', alt: 'A fearless spaceman investigates the project cards' },
  { section: 'contact', activity: 'explore', alt: 'The two walk off into the snow, waving goodbye' },
]

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

type Props = {
  activeSection: string
}

export function CharacterStage({ activeSection }: Props) {
  const pose = POSES.find((p) => p.section === activeSection) ?? POSES[0]
  const [brokenAssets, setBrokenAssets] = useState<ReadonlySet<string>>(new Set())
  const stageRef = useRef<HTMLDivElement>(null)

  // Wagon ride: nudge the duo across the stage as the user scrolls Experience.
  useEffect(() => {
    if (pose.activity !== 'wagon' || matchMedia(REDUCED_MOTION).matches) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const section = document.getElementById('experience')
        const stage = stageRef.current
        if (!section || !stage) return
        const rect = section.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - innerHeight)))
        stage.style.transform = `translateX(${(progress - 1) * 40}vw)`
      })
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => {
      removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
      if (stageRef.current) stageRef.current.style.transform = ''
    }
  }, [pose.activity])

  const markBroken = (src: string) => {
    setBrokenAssets((prev) => new Set(prev).add(src))
  }

  const imgSrc = `/media/characters/${pose.section}.webp`
  const videoSrc = `/media/characters/${pose.section}.webm`
  const useVideo = pose.video && !brokenAssets.has(videoSrc) && !matchMedia(REDUCED_MOTION).matches
  const useImage = !brokenAssets.has(imgSrc)

  return (
    <div ref={stageRef} className="character-stage" aria-hidden="true">
      {/* key remounts on pose change → CSS entry animation runs */}
      <div key={pose.section} className="character-pose">
        {useVideo ? (
          <video
            src={videoSrc}
            poster={useImage ? imgSrc : undefined}
            autoPlay
            muted
            loop
            playsInline
            onError={() => markBroken(videoSrc)}
          />
        ) : useImage ? (
          <img src={imgSrc} alt="" onError={() => markBroken(imgSrc)} />
        ) : (
          <StandInDuo activity={pose.activity} />
        )}
      </div>
    </div>
  )
}
