import { useEffect, useState } from "react";
import "../styles/hero.css";

const Hero = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className={`hero-text ${animateText ? "animate" : ""}`}>
          <h1>
            Pasión por los autos <br /> excelencia en cada detalle.
          </h1>
          <div className="hero-divider"></div>
          <p>
            Venta de vehiculos y detailing profesional: <br />
            Elegimos tu proximo auto y lo mantenemos como nuevo. Calidad y
            brillo en un solo lugar.
          </p>
          <button className="hero-btn">PIDA UN TURNO CON NOSOTROS</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
