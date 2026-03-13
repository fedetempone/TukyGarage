import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/allVehicles.css";
import { Calendar, Gauge, ChevronRight } from "lucide-react";

import car1 from "/img/car1.avif";
import car2 from "/img/car2.avif";
import car3 from "/img/car3.avif";
import car4 from "/img/car4.avif";

const vehicles = [
  { id: 1, name: "Peugeot 308", year: 2019, km: "65.000 km", img: car1 },
  { id: 2, name: "Toyota Corolla", year: 2021, km: "32.000 km", img: car2 },
  { id: 3, name: "Ford Mustang", year: 2018, km: "41.000 km", img: car3 },
  { id: 4, name: "Honda Civic", year: 2020, km: "27.000 km", img: car4 },
  { id: 5, name: "BMW M3", year: 2017, km: "59.000 km", img: car1 },
  { id: 6, name: "Audi A4", year: 2022, km: "18.000 km", img: car2 },
];

const AllVehicles = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

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

  const createSlug = (name) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="allvehicles-section" ref={sectionRef}>
      <div className="allvehicles-container">
        <h2 className={`allvehicles-title ${isVisible ? "animate-in" : "animate-out"}`}>
          Nuestro stock
        </h2>

        <div className="allvehicles-grid">
          {vehicles.map((vehicle, index) => (
            <Link 
              to={`/vehiculos/${createSlug(vehicle.name)}`} 
              key={vehicle.id} 
              className={`allvehicles-card ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
              style={{ "--index": index }}
            >
              <div className="allvehicles-img-wrapper">
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="allvehicles-image"
                />
                <div className="allvehicles-overlay">
                  <span className="allvehicles-view-more">Ver Detalle</span>
                </div>
              </div>

              <div className="allvehicles-cardinfo">
                <div className="allvehicles-header-card">
                  <h3 className="allvehicles-name">{vehicle.name}</h3>
                  <ChevronRight className="allvehicles-arrow" size={20} />
                </div>
                
                <div className="allvehicles-specs-row">
                  <div className="allvehicles-spec">
                    <Calendar className="allvehicles-icon" size={18}/>
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="allvehicles-spec">
                    <Gauge className="allvehicles-icon" size={18}/>
                    <span>{vehicle.km}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* boton epico acoplado */}
        <div className={`allvehicles-buttonwrapper ${isVisible ? "animate-in" : "animate-out"}`}>
          <Link to="/stock" className="allvehicles-cta-link">
            <button className="allvehicles-button">
              <span className="button-text">Ver todos los vehículos</span>
              <img src="/img/carButton.png" alt="car" className="button-car" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllVehicles;