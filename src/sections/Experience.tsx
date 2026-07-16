import { SceneChapter } from '../components/SceneChapter'
import { experience } from '../data/content'

export function Experience() {
  return (
    <SceneChapter id="experience" align="left">
      <div className="chapter-lead">
        <h2 id="experience-heading" className="chapter-title">
          Experience
        </h2>
      </div>
      <div className="chapter-body">
        <ol className="timeline">
          {experience.map((item) => (
            <li key={item.org} className="timeline-item panel reveal">
              <h3>{item.org}</h3>
              <p className="timeline-role">
                {item.role} <span className="timeline-period">· {item.period}</span>
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </SceneChapter>
  )
}
