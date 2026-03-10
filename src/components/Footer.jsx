import "../styles/footer.css";
import logo from "/img/logoFullTransparent.png"; 
import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  TiktokLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-overlay">

        <div className="footer-container">

          {/* columna 1: logo */}
          <div className="footer-col footer-logo-col">
            <img src={logo} alt="Tuky Garage Logo" />
          </div>

          {/* columna 2: contacto + redes */}
          <div className="footer-col footer-contact-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="#contact">📞 +54 123 456 789</a></li>
            </ul>

            <h4>Ubicación</h4>
                        <ul>
              <li><a href="#location">📍 Av. Siempre Viva 742, Springield</a></li>
            </ul>

            <h4>Redes</h4>
            <ul className="footer-socials">
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                  <TiktokLogo size={22} weight="bold" />
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <InstagramLogo size={22} weight="bold" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FacebookLogo size={22} weight="bold" />
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/123456789" target="_blank" rel="noreferrer">
                  <WhatsappLogo size={22} weight="bold" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* columna 3: secciones */}
          <div className="footer-col footer-links-col">
            <h4>Secciones & Políticas</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#whoWeAreSectionId">Quiénes Somos</a></li>
              <li><a href="#HowWeWorkSection">Cómo Trabajamos</a></li>
              <li><a href="#NextVehiculoSectionId">Próximo Vehículo</a></li>
              <li><a href="#sellCarSectionId">Compra/Venta</a></li>
              <li><a href="#latestVehiclesSectionId">Últimos Vehículos</a></li>
              <li><a href="#AllVehiclesSectionId">Ver Todos</a></li>
              <li><a href="#OurServicesSectionId">Servicios</a></li>
              <li><a href="#LastWorksSectionId">Últimos Trabajos</a></li>
              <li><a href="#WhyChooseUsSectionId">Por Qué Elegirnos</a></li>
              <li><a href="#privacy">Políticas de Privacidad</a></li>
            </ul>
          </div>

        </div>

        {/* copyright centrado */}
        <div className="footer-bottom">
          <p>© Created by FedeTempone</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;