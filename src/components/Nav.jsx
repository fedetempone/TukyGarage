import { useState, useEffect } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // bloquear scroll solo cuando menu mobile abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [isMenuOpen]);

  // control scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false); 
      } else {
        setShowNav(true); 
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`}>
      <div className="navbar-content">

        <div className="logo-link">
          <a href="#home">
            <h1 className="logo-text">TukyGarage</h1>
          </a>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#stock">Stock</a></li>
          <li><a href="#cotiza">Cotizá</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        <div className="cta-desktop">
          <a href="#cotiza">
            <button className="cta-button">Quiero vender</button>
          </a>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

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