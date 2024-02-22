import Bg from "../assets/bg.jpg";
import Quick from "../components/QuickEasy";
import Sub from "../components/Subscribe";
import Message from "../components/Message";
import CarModels from "../components/CarModels";
const Models = () => {
  return (
    <>
      <img src={Bg} className="about_bg" alt="bg" />
      {/* Models message */}
      <Message page="Models" />
      {/* Quick & Easy car rental */}
      <div className="py-5">
        <Quick />
      </div>
      {/* Models Grid */}
      <CarModels />

      {/* Subscribe */}
      <Sub />
    </>
  );
};

export default Models;
