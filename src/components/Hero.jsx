import Car from "../assets/cars (2).png";
const Hero = () => {
  return (
    <>
      <div className="container hero">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 hero_content">
            <h5>Plan your trip now!</h5>
            <h1>
              Save big <br /> With Our <span>Car</span> <br /> Rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatble prices, unlimited miles,
              flecible pick-up options and much more.
            </p>

            <div className="buttons">
              <button className="btn text-dark">Book Ride</button>
              <button className="btn btn-outline-dark mx-5">
                Learn More {">"}
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6 img_section">
            <picture>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="749"
                height="457"
                viewBox="0 0 749 457"
                fill="none"
              >
                <path
                  d="M9.13124 111.5C-83.0343 -105.96 549.009 55.6442 712.874 100.74C735.33 106.92 750.012 127.973 748.618 151.222L734.704 383.237C732.798 415.02 701.825 436.824 670.855 429.431C389.207 362.196 245.028 410.58 159.699 451.373C124.55 468.176 86.6117 439.726 84.4247 400.829C80.8743 337.679 63.9859 240.927 9.13124 111.5Z"
                  fill="#FEDB0D"
                />
              </svg>
              <img src={Car} className="car_img" alt="car" />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
