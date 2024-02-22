import Car3 from "../assets/cars (3).png";
const Faq = () => {
  return (
    <>
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
    </>
  );
};

export default Faq;
