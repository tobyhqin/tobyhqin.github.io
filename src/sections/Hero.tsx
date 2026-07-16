import { SceneChapter } from '../components/SceneChapter'
import { bio } from '../data/content'

export function Hero() {
  return (
    <SceneChapter id="hero">
      <div className="chapter-lead chapter-lead--hero">
        <h1 id="hero-heading">{bio.name}</h1>
        <p className="hero-tagline">{bio.tagline}</p>
        <a className="scroll-cue" href="#about" aria-label="Scroll to About">
          ↓
        </a>
      </div>
    </SceneChapter>
  )
}
