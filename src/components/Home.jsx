import Nav from "../components/Nav";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import HowWeWork from "../components/HowWeWork";
import NextVehicle from "../components/NextVehicle";
import SellCar from "../components/SellCar";
import LatestVehicles from "../components/LatestVehicles";
import AllVehicles from "../components/AllVehicles";
import OurServices from "../components/OurServices";
import LastWorks from "../components/LastWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

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

      <section id="AllVehiclesSectionId">
        <AllVehicles />
      </section>

      <section id="OurServicesSectionId">
        <OurServices />
      </section>

      <section id="LastWorksSectionId">
        <LastWorks />
      </section>

      <section id="WhyChooseUsSectionId">
        <WhyChooseUs />
      </section>

      <section id="FooterSectionId">
        <Footer />
      </section>

    </>
  );
};

export default Home;