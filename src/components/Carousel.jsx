import { useState, useEffect } from "react";
import carData from "../CarData.json";
import Car from "../assets/cars (3).png";

const Carousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(carData);
  }, []);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel_content text-center py-5">
          <h2>Our Rental Fleet</h2>
          <p>
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip.
          </p>
        </div>
        <div className="carousel-inner mb-5">
          <div className="carousel-item active">
            <div className="established">
              <h1>2002</h1>
            </div>
            <img src={Car} className="d-block" alt="img" />
            <div className="container">
              <div className="row">
                <div className="col-6 col-lg-2 col-md-2">
                  <h3>Model Name</h3>
                  <p>Mahindra Thar</p>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h3>Car Engine</h3>
                  <p>6-speed MT</p>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h3>Year</h3>
                  <p>2010</p>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h3>Seater</h3>
                  <p>4</p>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h3>Fuel</h3>
                  <p>Petrol</p>
                </div>
                <div className="col-6 col-lg-2 col-md-2">
                  <h3>Tyre Type</h3>
                  <p>255/65 R18 Tubeless</p>
                </div>
              </div>
            </div>
          </div>
          {data.map((item) => (
            <div className="carousel-item" key={item.id}>
              <div className="established">
                <h1>{item.Year}</h1>
              </div>
              <img src={item.carImg} className="d-block" alt="img" />
              <div className="container">
                <div className="row">
                  <div className="col-6 col-lg-2 col-md-2">
                    <h3>Model Name</h3>
                    <p>{item.carName}</p>
                  </div>
                  <div className="col-6 col-lg-2 col-md-2">
                    <h3>Car Engine</h3>
                    <p>{item.Engine}</p>
                  </div>
                  <div className="col-6 col-lg-2 col-md-2">
                    <h3>Year</h3>
                    <p>{item.Year}</p>
                  </div>
                  <div className="col-6 col-lg-2 col-md-2">
                    <h3>Seater</h3>
                    <p>{item.Seater}</p>
                  </div>
                  <div className="col-6 col-lg-2 col-md-2">
                    <h3>Fuel</h3>
                    <p>{item.Fuel}</p>
                  </div>
                  <div className="col-6 col-lg-2 col-md-2">
                    <h3>Tyre Type</h3>
                    <p>{item.Tyre}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* second slide */}
          {/* third slide */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
