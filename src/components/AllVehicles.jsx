import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Gauge, ChevronRight } from "lucide-react";
import { allVehicles, createSlug } from "../data/vehiclesData";
import "../styles/allVehicles.css";

const AllVehicles = ({ hideButton = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const [loadedImages, setLoadedImages] = useState({}); 
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  // filtro vehiculos de stock general
  const stockVehicles = allVehicles.filter(v => v.categories.includes("stock") || v.categories.includes("latest"));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className={`allvehicles-section ${hideButton ? "is-stock-page" : ""}`} ref={sectionRef}>
      <div className="allvehicles-container">
        <h2 className={`allvehicles-title ${isVisible ? "animate-in" : "animate-out"}`}>
          Nuestro stock
        </h2>

        <div className="allvehicles-grid">
          {stockVehicles.map((vehicle, index) => {
            const vehicleSlug = createSlug(vehicle.brand, vehicle.model);
            const isImgLoaded = loadedImages[vehicle.id];

            return (
              <Link
                to={`/vehiculos/${vehicleSlug}`}
                key={vehicle.id}
                className={`allvehicles-card ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
                style={{ "--index": index }}
              >
                <div className="allvehicles-img-wrapper">
                  {/* skeleton loader  */}
                  {!isImgLoaded && <div className="allvehicles-skeleton"></div>}
                  
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className={`allvehicles-image ${isImgLoaded ? "img-loaded" : "img-loading"}`}
                    onLoad={() => handleImageLoad(vehicle.id)}
                    loading="lazy"
                  />
                  <div className="allvehicles-overlay">
                    <span className="allvehicles-view-more">Ver Detalle</span>
                  </div>
                </div>

                <div className="allvehicles-cardinfo">
                  <div className="allvehicles-header-card">
                    <h3 className="allvehicles-name">
                      {vehicle.brand} {vehicle.model}
                    </h3>
                    <ChevronRight className="allvehicles-arrow" size={20} />
                  </div>

                  <p className="allvehicles-price">
                    $ {vehicle.price.toLocaleString("es-AR")}
                  </p>

                  <div className="allvehicles-specs-row">
                    <div className="allvehicles-spec">
                      <Calendar className="allvehicles-icon" size={18} />
                      <span>{vehicle.year}</span>
                    </div>
                    <div className="allvehicles-spec">
                      <Gauge className="allvehicles-icon" size={18} />
                      <span>{vehicle.km.toLocaleString("es-AR")} km</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {!hideButton && (
          <div className={`allvehicles-buttonwrapper ${isVisible ? "animate-in" : "animate-out"}`}>
            <Link to="/vehiculos" className="allvehicles-cta-link">
              <button className="allvehicles-button">
                <span className="button-text">Ver todos los Vehículos</span>
                <img src="/img/carButton.png" alt="car" className="button-car" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllVehicles;