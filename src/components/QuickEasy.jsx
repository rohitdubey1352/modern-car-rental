import Quick1 from "../assets/quick (1).png";
import Quick2 from "../assets/quick (2).png";
import Quick3 from "../assets/quick (3).png";
const QuickEasy = () => {
  return (
    <>
      {/* Quick & Easy car rental */}
      <div className="container quick_rental my-5">
        <div className="content text-center">
          <p className="text-uppercase">How it Works</p>
          <h1>
            Quick & Easy car <span>rental</span>{" "}
          </h1>
        </div>

        <div className="row my-5">
          <div className="col-12 col-lg-4 col-md-4">
            <div className="box">
              <div className="icons">
                <img src={Quick1} alt="quick1" />
              </div>
              <div className="title">
                <h1>Select Car</h1>
              </div>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="box">
              <div className="icons">
                <img src={Quick2} alt="quick2" />
              </div>
              <div className="title">
                <h1>Contact Operator</h1>
              </div>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-4">
            <div className="box">
              <div className="icons">
                <img src={Quick3} alt="quick3" />
              </div>
              <div className="title">
                <h1>Let{"'"}s Drive</h1>
              </div>
              <p>
                Whether you{"'"}re hitting the open road, we{"'"}ve got you
                covered with our wide range of cars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickEasy;
