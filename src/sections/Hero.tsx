import { bio } from '../data/content'

export function Hero() {
  return (
    <section id="hero" className="section section--hero" aria-labelledby="hero-heading">
      <p className="hero-kicker reveal">A comic strip about</p>
      <h1 id="hero-heading" className="reveal">
        {bio.name}
      </h1>
      <p className="hero-tagline reveal">{bio.tagline}</p>
    </section>
  )
}
