import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import VehicleDetails from "./components/VehicleDetails"; 
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import AllVehicles from "./components/AllVehicles"

const App = () => {
  return (
    <>
      <SmoothScroll>
        {/* pongo el navbar afuera de Routes para que se vea siempre */}
        <Navbar /> 

        <Routes>
          {/* inicio */}
          <Route path="/" element={<Home />} />

          <Route path="/vehiculos" element={<AllVehicles hideButton={true} />} />

          {/* detalles del vehiculo */}
          <Route path="/vehiculos/:slug" element={<VehicleDetails />} />
        </Routes>

        {/* footer tambien fijo */}
        <Footer />

        <ScrollToTop />
      </SmoothScroll>
    </>
  );
};

export default App;
