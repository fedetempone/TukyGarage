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
          Nuestros servicios
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

      {/* --- DIVISOR --- */}
      <div className="v-divider-glow">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200,120H0V0C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4,86.53,35.82,144.6,53.84,209.8,48.6,86.53-7,172.46-45.71,248.8-84.81V120Z" fill="#000000"></path>

          {/*  luz naranja  */}
          <path d="M0,0C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4,86.53,35.82,144.6,53.84,209.8,48.6,86.53-7,172.46-45.71,248.8-84.81"
            fill="none"
            stroke="#ff4e00"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ filter: "blur(2.5px)" }}></path>

          {/* luz blanca */}
          <path d="M0,0C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4,86.53,35.82,144.6,53.84,209.8,48.6,86.53-7,172.46-45.71,248.8-84.81"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.8"></path>
        </svg>
      </div>
    </section>
  );
};

export default OurServices;