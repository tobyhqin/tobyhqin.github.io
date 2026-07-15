import { bio } from '../data/content'

export function Hero() {
  return (
    <section id="hero" className="section section--hero" aria-labelledby="hero-heading">
      <div className="hero-text">
        <p className="hero-kicker reveal">{bio.kicker}</p>
        <h1 id="hero-heading" className="reveal">
          {bio.name}
        </h1>
        <p className="hero-tagline reveal">{bio.tagline}</p>
      </div>
      <div className="hero-landscape" aria-hidden="true">
        <span className="hero-sun" />
        <span className="hero-mountain hero-mountain--far" />
        <span className="hero-mountain hero-mountain--near" />
        <span className="hero-trail" />
      </div>
    </section>
  )
}
