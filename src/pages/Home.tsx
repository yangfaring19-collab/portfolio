import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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
            사용자가 소프트웨어를 더 잘 이해할 수 있도록 돕는 도구를 개발합니다.
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

          <h2><Link to="projects/vision">
            VISION
          </Link></h2>

          <p className="section-description">
            2026.07 - 2026.09
            <br />
            [position] Frontend Developer
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;