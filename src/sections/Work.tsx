import { SceneChapter } from '../components/SceneChapter'
import { ui, works } from '../data/content'

export function Work() {
  return (
    <SceneChapter id="work" align="right">
      <div className="chapter-lead">
        <h2 id="work-heading" className="chapter-title">
          Projects &amp; Papers
        </h2>
      </div>
      <div className="chapter-body">
        <div className="card-grid">
          {works.map((work) => (
            <article key={work.title} className="panel card reveal">
              <p className="card-kind">{work.kind === 'paper' ? ui.paperTag : ui.projectTag}</p>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              {work.venue && <p className="card-venue">{work.venue}</p>}
              {work.paperUrl && (
                <p>
                  <a href={work.paperUrl}>{ui.readPaper}</a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </SceneChapter>
  )
}
