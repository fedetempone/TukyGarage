import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allVehicles, createSlug } from "../data/vehiclesData";
import {
  Calendar,
  Gauge,
  Settings,
  Fuel,
  ArrowLeft,
  MessageCircle,
  ChevronDown,
  Info
} from "lucide-react";
import "../styles/vehicleDetails.css";

const VehicleDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [showSpecs, setShowSpecs] = useState(false);

  // estados para controlar la carga de imagenes
  const [mainLoaded, setMainLoaded] = useState(false);
  const [thumbsLoaded, setThumbsLoaded] = useState({});

  useEffect(() => {
    const foundVehicle = allVehicles.find(
      (v) => createSlug(v.brand, v.model) === slug
    );

    if (foundVehicle) {
      setVehicle(foundVehicle);
      setMainImage(foundVehicle.image);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  // reset de carga cuando cambia la imagen principal
  useEffect(() => {
    setMainLoaded(false);
  }, [mainImage]);

  if (!vehicle) return <div className="vehicledetails-loading">Cargando vehículo...</div>;

  // imagen principal en la galeria
  const allPhotos = [vehicle.image, ...vehicle.gallery];

  const handleThumbLoad = (index) => {
    setThumbsLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="vehicledetails-wrapper">
      <div className="vehicledetails-container">
        {/* btn ir atras */}
        <button className="vehicledetails-btn-back" onClick={() => navigate("/vehiculos")}>
          <ArrowLeft size={20} />
          Ir atrás
        </button>

        <div className="vehicledetails-main-grid">

          {/* imagen grande en el lado izquierdo */}
          <div className="vehicledetails-photo-stage">
            <div className="vehicledetails-main-photo-wrapper">
              {/* skeleton para la imagen principal */}
              {!mainLoaded && <div className="vehicledetails-skeleton-main"></div>}
              <img
                src={mainImage}
                alt={vehicle.model}
                className={`vehicledetails-img-featured ${mainLoaded ? "img-loaded" : "img-loading"}`}
                onLoad={() => setMainLoaded(true)}
                ref={(img) => {
                  if (img && img.complete) setMainLoaded(true);
                }}
              />
            </div>
          </div>

          {/* en el lado derecho las imagenes chicas y la info */}
          <div className="vehicledetails-sidebar-info">

            {/* imagenes miniatura */}
            <div className="vehicledetails-thumbs-column">
              {allPhotos.slice(0, 5).map((photo, index) => (
                <div
                  key={index}
                  className={`vehicledetails-thumb-box ${mainImage === photo ? "vehicledetails-active-thumb" : ""}`}
                  onClick={() => setMainImage(photo)}
                >
                  {/* skeleton para cada miniatura */}
                  {!thumbsLoaded[index] && <div className="vehicledetails-skeleton-thumb"></div>}
                  <img
                    src={photo}
                    alt="Vista miniatura"
                    className={thumbsLoaded[index] ? "img-loaded" : "img-loading"}
                    onLoad={() => handleThumbLoad(index)}
                  />
                </div>
              ))}
            </div>

            {/* info del auto */}
            <div className="vehicledetails-specs-box">
              <span className="vehicledetails-brand-tag">{vehicle.brand}</span>
              <h1 className="vehicledetails-car-title">{vehicle.model}</h1>
              <p className="vehicledetails-car-price">$ {vehicle.price.toLocaleString("es-AR")}</p>

              <div className="vehicledetails-specs-list">
                <div className="vehicledetails-item-spec">
                  <Calendar size={20} />
                  <span>Año: <strong>{vehicle.year}</strong></span>
                </div>
                <div className="vehicledetails-item-spec">
                  <Gauge size={20} />
                  <span>Kilómetros: <strong>{vehicle.km.toLocaleString("es-AR")}</strong></span>
                </div>
                <div className="vehicledetails-item-spec">
                  <Settings size={20} />
                  <span>Caja: <strong>{vehicle.transmission}</strong></span>
                </div>
                <div className="vehicledetails-item-spec">
                  <Fuel size={20} />
                  <span>Motor: <strong>{vehicle.fuel}</strong></span>
                </div>
              </div>

              <div className="vehicledetails-description-text">
                <h3>Resumen del vendedor</h3>
                <p>{vehicle.description}</p>

                {/* ver mas características */}
                <button
                  className="vehicledetails-btn-toggle"
                  onClick={() => setShowSpecs(!showSpecs)}
                >
                  <Info size={18} />
                  {showSpecs ? "Ocultar características" : "Ver más características"}
                  <ChevronDown className={`vehicledetails-arrow-toggle ${showSpecs ? "rotate" : ""}`} />
                </button>

                {/* especificaciones */}
                <div className={`vehicledetails-extra-specs ${showSpecs ? "show" : ""}`}>
                  <div className="vehicledetails-specs-grid">
                    <div className="vehicledetails-spec-item"><span>Motor:</span> <strong>{vehicle.specs.motor}</strong></div>
                    <div className="vehicledetails-spec-item"><span>Potencia:</span> <strong>{vehicle.specs.potencia}</strong></div>
                    <div className="vehicledetails-spec-item"><span>Válvulas:</span> <strong>{vehicle.specs.valvulas}</strong></div>
                    <div className="vehicledetails-spec-item"><span>Cilindros:</span> <strong>{vehicle.specs.cilindros}</strong></div>
                    <div className="vehicledetails-spec-item"><span>Carrocería:</span> <strong>{vehicle.specs.carroceria}</strong></div>
                    <div className="vehicledetails-spec-item"><span>Capacidad Tanque:</span> <strong>{vehicle.specs.tanque}</strong></div>
                  </div>

                  <div className="vehicledetails-features-lists">
                    <div className="vehicledetails-feature-group">
                      <h4>Seguridad</h4>
                      <ul>{vehicle.specs.seguridad.map(s => <li key={s}>{s}</li>)}</ul>
                    </div>
                    <div className="vehicledetails-feature-group">
                      <h4>Confort</h4>
                      <ul>{vehicle.specs.confort.map(c => <li key={c}>{c}</li>)}</ul>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/5491112345678?text=Hola! Consulto por el ${vehicle.brand} ${vehicle.model}`}
                className="vehicledetails-btn-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={22} />
                Consultar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;