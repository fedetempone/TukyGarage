import { useEffect, useState, useRef } from "react";
import "../styles/ourServices.css";
import { Settings, FileText, Headphones, Paintbrush } from "lucide-react";

const services = [
  {
    icon: <Settings size={56} />,
    title: "Mecánica & Tuercas",
    description: "Servicios de mecánica preventiva y correctiva, cuidando cada detalle de tu vehículo.",
  },
  {
    icon: <FileText size={56} />,
    title: "Cotizaciones",
    description: "Recibí presupuestos claros y rápidos, sin sorpresas, para cada trabajo o vehículo.",
  },
  {
    icon: <Headphones size={56} />,
    title: "Atención al Cliente",
    description: "Te acompañamos en todo el proceso con soporte ágil y cercano.",
  },
  {
    icon: <Paintbrush size={56} />,
    title: "Detailing",
    description: "Acabados premium para que tu auto luzca impecable y brillante.",
  },
];

const OurServices = () => {
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

    // observer para la entrada triunfal
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="ourservices-section" ref={sectionRef}>
      <div className="ourservices-container">
        <h2 className={`ourservices-title ${isVisible ? "animate-in" : "animate-out"}`}>
          Nuestros Servicios
        </h2>

        <div className="ourservices-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`ourservices-card ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
              style={{ "--index": index }}
            >
              <div className="ourservices-icon">{service.icon}</div>
              <h5 className="ourservices-name">{service.title}</h5>
              <p className="ourservices-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;