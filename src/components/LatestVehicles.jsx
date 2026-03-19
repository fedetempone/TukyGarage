import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { allVehicles, createSlug } from "../data/vehiclesData";
import "../styles/latestVehicles.css";

const LatestVehicles = () => {
  const latestData = useMemo(() => 
    allVehicles.filter(v => v.categories.includes("latest")).slice(0, 5), 
  []);

  const [activeIndex, setActiveIndex] = useState(2);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % latestData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + latestData.length) % latestData.length);
  };

  const getCardStyles = (index) => {
    const total = latestData.length;
    let diff = index - activeIndex;
    
    // carrusel circular
    if (diff > 2) diff -= total;
    if (diff < -2) diff += total;

    const absDiff = Math.abs(diff);

    // escalera de cards
    const scale = absDiff === 0 ? 1.15 : absDiff === 1 ? 0.85 : 0.65;
    const translateX = diff * (window.innerWidth <= 500 ? 140 : 220);
    const zIndex = 10 - absDiff;
    const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.7 : 0.3;
    const blur = absDiff === 0 ? 0 : absDiff === 1 ? 1 : 3;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
      filter: `blur(${blur}px)`,
    };
  };

  return (
    <section className="latest-vehicles-section">
      <div className="LatestVehiclesContainer">
        <h2 className="latest-vehicles-title">Últimos ingresos</h2>

        <div className="carousel-wrapper-stepper">
          <button className="nav-arrow left-arrow" onClick={prevSlide}>
            <span className="arrow-icon">‹</span>
          </button>

          <div className="stepper-viewport">
            {latestData.map((vehicle, index) => {
              const vehicleSlug = createSlug(vehicle.brand, vehicle.model);
              const isCenter = index === activeIndex;

              return (
                <Link
                  to={`/vehiculos/${vehicleSlug}`}
                  key={vehicle.id}
                  className={`stepper-card ${isCenter ? "active" : ""}`}
                  style={getCardStyles(index)}
                >
                  <div className="img-container">
                    <img src={vehicle.image} alt={vehicle.brand} className="latest-vehicle-img" />
                    <div className="card-overlay"><span>Ver Detalle</span></div>
                  </div>
                  <div className="latest-vehicle-info">
                    <p className="vehicle-name">{vehicle.brand} {vehicle.model}</p>
                    <p className="vehicle-price">$ {vehicle.price.toLocaleString("es-AR")}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <button className="nav-arrow right-arrow" onClick={nextSlide}>
            <span className="arrow-icon">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestVehicles;