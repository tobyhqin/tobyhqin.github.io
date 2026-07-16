import { Suspense, lazy, useEffect, useState } from 'react'
import { bio } from '../data/content'

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
  const [showScene, setShowScene] = useState(false)
  // defer WebGL probe + heavy chunk until after first paint
  useEffect(() => {
    setShowScene(supportsWebGL())
  }, [])

  return (
    <section id="hero" className="section section--hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <p className="hero-kicker reveal">A comic strip about</p>
        <h1 id="hero-heading" className="reveal">
          {bio.name}
        </h1>
        <p className="hero-tagline reveal">{bio.tagline}</p>
      </div>
      {showScene && (
        <div className="hero-visual" aria-hidden="true">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}
    </section>
  )
}
