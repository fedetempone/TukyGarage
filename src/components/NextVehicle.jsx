import React, { useEffect, useState } from "react";
import "../styles/nextVehicle.css";

// simulamos datos provisorios
const vehiclesData = [
  {
    id: 1,
    image: "https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg", // Corolla real
    model: "Toyota Corolla",
    year: 2020,
    km: 54000
  },
  {
    id: 2,
    image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg", // Sedan real
    model: "Honda Civic",
    year: 2019,
    km: 67000
  },
  {
    id: 3,
    image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_e57174b319c14750a9b772448bba04a0.jpg", // Foto real de auto
    model: "Ford Focus",
    year: 2018,
    km: 72000
  },
  {
    id: 4,
    image: "https://www.carsmagazine.com.ar/wp-content/uploads/2012/02/peugeot-308-argentina.jpg", // Foto ciudad real
    model: "Peugeot 308",
    year: 2021,
    km: 45000
  }
];

const NextVehicle = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("next-vehicle-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".next-vehicle-card");
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <section id="NextVehiculoSectionId" className="next-vehicle-section">
      <div className="next-vehicle-content">
        <h2 className="next-vehicle-title">Tu Próximo Vehículo</h2>
        <div className="next-vehicle-grid">
          {vehiclesData.map(vehicle => (
            <div key={vehicle.id} className="next-vehicle-card">
              <img
                src={vehicle.image}
                alt={vehicle.model}
                className="next-vehicle-img"
              />
              <div className="next-vehicle-info">
                <h3>{vehicle.model}</h3>
                <p>Año: {vehicle.year}</p>
                <p>Kms: {vehicle.km.toLocaleString()}</p>
                <button className="next-vehicle-btn">Ver Vehículo</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextVehicle;