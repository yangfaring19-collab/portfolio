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
            코딩하는 수학 강사입니다. 
            <br />
            소프트웨어를 더 잘 이해할 수 있도록 돕는 도구를 개발하는 데 관심이 있습니다.
          </p>
        </section>
      </main>
    </>
  );
}

export default About;