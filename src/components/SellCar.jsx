import { useEffect, useState, useRef } from "react";
import "../styles/sellCar.css";

const SellCar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="sellCarSectionId" className="sell-car-section" ref={sectionRef}>
      <div className="sell-car-banner">
        <div className="overlay"></div>
        <div className={`sell-car-text ${isVisible ? "animate-in" : "animate-out"}`}>
          <h2>¿Querés Vender tu Auto?</h2>
          <p>🚗 Cotiza tu vehículo y contacta con un asesor para coordinar la venta en minutos.</p>
          
          {/* boton con el auto */}
          <a
            href="https://wa.me/5491123456789?text=Hola%20Me%20gustaria%20cotizar%20mi%20vehiculo"
            target="_blank"
            rel="noopener noreferrer"
            className="sell-car-cta-wrapper"
          >
            <button className="sell-car-btn">
              <span className="button-text">Vender mi Auto</span>
              <img src="/img/carButton.png" alt="car" className="button-car" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SellCar;