import { Suspense, lazy, useEffect, useState } from 'react'
import { SceneChapter } from '../components/SceneChapter'
import { bio, ui } from '../data/content'

const HeroScene = lazy(() => import('../three/HeroScene'))

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function Hero() {
  const [showWagon, setShowWagon] = useState(false)
  // defer WebGL probe + heavy chunk until after first paint
  useEffect(() => {
    setShowWagon(supportsWebGL())
  }, [])

  return (
    <SceneChapter id="hero">
      <div className="chapter-lead chapter-lead--hero">
        <p className="hero-kicker">{ui.heroKicker}</p>
        <h1 id="hero-heading">{bio.name}</h1>
        <p className="hero-tagline">{bio.tagline}</p>
        <a className="scroll-cue" href="#about" aria-label="Scroll to About">
          ↓
        </a>
      </div>
      {showWagon && (
        <div className="hero-wagon" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}
    </SceneChapter>
  )
}
