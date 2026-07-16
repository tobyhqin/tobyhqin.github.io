import { works } from '../data/content'

export function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-heading">
      <h2 id="work-heading" className="reveal">
        Projects &amp; Papers
      </h2>
      <div className="card-grid">
        {works.map((work) => (
          <article key={work.title} className="panel card reveal">
            <p className="card-kind">{work.kind === 'paper' ? '📄 Paper' : '🛠 Project'}</p>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            {work.venue && <p className="card-venue">{work.venue}</p>}
            {work.paperUrl && (
              <p>
                <a href={work.paperUrl}>Read the paper</a>
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
