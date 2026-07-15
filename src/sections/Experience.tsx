import { experience } from '../data/content'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="reveal">
        Experience
      </h2>
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
    </section>
  )
}
