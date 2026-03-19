import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../styles/nav.css";

const Nav = () => {
  const { pathname } = useLocation(); 
  const isHome = pathname === "/"; 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [bgNav, setBgNav] = useState(isHome ? "transparent" : "#000");

  const lastScrollY = useRef(0);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  useEffect(() => {
    closeMenu();
    setBgNav(isHome ? "transparent" : "#000");
    setShowNav(true);
  }, [pathname, isHome]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (isHome) {
        setBgNav(currentScroll > 50 ? "#000" : "transparent");
      } else {
        setBgNav("#000");
      }

      if (isHome) {
        if (currentScroll <= 10) {
          setShowNav(true);
        } else if (currentScroll < lastScrollY.current) {
          setShowNav(true);
          timeoutRef.current = setTimeout(() => {
            setShowNav(false);
          }, 500); 
        } else {
          setShowNav(false);
        }
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isHome]); 

  return (
    <nav className={`navbar ${showNav ? "show" : "hide"}`} style={{ backgroundColor: bgNav }}>
      <div className="navbar-content-wrapper">

        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src="/img/logoFullTransparent.png" alt="Tuky Garage Logo" />
        </Link>

        <ul className="nav-links-wrapper">
          <li><Link to="/">Home</Link></li>
          <li>
            {isHome ? (
              <a href="#AllVehiclesSectionId">Stock</a>
            ) : (
              <Link to="/vehiculos">Stock</Link>
            )}
          </li>
          <li>
            <a
              href="https://wa.me/5491132808216?text=Hola! Vengo del Sitio Web, quiero cotizar mi vehículo!!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizá
            </a>
          </li>
          <li>
            {isHome ? (
              <a href="#FooterSectionId">Contacto</a>
            ) : (
              <Link to="/" onClick={() => {
                setTimeout(() => {
                  document.getElementById('FooterSectionId')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}>Contacto</Link>
            )}
          </li>
        </ul>

        <div className="cta-desktop">
          <a 
            href="https://wa.me/5491132808216?text=Hola!%20Vengo%20del%20Sitio%20Web,%20quiero%20vender%20mi%20vehiculo!!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-button">
              <span className="button-text">Quiero vender</span>
              <img src="https://i.imgur.com/X9P8OyS.png" alt="car" className="button-car" />
            </button>
          </a>
        </div>

        <div className={`hamburger-wrapper ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
      </div>

      <div className={`mobile-menu-wrapper ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/vehiculos" onClick={closeMenu}>Stock</Link></li>
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
          <li>
            {isHome ? (
              <a href="#FooterSectionId" onClick={closeMenu}>Contacto</a>
            ) : (
              <Link to="/" onClick={() => {
                closeMenu();
                setTimeout(() => {
                  document.getElementById('FooterSectionId')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}>Contacto</Link>
            )}
          </li>
          <li>
            <a
              href="https://wa.me/5491132808216?text=Hola!%20Vengo%20del%20Sitio%20Web,%20quiero%20vender%20mi%20vehiculo!!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
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