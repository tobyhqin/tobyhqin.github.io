import { SceneStack } from './components/SceneMedia'
import { scenes, site } from './data/content'
import { useActiveScene } from './hooks/useActiveScene'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Work } from './sections/Work'

const JOURNEY_SCENES = scenes.filter((scene) => scene.id !== 'hero')
const JOURNEY_SCENE_IDS = JOURNEY_SCENES.map((scene) => scene.id)

function App() {
  const activeScene = useActiveScene(JOURNEY_SCENE_IDS)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="wordmark" href="#hero">
            {site.name}
          </a>
          <a className="nav-contact" href="#contact">
            {site.contactAction} <span aria-hidden="true">↘</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <Hero />
        <div className="journey-shell">
          <aside className="journey-media" aria-label="Visual journey">
            <SceneStack activeId={activeScene} items={JOURNEY_SCENES} />
          </aside>
          <div className="journey-copy">
            <About />
            <Experience />
            <Work />
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
