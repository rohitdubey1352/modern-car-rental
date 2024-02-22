import Car1 from "../assets/cars (1).png";
import Car2 from "../assets/cars (2).png";
import Car3 from "../assets/cars (3).png";
const WhyChooseUs = () => {
  return (
    <>
      <div className="Why_Choose_Us my-5">
        <div className="container">
          <div className="img_grid">
            <img src={Car1} alt="car1" className="car1" />
            <img src={Car2} alt="car2" className="car2" />
            <img src={Car3} alt="car3" className="car3" />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 left_Content">
              <h5>Why Choose Us?</h5>
              <h1>
                Best valued deals you <br /> will ever find
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt nihil adipisci impedit eligendi facilis eos excepturi
                velit necessitatibus eaque maiores sed tempora quasi
                consequuntur odit fugiat, fuga aliquam amet harum.adipisci
                impedit eligendi facilis eos excepturi velit necessitatibus
                eaque maiores sed tempora quasi consequuntur odit.
              </p>
              <button className="btn register my-4">Find Details {">"}</button>
            </div>
            <div className="col-12 col-lg-6 col-md-6 Right_Content">
              <div className="details">
                <figure>
                  <i className="fa fa-2x fa-car" aria-hidden="true"></i>
                </figure>
                <div className="why_content">
                  <h2>Cross Country Drive</h2>
                  <p>
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="details">
                <figure>
                  <i className="fas fa-2x fa-coins"></i>
                </figure>
                <div className="why_content">
                  <h2>All Inclusive Pricing</h2>
                  <p>
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="details">
                <figure>
                  <i className="fas fa-2x fa-rupee"></i>
                </figure>
                <div className="why_content">
                  <h2>No Hidden Charges</h2>
                  <p>
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
