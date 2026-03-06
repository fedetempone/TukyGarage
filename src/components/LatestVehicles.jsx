import "../styles/latestVehicles.css";

// Datos de ejemplo, imágenes sacadas de Google
const latestVehiclesData = [
  {
    id: 1,
    image: "https://autotest.com.ar/wp-content/uploads/2021/02/TOYOTA-COROLLA-GR-S-7.jpg",
    brand: "Toyota Corolla",
    year: 2020,
    km: 54000
  },
  {
    id: 2,
    image: "https://acnews.blob.core.windows.net/imgnews/medium/NAZ_b896903ed5984615b7cc4712755f3cdc.jpg",
    brand: "Honda Civic",
    year: 2019,
    km: 67000
  },
  {
    id: 3,
    image: "https://acnews.blob.core.windows.net/imgnews/large/NAZ_e57174b319c14750a9b772448bba04a0.jpg",
    brand: "Ford Focus",
    year: 2018,
    km: 72000
  },
  {
    id: 4,
    image: "https://www.carsmagazine.com.ar/wp-content/uploads/2012/02/peugeot-308-argentina.jpg",
    brand: "Peugeot 308",
    year: 2021,
    km: 45000
  }
];

const LatestVehicles = () => {
  return (
    <section id="latestVehiclesSectionId" className="latest-vehicles-section">
      <div className="latest-vehicles-header">
        <h2 className="latest-vehicles-title">Últimos Ingresos</h2>
        <button className="latest-vehicles-header-btn">Ver Todos</button>
      </div>

      <div className="latest-vehicles-grid">
        {latestVehiclesData.map(vehicle => (
          <div key={vehicle.id} className="latest-vehicle-card">
            <img
              src={vehicle.image}
              alt={vehicle.brand}
              className="latest-vehicle-img"
            />
            <div className="latest-vehicle-info">
              <h3>{vehicle.brand}</h3>
              <p>Año: {vehicle.year}</p>
              <p>Kms: {vehicle.km.toLocaleString()}</p>
              <button className="latest-vehicle-btn">Ver Vehículo</button>
            </div>
          </div>
        ))}
      </div>

      <div className="latest-vehicles-footer">
        <button className="latest-vehicles-footer-btn">Ver Todos los Vehículos</button>
      </div>
    </section>
  );
};

export default LatestVehicles;