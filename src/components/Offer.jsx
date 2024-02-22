import Car2 from "../assets/cars (2).png";
const Offer = () => {
  return (
    <>
      <div className="best_offer bg-warning my-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6 col-md-6">
              <h2 className="text-white">Best Offer</h2>
              <h4 className="text-white">Car Model Name</h4>
              <p className="price">for ₹400/day</p>
              <p className="w-75 text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maxime, recusandae!
              </p>
              <button className="btn register">Rent Now</button>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <img src={Car2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
