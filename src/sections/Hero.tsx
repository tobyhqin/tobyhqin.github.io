import { HeroScene } from '../components/SceneMedia'
import { scenes, site } from '../data/content'

export function Hero() {
  const scene = scenes[0]

  return (
    <section id="hero" className="hero" aria-labelledby="hero-heading">
      <HeroScene />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span>{scene.number}</span> {site.eyebrow}
        </p>
        <h1 id="hero-heading">{site.name}</h1>
        <p className="hero-tagline">{site.tagline}</p>
        <a className="hero-action" href="#about">
          {site.heroAction} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
