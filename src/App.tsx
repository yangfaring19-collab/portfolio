import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vision from "./pages/Vision";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/vision" element={<Vision />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;