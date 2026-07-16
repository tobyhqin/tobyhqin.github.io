import { InlineScene } from '../components/SceneMedia'
import { awards, research, scenes, site } from '../data/content'

export function Work() {
  const scene = scenes.find((item) => item.id === 'work')!

  return (
    <section id="work" className="journey-chapter work" data-scene="work" aria-labelledby="work-heading">
      <InlineScene id="work" />
      <header className="chapter-heading">
        <p className="stage-number">{scene.number}</p>
        <h2 id="work-heading">{site.workTitle}</h2>
      </header>
      <div className="research-list">
        {research.map((item) => (
          <article key={item.title}>
            <div className="research-meta">
              <p>{item.field}</p>
              <p>{item.status}</p>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <section className="awards" aria-labelledby="awards-heading">
        <h3 id="awards-heading">{site.awardsTitle}</h3>
        <ol>
          {awards.map((award) => (
            <li key={award.title}>
              <div>
                <h4>{award.title}</h4>
                <p>{award.detail}</p>
              </div>
              <p>{award.scope}</p>
            </li>
          ))}
        </ol>
      </section>
    </section>
  )
}
