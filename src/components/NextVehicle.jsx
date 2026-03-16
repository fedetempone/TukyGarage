import { useEffect, useState, useRef } from "react";
import "../styles/nextVehicle.css";

const vehiclesData = [
  {
    id: 1,
    image: "https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg",
    model: "Toyota Corolla",
    year: 2020,
    km: 54000
  },
  {
    id: 2,
    image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg",
    model: "Honda Civic",
    year: 2019,
    km: 67000
  },
  {
    id: 3,
    image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_e57174b319c14750a9b772448bba04a0.jpg",
    model: "Ford Focus",
    year: 2018,
    km: 72000
  },
  {
    id: 4,
    image: "https://www.carsmagazine.com.ar/wp-content/uploads/2012/02/peugeot-308-argentina.jpg",
    model: "Peugeot 308",
    year: 2021,
    km: 45000
  }
];

const NextVehicle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // detector de direccion de scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // intersection observer para las animaciones
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
          {vehiclesData.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`next-vehicle-card ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
              style={{ "--index": index }}
            >
              <div className="next-vehicle-img-container">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="next-vehicle-img"
                />
                <div className="next-vehicle-badge">{vehicle.year}</div>
              </div>

              <div className="next-vehicle-info">
                <h3>{vehicle.model}</h3>
                <div className="next-vehicle-specs">
                  <span>{vehicle.km.toLocaleString()} Kms</span>
                  <div className="spec-divider"></div>
                  <span>Transmisión Manual</span>
                </div>
                <button className="next-vehicle-btn">Ver Detalle</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextVehicle;