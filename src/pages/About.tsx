import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <main>
        <section className="section">
          <p className="eyebrow">ABOUT</p>

          <h1>About Me</h1>

          <p className="section-description">
            Software developer interested in developer tools,
            AI-assisted development, and software architecture.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;