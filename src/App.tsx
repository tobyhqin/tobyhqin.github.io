import { CharacterStage } from './components/CharacterStage'
import { footerLine } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'

const SECTION_IDS = ['hero', 'about', 'experience', 'work', 'contact'] as const

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects & Papers' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const activeSection = useActiveSection(SECTION_IDS)
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
      <CharacterStage activeSection={activeSection} />
      <footer className="site-footer">
        <p>{footerLine}</p>
      </footer>
    </>
  )
}

export default App
