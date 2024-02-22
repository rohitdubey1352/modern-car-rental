import Bg from "../assets/bg.jpg";
import Message from "../components/Message";
import Testimonial from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
const Testimonials = () => {
  return (
    <>
      <img src={Bg} className="about_bg" alt="bg" />
      <Message page="Testimonials" />
      {/* Testimonials */}
      <Testimonial />
      
      <Subscribe />
    </>
  );
};

export default Testimonials;
