import { SceneChapter } from '../components/SceneChapter'
import { links, ui } from '../data/content'

export function Contact() {
  return (
    <SceneChapter id="contact" align="left">
      <div className="chapter-lead">
        <h2 id="contact-heading" className="chapter-title">
          Contact
        </h2>
      </div>
      <div className="chapter-body">
        <div className="panel reveal">
          <p>{ui.contactIntro}</p>
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
      </div>
    </SceneChapter>
  )
}
