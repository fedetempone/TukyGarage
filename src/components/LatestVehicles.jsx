import React, { useState, useEffect, useRef } from "react";
import "../styles/latestVehicles.css";

const latestVehiclesData = [
  { id: 1, image: "https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg", brand: "Toyota Corolla", model: "2.0 SEG CVT", price: 25460000 },
  { id: 2, image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg", brand: "Honda Civic", model: "1.5 TURBO EXT", price: 22950000 },
  { id: 3, image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_e57174b319c14750a9b772448bba04a0.jpg", brand: "Ford Focus", model: "2.0 TITANIUM", price: 18010000 },
  { id: 4, image: "https://www.carsmagazine.com.ar/wp-content/uploads/2012/02/peugeot-308-argentina.jpg", brand: "Peugeot 308", model: "1.6 FELINE", price: 15910000 },
  { id: 5, image: "https://www.opencars.com.ar/wp-content/uploads/2020/11/7.jpg", brand: "VW Nivus", model: "1.0 TSI COMFORT", price: 21500000 },
];

const LatestVehicles = () => {
  /* clones para loop infinito */
  const extendedData = [
    latestVehiclesData[latestVehiclesData.length - 1],
    ...latestVehiclesData,
    latestVehiclesData[0]
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const lock = useRef(false);
  
  /* refs para gestos mobile */
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const nextSlide = () => {
    if (lock.current) return;
    lock.current = true;
    setActiveIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (lock.current) return;
    lock.current = true;
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex === extendedData.length - 1) {
      setIsTransitioning(false);
      setActiveIndex(1);
    }
    if (activeIndex === 0) {
      setIsTransitioning(false);
      setActiveIndex(latestVehiclesData.length);
    }
    lock.current = false;
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
    }
  }, [isTransitioning]);

  /* funciones para swipe */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  /* calculo de ancho segun pantalla */
  const cardWidth = window.innerWidth <= 500 ? 290 : 330;

  return (
    <section id="latestVehiclesSectionId" className="latest-vehicles-section">
      <div className="container">
        <h2 className="latest-vehicles-title">Ultimos Ingresos</h2>

        <div className="carousel-wrapper">
          <button className="nav-arrow left-arrow" onClick={prevSlide}>
            <span className="arrow-icon">‹</span>
          </button>

          <div 
            className="latest-vehicles-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translateX(calc(-${activeIndex * cardWidth}px + 50% - ${cardWidth / 2}px))`,
                transition: isTransitioning ? "transform 0.6s cubic-bezier(0.25,1,0.5,1)" : "none"
              }}
            >
              {extendedData.map((vehicle, index) => {
                const realIndex = index === 0 ? latestVehiclesData.length : index === extendedData.length - 1 ? 1 : index;
                const isCenter = realIndex === activeIndex;

                return (
                  <div
                    key={`${vehicle.id}-${index}`}
                    className={`latest-vehicle-card ${isCenter ? "card-active" : ""}`}
                  >
                    <div className="img-container">
                      <img src={vehicle.image} alt={vehicle.brand} className="latest-vehicle-img" />
                    </div>
                    <div className="latest-vehicle-info">
                      <p className="vehicle-name">{vehicle.brand} {vehicle.model}</p>
                      <p className="vehicle-price">$ {vehicle.price.toLocaleString("es-AR")}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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