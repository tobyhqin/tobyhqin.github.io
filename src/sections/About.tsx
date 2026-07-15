import { bio } from '../data/content'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="reveal">
        About
      </h2>
      <div className="panel reveal">
        {bio.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
