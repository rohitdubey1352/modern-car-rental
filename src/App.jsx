// Dev App => Car Rental web app
import Navbar from "../src/components/Navbar";
import Home from "./Pages";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Models from "./Pages/Models";
import Testimonials from "./Pages/Testimonials";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/models" element={<Models />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
