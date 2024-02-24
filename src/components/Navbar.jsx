import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="container my-4">
        <nav className="navbar navbar-expand-lg nav-underline">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={Logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/*  */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/models">
                    Vehicle Models
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/testimonials">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
              </ul>

              <form
                className="d-flex justify-content-center align-center"
                role="search"
              >
                <button className="btn register" type="submit">
                  User Name
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
