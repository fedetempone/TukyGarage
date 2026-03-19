import React, { useEffect, useState, useRef } from "react";
import "../styles/whyChooseUs.css";
import { Star, UserCheck, ShieldCheck, Settings } from "lucide-react";

const reasons = [
  {
    icon: <Star />,
    title: "Experiencia Comprobada",
    description: "Más de 10 años restaurando y cuidando vehículos con profesionales.",
  },
  {
    icon: <Settings />,
    title: "Soluciones Personalizadas",
    description: "Adaptamos cada servicio a las necesidades de tu vehículo y presupuesto.",
  },
  {
    icon: <ShieldCheck />,
    title: "Transparencia Garantizada",
    description: "Presupuestos claros y seguimiento constante de cada trabajo realizado.",
  },
  {
    icon: <UserCheck />,
    title: "Atención Cercana",
    description: "Nuestro equipo te acompaña en cada paso, asegurando tu satisfacción total.",
  },
];

const WhyChooseUs = () => {
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
    <section className="whychooseus-section" ref={sectionRef}>
      <div className="whychooseus-container">
        <h2 className={`whychooseus-title ${isVisible ? "animate-in" : "animate-out"}`}>
          <span>Por qué elegirnos</span>
        </h2>

        <div className="whychooseus-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`whychooseus-card ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
              style={{ "--index": index }}
            >
              <div className="whychooseus-icon">{reason.icon}</div>
              <h5 className="whychooseus-name">{reason.title}</h5>
              <p className="whychooseus-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;