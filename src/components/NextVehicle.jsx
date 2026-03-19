import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom"; 
import { allVehicles, createSlug } from "../data/vehiclesData";
import "../styles/nextVehicle.css";

const NextVehicle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  // co neste filtro buscamos todos los autos que incluyan "next" en el array categorias
  const nextVehicles = allVehicles.filter(vehicle => 
    vehicle.categories.includes("next")
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="NextVehiculoSectionId" className="next-vehicle-section" ref={sectionRef}>
      <div className="next-vehicle-content">
        <h2 className={`next-vehicle-title ${isVisible ? "animate-in" : "animate-out"}`}>
          <span>Tu próximo vehículo</span>
        </h2>

        <div className="next-vehicle-grid">
          {nextVehicles.map((vehicle, index) => {
            const vehicleSlug = createSlug(vehicle.brand, vehicle.model); 

            return (
              <div
                key={vehicle.id}
                className={`next-vehicle-card ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
                style={{ "--index": index }}
              >
                <div className="next-vehicle-img-container">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    className="next-vehicle-img"
                  />
                  <div className="next-vehicle-badge">{vehicle.year}</div>
                </div>

                <div className="next-vehicle-info">
                  {/* marca y modelo */}
                  <h3>{vehicle.brand} {vehicle.model}</h3>
                  
                  <div className="next-vehicle-specs">
                    <span>{vehicle.km.toLocaleString()} Kms</span>
                    <div className="spec-divider"></div>
                    <span>{vehicle.transmission}</span>
                  </div>
                  
                  <Link 
                    to={`/vehiculos/${vehicleSlug}`} 
                    className="next-vehicle-btn"
                  >
                    Ver Detalle
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NextVehicle;