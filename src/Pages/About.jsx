import Bg from "../assets/bg.jpg";
import Quick from "../components/QuickEasy";
import Sub from "../components/Subscribe";
import Message from "../components/Message";
import AboutCompany from "../components/AboutCompany";
import Experience from "../components/Experience";
const About = () => {
  return (
    <>
      <img src={Bg} className="about_bg" alt="bg" />
      {/* About message */}
      <Message page="About Us" />
      {/* About company */}
      <AboutCompany />
      {/* Quick & Easy car rental */}
      <Quick />
      {/* Company's Experience */}
      <Experience />
      {/* Subscribe */}
      <Sub />
    </>
  );
};

export default About;
