import { InlineScene } from '../components/SceneMedia'
import { experience, scenes, site, supportingActivities } from '../data/content'

export function Experience() {
  const scene = scenes.find((item) => item.id === 'experience')!

  return (
    <section
      id="experience"
      className="journey-chapter experience"
      data-scene="experience"
      aria-labelledby="experience-heading"
    >
      <InlineScene id="experience" />
      <header className="chapter-heading">
        <p className="stage-number">{scene.number}</p>
        <h2 id="experience-heading">{site.experienceTitle}</h2>
      </header>
      <ol className="experience-list">
        {experience.map((item) => (
          <li key={item.org}>
            <div className="experience-meta">
              <p>{item.org}</p>
              <p>{item.grades}</p>
            </div>
            <h3>{item.role}</h3>
            <p>{item.summary}</p>
          </li>
        ))}
      </ol>
      <div className="supporting">
        <h3>{site.supportingTitle}</h3>
        <ul>
          {supportingActivities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
