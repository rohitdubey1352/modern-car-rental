// Dev App => Car Rental web app
import "../App.css";
import Hero from "../components/Hero";
import Quick from "../components/QuickEasy";
import Banner from "../components/Banner";
import WhyChooseUs from "../components/WhyChooseUs";
import Offer from "../components/Offer";
import FindCar from "../components/FindCar";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Subscribe from "../components/Subscribe";
import BookACar from "../components/BookACar";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Hero />

      {/* Book the car */}
      <BookACar />

      {/* Quick & Easy */}
      <Quick />

      {/* Carousel */}
      <Carousel />

      {/* Banner */}
      <Banner />

      {/*Why Choose Us  */}
      <WhyChooseUs />

      {/* Best Offer's */}
      <Offer />

      {/* Find car's in your location */}
      <FindCar />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <Faq />

      {/* Subscribe */}
      <Subscribe />
    </>
  );
};

export default Home;
