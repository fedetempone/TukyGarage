import React, { useEffect, useState } from "react";
import "../styles/whyChooseUs.css";
import { Star, UserCheck, ShieldCheck, Settings } from "lucide-react";

const reasons = [
  {
    icon: <Star size={48} />,
    title: "Experiencia Comprobada",
    description: "Más de 10 años restaurando y cuidando vehículos con resultados profesionales.",
  },
  {
    icon: <Settings size={48} />,
    title: "Soluciones Personalizadas",
    description: "Adaptamos cada servicio a las necesidades de tu vehículo y presupuesto.",
  },
  {
    icon: <ShieldCheck size={48} />,
    title: "Transparencia Garantizada",
    description: "Presupuestos claros y seguimiento constante de cada trabajo realizado.",
  },
  {
    icon: <UserCheck size={48} />,
    title: "Atención Cercana",
    description: "Nuestro equipo te acompaña en cada paso, asegurando tu satisfacción total.",
  },
];

const WhyChooseUs = () => {
  const [visible, setVisible] = useState([]);

  // efecto fade-in al scroll
  useEffect(() => {
    const handleScroll = () => {
      const newVisible = reasons.map((_, i) => {
        const el = document.getElementById(`reason-${i}`);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight - 50; // entra en pantalla
      });
      setVisible(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="whychooseus-section">
      <div className="whychooseus-container">
        <h2 className="whychooseus-title">Por Qué Elegirnos</h2>
        <div className="whychooseus-grid">
          {reasons.map((reason, i) => (
            <div
              id={`reason-${i}`}
              key={i}
              className={`whychooseus-card ${visible[i] ? "visible" : ""}`}
            >
              <div className="whychooseus-icon">{reason.icon}</div>
              <h3 className="whychooseus-name">{reason.title}</h3>
              <p className="whychooseus-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;