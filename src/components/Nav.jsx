import { useState, useEffect, useRef } from "react";
import "../styles/nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [bgNav, setBgNav] = useState("transparent");

  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

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

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // manejo del fondo
      if (currentScroll > 50) {
        setBgNav("#000");
      } else {
        setBgNav("transparent");
      }

      // logica de mostrar/ocultar
      if (currentScroll <= 10) {
        setShowNav(true);
      } else if (currentScroll < lastScrollY.current) {
        setShowNav(true);
        timeoutRef.current = setTimeout(() => {
          setShowNav(false);
        }, 1000);
      } else {
        setShowNav(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
          <li><a href="#AllVehiclesSectionId">Stock</a></li>
          <li>
            <a
              href="https://wa.me/5491132808216?text=Hola! Vengo del Sitio Web, quiero cotizar mi vehículo!!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Cotizá
            </a>
          </li>
          <li><a href="#FooterSectionId">Contacto</a></li>
        </ul>

        {/* boton principal con efecto auto */}
        <div className="cta-desktop">
          <a href="https://wa.me/5491132808216?text=Hola!%20Vengo%20del%20Sitio%20Web,%20quiero%20vender%20mi%20vehiculo!!">
            <button className="cta-button">
              <span className="button-text">Quiero vender</span>
              <img src="https://i.imgur.com/X9P8OyS.png" alt="car" className="button-car" />
            </button>
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
          <li><a href="#AllVehiclesSectionId" onClick={closeMenu}>Stock</a></li>
          <li>
            <a
              href="https://wa.me/5491132808216?text=Hola! Vengo del Sitio Web, quiero cotizar mi vehículo!! "
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Cotizá
            </a>
          </li>
          <li><a href="#FooterSectionId" onClick={closeMenu}>Contacto</a></li>
          <li>
            <a
              href="https://wa.me/5491132808216?text=Hola!%20Vengo%20del%20Sitio%20Web,%20quiero%20vender%20mi%20vehiculo!!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              style={{ textDecoration: 'none' }}
            >
              <button className="cta-nav-button">
                <span className="button-text">Quiero vender</span>
                <img src="/img/carButton.png" alt="car" className="button-car" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;