import "../styles/allVehicles.css";
import { Calendar, Gauge } from "lucide-react";

import car1 from "/img/car1.avif";
import car2 from "/img/car2.avif";
import car3 from "/img/car3.avif";
import car4 from "/img/car4.avif";

/* data de ejemplo */
const vehicles = [
  { id: 1, name: "Peugeot 308", year: 2019, km: "65.000 km", img: car1 },
  { id: 2, name: "Toyota Corolla", year: 2021, km: "32.000 km", img: car2 },
  { id: 3, name: "Ford Mustang", year: 2018, km: "41.000 km", img: car3 },
  { id: 4, name: "Honda Civic", year: 2020, km: "27.000 km", img: car4 },
  { id: 5, name: "BMW M3", year: 2017, km: "59.000 km", img: car1 },
  { id: 6, name: "Audi A4", year: 2022, km: "18.000 km", img: car2 },
];

const AllVehicles = () => {
  return (
    <section className="allvehicles-section">
      <div className="allvehicles-container">

        {/* titulo */}
        <h2 className="allvehicles-title">
          Nuestro stock
        </h2>

        {/* grid vehiculos */}
        <div className="allvehicles-grid">

          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="allvehicles-card">

              {/* imagen */}
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="allvehicles-image"
              />

              {/* info vehiculo */}
              <div className="allvehicles-cardinfo">

                <h3 className="allvehicles-name">
                  {vehicle.name}
                </h3>

                {/* año */}
                <div className="allvehicles-spec">
                  <Calendar className="allvehicles-icon"/>
                  <span>{vehicle.year}</span>
                </div>

                {/* kilometraje */}
                <div className="allvehicles-spec">
                  <Gauge className="allvehicles-icon"/>
                  <span>{vehicle.km}</span>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* boton final */}
        <div className="allvehicles-buttonwrapper">
          <button className="allvehicles-button">
            Ver todos los vehículos
          </button>
        </div>

      </div>
    </section>
  );
};

export default AllVehicles;