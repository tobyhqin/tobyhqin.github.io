import { InlineScene } from '../components/SceneMedia'
import { links, scenes, site } from '../data/content'

export function Contact() {
  const scene = scenes.find((item) => item.id === 'contact')!

  return (
    <section id="contact" className="journey-chapter contact" data-scene="contact" aria-labelledby="contact-heading">
      <InlineScene id="contact" />
      <header className="chapter-heading">
        <p className="stage-number">{scene.number}</p>
        <h2 id="contact-heading">{site.contactTitle}</h2>
      </header>
      <p className="contact-intro">{site.contactIntro}</p>
      <ul className="contact-links">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="colophon">© {new Date().getFullYear()} {site.name}</p>
    </section>
  )
}
