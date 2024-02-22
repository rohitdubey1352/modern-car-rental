const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="footer bg-dark mt-5">
        <div className="subscribe_content d-flex align-items-center">
          <h1 className="text-white">
            Stay up to date on all the latest updates on our platform.
          </h1>
          <form
            action="https://formspree.io/f/xpzvdeak"
            method="POST"
            className="d-flex align-items-center"
          >
            <input type="email" name="subscribe" placeholder="Your Email" />
            <button className="btn" type="submit">
              <i className="fa-brands fa-3x fa-telegram text-white"></i>
            </button>
          </form>
        </div>

        <div className="container footer_nav">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-3">
              <h1>Our Pages</h1>
              <ul>
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/about">
                  <li>About</li>
                </a>
                <a href="/models">
                  <li>Models</li>
                </a>
                <a href="/">
                  <li>Testimonials</li>
                </a>
                <a href="/contact">
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

export default Footer;
