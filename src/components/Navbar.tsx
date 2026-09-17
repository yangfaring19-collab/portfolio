import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        HK
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects/vision">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;