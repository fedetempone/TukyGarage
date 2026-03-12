import { useState, useEffect } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgNav, setBgNav] = useState("transparent"); // background navbar

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // bloquear scroll cuando menu mobile abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  // control scroll y background
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // primera vez scroll -> fondo negro
      if (currentScroll > 50 && bgNav === "transparent") {
        setBgNav("#000");
      }

      // scroll down -> hide nav
      if (currentScroll > lastScrollY && currentScroll > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      // si llegamos al top -> background transparente
      if (currentScroll <= 10) {
        setBgNav("transparent");
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, bgNav]);

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`} style={{ backgroundColor: bgNav }}>
      <div className="navbar-content-wrapper">

        {/* logo */}
        <div className="logo-container">
          <img 
            src="/img/logoFullTransparent.png" 
            alt="Tuky Garage Logo" 
          />
        </div>

        {/* links desktop */}
        <ul className="nav-links-wrapper">
          <li><a href="#home">Home</a></li>
          <li><a href="#stock">Stock</a></li>
          <li><a href="#cotiza">Cotizá</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>

        {/* boton principal cta */}
        <div className="cta-desktop">
          <a href="#cotiza">
            <button className="cta-button">Quiero vender</button>
          </a>
        </div>

        {/* hamburguesa mobile */}
        <div 
          className={`hamburger-wrapper ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* menu mobile */}
      <div className={`mobile-menu-wrapper ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#stock" onClick={closeMenu}>Stock</a></li>
          <li><a href="#cotiza" onClick={closeMenu}>Cotizá</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
          <li>
            <a href="#cotiza" onClick={closeMenu}>
              <button className="cta-nav-button">Quiero vender</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;