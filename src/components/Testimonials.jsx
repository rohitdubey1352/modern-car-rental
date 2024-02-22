import User1 from "../assets/user (2).jpg";
import User2 from "../assets/user (3).jpg";
const Testimonials = () => {
  return (
    <>
      <div className="Testimonials text-center my-5">
        <div className="Testimonials_Content">
          <h5>Reviewed by People{"'"}s</h5>
          <h2>Client{"'"}s Testimonials</h2>
          <p className="w-50 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor
            quibusdam quidem aliquam esse non id et, atque ullam. Facilis rem
            aspernatur temporibus adipisci id?
          </p>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="card">
                <div className="quotes">
                  <p>
                    {"''"}We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental ealtes were
                    very affordable.{"''"}
                  </p>
                  <div className="avatar">
                    <img src={User1} alt="avatar" />
                    <div className="bio mx-3">
                      <h2>Marie J.</h2>
                      <p>Bangalore</p>
                    </div>
                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="card">
                <div className="quotes">
                  <p>
                    {"''"}We rented a car from this website and had an amazing
                    experience! The booking was easy and the rental ealtes were
                    very affordable.{"'' "}
                  </p>
                  <div className="avatar">
                    <img src={User2} alt="avatar" />
                    <div className="bio mx-3">
                      <h2>Rohit Sharma</h2>
                      <p>Noida</p>
                    </div>
                    <i className="fa fa-quote-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
