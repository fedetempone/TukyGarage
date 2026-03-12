import "../styles/howWeWork.css";
import { Car as LucideCar, Wrench as LucideWrench, Paintbrush as LucidePaintbrush } from "lucide-react";

const workItems = [
  {
    icon: <LucideCar size={64} />,
    title: "Restauración",
    description:
      "Restauramos vehículos aplicando los más altos estándares de cuidado y detailing.",
  },
  {
    icon: <LucideWrench size={64} />,
    title: "Mantenimiento",
    description:
      "Revisamos y mantenemos cada vehículo para que llegue en perfectas condiciones.",
  },
  {
    icon: <LucidePaintbrush size={64} />,
    title: "Detailing",
    description:
      "Acabados de alta calidad para que tu auto luzca impecable y listo para la venta.",
  },
];

const HowWeWork = () => {
  return (
    <section className="how-we-work-section">
      <div className="how-we-work-container">
        <h2>Cómo Trabajamos</h2>
        <div className="subheading-decoration"></div>
        <div className="how-we-work-grid">
          {workItems.map((item, index) => (
            <div key={index} className="how-we-work-card">
              <div className="how-we-work-icon">{item.icon}</div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;