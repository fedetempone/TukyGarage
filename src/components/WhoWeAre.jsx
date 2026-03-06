import React, { useEffect, useState } from "react";
import "../styles/whoWeAre.css";

const WhoWeAre = () => {
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    // Giro inicial 
    setRotate(true);
    const initialTimeout = setTimeout(() => setRotate(false), 8000); // duración del giro

    // Intervalo para giros 
    const interval = setInterval(() => {
      setRotate(true);
      setTimeout(() => setRotate(false), 8000);
    }, 10000);

    // Limpieza de timers
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="who-we-are-section">
      <div className="who-we-are-container">
        {/* Imagen circular */}
        <div className="who-we-are-img-wrapper">
          <img
            src="/img/whoWeAre.jpg"
            alt="Quienes Somos"
            className={`who-we-are-img ${rotate ? "rotate" : ""}`}
          />
        </div>

        {/* Texto */}
        <div className="who-we-are-text">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos Matías y Ema, y en Tuky Garage transformamos la compra y venta
            de autos en una experiencia de confianza. No solo movemos stock:
            seleccionamos cada unidad bajo estándares rigurosos.
          </p>
          <p>
            Nos especializamos en compra, venta, permuta y consignación, con un
            diferencial clave: el acondicionamiento preventa. Cada vehículo pasa
            por nuestro sector de detailing para que te lo lleves impecable y
            listo para disfrutar.
          </p>
          <p>
            Transparencia, calidad y fierros seleccionados. Tu próximo auto está
            acá.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;