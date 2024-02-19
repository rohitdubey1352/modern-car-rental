// Dev App => Car Rental web app
import "../src/App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Car1 from "../src/assets/cars (1).png";
import Car2 from "../src/assets/cars (2).png";
import Car3 from "../src/assets/cars (3).png";
import Mobile from "../src/assets/Sub_App.png";
import User1 from "../src/assets/user (2).jpg";
import User2 from "../src/assets/user (3).jpg";
import Download1 from "../src/assets/app1.png";
import Download2 from "../src/assets/app.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
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
              <div className="icons mb-5">
                <i className="fa-regular fa-3x fa-circle-check"></i>
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
              <div className="icons mb-5">
                <i className="fa-solid fa-3x fa-phone-volume"></i>
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
              <div className="icons mb-5">
                <i className="fa-solid fa-3x fa-car-on"></i>
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

      {/* Banner */}
      <div className="banner text-center bg-dark py-5">
        <h1 className="text-white">Save big with our cheap car rental!</h1>
        <p className="text-warning">
          Top Airports, Local Suppliers{" "}
          <span className="text-danger">24/7</span> Support.
        </p>
      </div>

      {/*Why Choose Us  */}
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

      {/* Find car's in your location */}
      <div className="find_cars">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-lg-6 col-md-6 text-left">
              <h2 className="my-3">
                Find Car{"'"}s In <br /> Your Locations
              </h2>
              <p className="w-75 my-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                dolor quibusdam quidem aliquam esse non id et, atque ullam.
                Facilis rem aspernatur temporibus adipisci id?
              </p>
              <button className="btn register my-5">
                Find a location {" >"}
              </button>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <img className="find_car__img" src={Mobile} alt="app" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.5012346775!2d77.23701515178489!3d28.522102352019765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708327241670!5m2!1sen!2sin"
                width="680"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
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

      {/* FAQ */}
      <div className="container faq">
        <div className="text-center py-5">
          <h5>FAQ{"'"}s</h5>
          <h2>Frequently Asked Questions</h2>
          <p className="w-50 m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor
            quibusdam quidem aliquam esse non id et, atque ullam. Facilis rem
            aspernatur temporibus adipisci id?
          </p>
        </div>
        <img src={Car3} alt="car3" />
        <div className="dropdown-center active text-center">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            1. What is special about comparing rental car deals?
          </button>
          <ul className="dropdown-menu text-center">
            <li>
              <a className="dropdown-item" href="/">
                Comparing rental car deals is important as it helps find the
                best deal fits your budget and requirements, ensuring you get
                the most value for your money. By comparing various options, you
                can find deals that offer lower prices, additional services, or
                better car models. You can find car rental deals by researching
                online and comparing prices from different rental companies.
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown-center text-center">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            2. How do I find the car rental deals?
          </button>
          <ul className="dropdown-menu text-center">
            <li>
              <a className="dropdown-item" href="/">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium aspernatur quis, inventore necessitatibus tempore
                nesciunt minima unde fugiat.
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown-center text-center">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            3. How do I find such low rental car prices?
          </button>
          <ul className="dropdown-menu text-center">
            <li>
              <a className="dropdown-item" href="/">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto nisi officiis non cumque numquam! Molestias culpa
                mollitia dolores consequatur saepe!
              </a>
            </li>
          </ul>
        </div>

        {/* ...................................... */}
      </div>
      {/* Subscribe */}
      <div className="container">
        <div className="box subscribe d-flex align-items-center">
          <div className="col-12 col-lg-6 col-md-6 sub_content">
            <h1>
              Download the free
              <br /> Rental App
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, exercitationem.
            </p>
            <div className="social_app">
              <img src={Download1} alt="" />
              <img src={Download2} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <img src={Mobile} alt="app" className="app_image" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer bg-dark mt-5">
        <div className="subscribe_content d-flex align-items-center">
          <h1 className="text-white">
            Stay up to date on all the latest updates on our platform.
          </h1>
          <form className="d-flex align-items-center">
            <input type="email" placeholder="Your Email" />
            <a href="#">
              <i className="fa-brands fa-3x fa-telegram text-white"></i>
            </a>
          </form>
        </div>

        <div className="container footer_nav">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-3">
              <h1>Our Pages</h1>
              <ul>
                <a href="#">
                  <li>Home</li>
                </a>
                <a href="#">
                  <li>About</li>
                </a>
                <a href="#">
                  <li>Models</li>
                </a>
                <a href="#">
                  <li>Testimonials</li>
                </a>
                <a href="#">
                  <li>Contact Us!</li>
                </a>
              </ul>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <h1>Company</h1>
              <ul>
                <a href="#">
                  <li>About Us</li>
                </a>
                <a href="#">
                  <li>Testimonials</li>
                </a>
                <a href="#">
                  <li>Contact Us</li>
                </a>
              </ul>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <h1>Products</h1>
              <ul>
                <a href="#">
                  <li>Cars Models</li>
                </a>
                <a href="#">
                  <li>Off Roads</li>
                </a>
                <a href="#">
                  <li>FAQ</li>
                </a>
                <a href="#">
                  <li>Features</li>
                </a>
              </ul>
            </div>
            <div className="col-12 col-lg-3 col-md-3 social">
              <h1>Follow Us!</h1>
              <ul>
                <a href="#">
                  <i className="fa-brands fa-2x fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-2x fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-2x fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-2x fa-linkedin"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
