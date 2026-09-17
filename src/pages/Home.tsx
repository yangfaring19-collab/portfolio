import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <p className="eyebrow">SOFTWARE DEVELOPER</p>

          <h1>
            Building tools that
            <br />
            help developers
            <br />
            <span>understand software.</span>
          </h1>

          <p className="hero-description">
            I build developer tools and AI-powered software
            that help developers understand complex systems
            and work more efficiently.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button primary">
              View Projects
            </a>

            <a
              href="https://github.com/yangfaring19-collab/Vision-Frontend.git"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">FEATURED PROJECT</p>

          <h2>VISION</h2>

          <p className="section-description">
            Enterprise AI Code Assistant
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;