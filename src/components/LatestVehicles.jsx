import React, { useRef } from "react";
import "../styles/latestVehicles.css";

const latestVehiclesData = [
  { id: 1, image: "https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg", brand: "Toyota Corolla", model: "2.0 SEG CVT", price: 25460000 },
  { id: 2, image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg", brand: "Honda Civic", model: "1.5 TURBO EXT", price: 22950000 },
  { id: 3, image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_e57174b319c14750a9b772448bba04a0.jpg", brand: "Ford Focus", model: "2.0 TITANIUM", price: 18010000 },
  { id: 4, image: "https://www.carsmagazine.com.ar/wp-content/uploads/2012/02/peugeot-308-argentina.jpg", brand: "Peugeot 308", model: "1.6 FELINE", price: 15910000 },
  { id: 5, image: "https://www.opencars.com.ar/wp-content/uploads/2020/11/7.jpg", brand: "VW Nivus", model: "1.0 TSI COMFORT", price: 21500000 },
];

const LatestVehicles = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300; // Ajusta según el ancho de tu card
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="latestVehiclesSectionId" className="latest-vehicles-section">
      <div className="container">
        <h2 className="latest-vehicles-title">Ultimos Ingresos</h2>
        
        <div className="carousel-wrapper">
          {/* Flecha Izquierda */}
          <button className="nav-arrow left-arrow" onClick={() => scroll("left")}>
            <span className="arrow-icon">‹</span>
          </button>

          {/* Contenedor del Scroll */}
          <div className="latest-vehicles-carousel" ref={scrollRef}>
            {latestVehiclesData.map((vehicle) => (
              <div key={vehicle.id} className="latest-vehicle-card">
                <div className="img-container">
                  <img src={vehicle.image} alt={vehicle.brand} className="latest-vehicle-img" />
                </div>
                <div className="latest-vehicle-info">
                  <p className="vehicle-name">{vehicle.brand} {vehicle.model}</p>
                  <p className="vehicle-price">$ {vehicle.price.toLocaleString("es-AR")}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Flecha Derecha */}
          <button className="nav-arrow right-arrow" onClick={() => scroll("right")}>
            <span className="arrow-icon">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestVehicles;