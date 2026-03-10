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
  return (
    <section className="ourservices-section">
      <div className="ourservices-container">
        <h2 className="ourservices-title">Nuestros Servicios</h2>
        <div className="ourservices-decoration"></div>

        <div className="ourservices-grid">
          {services.map((service, index) => (
            <div key={index} className="ourservices-card">
              <div className="ourservices-icon">{service.icon}</div>
              <h3 className="ourservices-name">{service.title}</h3>
              <p className="ourservices-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;