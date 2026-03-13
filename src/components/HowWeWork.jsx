import { useEffect, useState, useRef } from "react";
import "../styles/howWeWork.css";
import { Car, Wrench, Paintbrush } from "lucide-react";

const workItems = [
  {
    icon: <Car size={55} />,
    title: "Restauración",
    description: "Restauramos vehículos aplicando los más altos estándares de cuidado y detailing.",
  },
  {
    icon: <Wrench size={55} />,
    title: "Mantenimiento",
    description: "Revisamos y mantenemos cada vehículo para que llegue en perfectas condiciones.",
  },
  {
    icon: <Paintbrush size={55} />,
    title: "Detailing",
    description: "Acabados de alta calidad para que tu auto luzca impecable y listo para la venta.",
  },
];

const HowWeWork = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* efecto parallax y brillo en tiempo real */
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    requestAnimationFrame(() => {
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
      card.style.setProperty("--mx", `${(x / box.width) * 100}%`);
      card.style.setProperty("--my", `${(y / box.height) * 100}%`);
      card.style.setProperty("--o", "1");
    });
  };

  /* reset de posicion al salir */
  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--o", "0");
  };

  return (
    <section className="how-we-work-section" ref={sectionRef}>
      <div className="how-we-work-container">
        <h2 className={`section-title ${visible ? "animate-in" : ""}`}>
          Cómo Trabajamos
        </h2>
        <div className="how-we-work-grid">
          {workItems.map((item, index) => (
            <div
              key={index}
              className={`how-we-work-card ${visible ? "animate-in" : ""}`}
              style={{ "--delay": `${index * 0.15}s` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* reflejo de luz */}
              <div className="card-glare"></div>
              
              <div className="parallax-content">
                <div className="how-we-work-icon">{item.icon}</div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;