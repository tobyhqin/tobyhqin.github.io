import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects & Papers' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  useRevealOnScroll()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Sections">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  )
}

export default App
