import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import HowWeWork from "../components/HowWeWork";
import NextVehicle from "../components/NextVehicle";
import SellCar from "../components/SellCar";
import LatestVehicles from "../components/LatestVehicles";

const Home = () => {
  return (
    <>
      <Nav />

      <section id="home">
        <Hero />
      </section>


      <section id="whoWeAreSectionId">
        <WhoWeAre />
      </section>

      <section id="HowWeWorkSection">
        <HowWeWork />
      </section>

      <section id="NextVehiculoSectionId">
        <NextVehicle />
      </section>

      <section id="sellCarSectionId">
        <SellCar />
      </section>

       <section id="latestVehiclesSectionId">
        <LatestVehicles />
      </section>

      <section id="stock">
        <h2>Stock</h2>
      </section>

      <section id="cotiza">
        <h2>Cotizá tu auto</h2>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
      </section>
    </>
  );
};

export default Home;