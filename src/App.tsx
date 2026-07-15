const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects & Papers' },
  { id: 'contact', label: 'Contact' },
]

function App() {
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
        <section id="hero" className="section" aria-labelledby="hero-heading">
          {/* copy lands in src/data/content.ts (Phase 2) */}
          <h1 id="hero-heading">TODO(toby): name</h1>
          <p className="placeholder-note">TODO(toby): tagline — Phase 2</p>
        </section>
        <section id="about" className="section" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <div className="panel">
            <p className="placeholder-note">Bio panel — Phase 2/3</p>
          </div>
        </section>
        <section id="experience" className="section" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <div className="panel">
            <p className="placeholder-note">Timeline — Phase 3</p>
          </div>
        </section>
        <section id="work" className="section" aria-labelledby="work-heading">
          <h2 id="work-heading">Projects &amp; Papers</h2>
          <div className="panel">
            <p className="placeholder-note">Cards — Phase 3</p>
          </div>
        </section>
        <section id="contact" className="section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <div className="panel">
            <p className="placeholder-note">Links — Phase 2/3</p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>TODO(toby): footer sign-off</p>
      </footer>
    </>
  )
}

export default App
