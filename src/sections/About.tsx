import { InlineScene } from '../components/SceneMedia'
import { bio, scenes, site } from '../data/content'

export function About() {
  const scene = scenes.find((item) => item.id === 'about')!

  return (
    <section id="about" className="journey-chapter about" data-scene="about" aria-labelledby="about-heading">
      <InlineScene id="about" />
      <header className="chapter-heading">
        <p className="stage-number">{scene.number}</p>
        <h2 id="about-heading">{site.aboutTitle}</h2>
      </header>
      <div className="about-copy">
        {bio.about.map((paragraph) => (
          <p key={paragraph.slice(0, 30)}>{paragraph}</p>
        ))}
      </div>
      <dl className="metrics">
        {bio.metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.value}</dt>
            <dd>{metric.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
