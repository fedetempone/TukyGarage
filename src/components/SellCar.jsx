import "../styles/sellCar.css";

const SellCar = () => {
  return (
    <section id="sellCarSectionId"  className="sell-car-section">
      <div className="sell-car-banner">
        <div className="overlay"></div>
        <div className="sell-car-text">
          <h2>Querés Vender tu Auto?</h2>
          <p>🚗 Cotiza tu auto y contacta con un asesor para coordinar la venta</p>
          <a
            href="https://wa.me/5491123456789?text=Hola%20Me%20gustaria%20cotizar%20mi%20vehiculo"
            target="_blank"
            rel="noopener noreferrer"
            className="sell-car-btn"
          >
            Vender mi Auto
          </a>
        </div>
      </div>
    </section>
  );
};

export default SellCar;