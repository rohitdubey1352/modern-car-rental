import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import Car from "../assets/cars (3).png";

const AboutCompany = () => {
  return (
    <>
      <div className="heading py-5">
        <div className="About_message text-center">
          <h2>About Us!</h2>
          <p className="w-50 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor
            quibusdam quidem aliquam esse non id et, atque ullam. Facilis rem
            aspernatur temporibus adipisci id?
          </p>
        </div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-lg-6 col-md-6 car_box bg-warning">
              <img src={Car} alt="car" />
            </div>
            <div className="col-12 col-lg-6 col-md-6 mx-5 mt-5 about_content">
              <h5>About The Company</h5>
              <h2>You start the engine and your adventure begins!</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio consequuntur nostrum ullam sequi! Minus officia saepe
                recusandae impedit architecto quos temporibus cum et a quis?
              </p>
              <div className="features d-flex align-items-center justify-content-between text-center">
                <div className="group">
                  <img src={icon1} alt="icon1" />
                  <h3>
                    20 <small>Car Types</small>{" "}
                  </h3>
                </div>
                <div className="group">
                  <img src={icon2} alt="icon2" />
                  <h3>
                    85 <small>Rental Outles</small>{" "}
                  </h3>
                </div>
                <div className="group">
                  <img src={icon3} alt="icon3" />
                  <h3>
                    75 <small>Repair Shop</small>{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
