import { bio, links } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="reveal">
        Contact
      </h2>
      <div className="panel reveal">
        <p>{bio.contactIntro}</p>
        <ul className="contact-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
