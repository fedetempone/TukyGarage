import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ScrollTopTop from "./components/ScrollToTop"
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollTopTop />
      </SmoothScroll>
    </>
  );
};

export default App;

