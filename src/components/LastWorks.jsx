import "../styles/lastWorks.css";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// fotos de ejemplo descargadas de Google o generadas, colocarlas en /public/img/
const slides = [
  "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNDkzMzA2L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzczMTY4NzE4ODc5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",
  "https://images.prd.kavak.io/eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNDkzMzAzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzczMTY0NTEzNzc2LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEzNjIsImhlaWdodCI6NjMwfX19",
  "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNDkzMjk3L0VYVEVSSU9SLWZyb250U2lkZVBpbG90TmVhci0xNzczMTYxNTA0NzM1LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",
  "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvNDkxNDEzL0VYVEVSSU9SLWZyb250U2lkZVBpbG90RGlzdGFuY2UtMTc3MjY0NzAxMTcwMS5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo5MDAsImhlaWdodCI6NTI1fX19",
  "https://images.prd.kavak.io//eyJidWNrZXQiOiJrYXZhay1pbWFnZXMiLCJrZXkiOiJpbWFnZXMvMzIvRm90b19sYXRlcmFsX3BpbG90by0wLTIwMjYtMDMtMDlUMDg0MTA3MjIzLmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjkwMCwiaGVpZ2h0Ijo1MjV9fX0=",
];

const LastWorks = () => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // cambio automatico cada 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % length);
    }, 4000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  return (
    <section className="lastworks-section">
      <div className="lastworks-container">
        <h2 className="lastworks-title">Algunos de nuestros trabajos</h2>

        <div className="lastworks-carousel">
          {/* flecha izquierda */}
          <div className="lastworks-arrow left" onClick={prevSlide}>
            <ChevronLeft size={36} />
          </div>

          {/* slides */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`lastworks-slide ${
                index === current ? "active" : ""
              }`}
            >
              <img src={slide} alt={`Trabajo ${index + 1}`} />
            </div>
          ))}

          {/* flecha derecha */}
          <div className="lastworks-arrow right" onClick={nextSlide}>
            <ChevronRight size={36} />
          </div>

          {/* indicadores circulitos */}
          <div className="lastworks-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`lastworks-dot ${
                  index === current ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastWorks;