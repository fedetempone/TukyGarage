import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom"; 
import Lenis from "@studio-freight/lenis";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null); // instancia de lenis
  const { pathname } = useLocation();

  useEffect(() => {
    // inicializacion de lenis
    const lenis = new Lenis({
      duration: 1,     
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, 
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // con esto escucho el cambio de ruta
  useEffect(() => {
    if (lenisRef.current) {
      // si hay cambio de ruta lenis va al top automaticamente
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]); // cada vez que el link cambia ejecuta lenis

  return <>{children}</>;
};

export default SmoothScroll;