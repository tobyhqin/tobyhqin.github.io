import { SceneChapter } from '../components/SceneChapter'
import { bio } from '../data/content'

export function About() {
  return (
    <SceneChapter id="about">
      <div className="chapter-lead">
        <h2 id="about-heading" className="chapter-title">
          About
        </h2>
      </div>
      <div className="chapter-body">
        <div className="panel reveal">
          {bio.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SceneChapter>
  )
}
