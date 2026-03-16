import { useEffect, useState, useRef } from "react";
import "../styles/whoWeAre.css";

const WhoWeAre = () => {
  const [rotate, setRotate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");
  const sectionRef = useRef(null);
  const lastScrollY = useRef(0);

  // giro de la foto
  useEffect(() => {
    setRotate(true);
    const initialTimeout = setTimeout(() => setRotate(false), 8000);
    const interval = setInterval(() => {
      setRotate(true);
      setTimeout(() => setRotate(false), 8000);
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  // detector de scroll y entrada a la seccion
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
      { threshold: 0.1 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="who-we-are-section" ref={sectionRef}>
      <div className="who-we-are-container">
        <div className="who-we-are-img-wrapper">
          <img
            src="/img/whoWeAre.jpg"
            alt="Quienes Somos"
            className={`who-we-are-img ${rotate ? "rotate" : ""}`}
          />
        </div>

        <div 
          className={`who-we-are-text ${isVisible ? "animate-in" : "animate-out"} ${scrollDir}`}
        >
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos Emanuel y Matias, y en Tuky Garage transformamos la compra y venta
            de autos en una experiencia de confianza. No solo movemos stock:
            seleccionamos cada unidad bajo estándares rigurosos.
          </p>
          <p>
            Nos especializamos en compra, venta, permuta y consignación, con un
            diferencial clave: el acondicionamiento preventa. Cada vehículo pasa
            por nuestro sector de detailing para que te lo lleves impecable y
            listo para disfrutar.
          </p>
          <p>
            Transparencia, calidad y vehiculos seleccionados. Tu próximo auto está
            acá.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;