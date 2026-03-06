import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Del garage al brillo: <br /> comprá, vendé, cuidá tu auto</h1>
          <div className="hero-divider"></div>
          <p>
            Venta de vehículos y detailing profesional: 
            <br />
            Elegimos tu próximo auto y lo
            mantenemos como nuevo. Calidad y brillo en un solo lugar.
          </p>
          <button className="hero-btn">PIDA UN TURNO CON NOSOTROS</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;