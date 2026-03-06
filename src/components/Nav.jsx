import { useState, useEffect } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "auto";
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-content">

        {/* Logo */}
        <div className="logo-link">
          <a href="#home">
            <h1 className="logo-text">TukyGarage</h1>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#stock">Stock</a></li>
          <li><a href="#cotiza">Cotizá</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* CTA desktop */}
        <div className="cta-desktop">
          <a href="#cotiza">
            <button className="cta-button">Quiero vender</button>
          </a>
        </div>

        {/* Hamburger mobile */}
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#stock" onClick={closeMenu}>Stock</a></li>
          <li><a href="#cotiza" onClick={closeMenu}>Cotizá</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          <li>
            <a href="#cotiza" onClick={closeMenu}>
              <button className="cta-button">Quiero vender</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;