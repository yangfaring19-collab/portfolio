import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vision from "./pages/Vision";
import About from "./pages/About";

function App() {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = - (event.clientX / window.innerWidth - 0.5) * 2;
      const y = - (event.clientY / window.innerHeight - 0.5) * 2;

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${x}`,
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${y}`,
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-background"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/vision" element={<Vision />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;