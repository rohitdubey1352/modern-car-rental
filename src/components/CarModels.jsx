import { useState, useEffect } from "react";
import apiData from "../CarAPI.json";

const CarModels = () => {
  const [data, setData] = useState([]); // Store all car data
  const [showMore, setShowMore] = useState(false); // Control whether to show more cars

  useEffect(() => {
    setData(apiData.slice(0, 5)); // Initially load only the first 5 cars
  }, []);

  const loadMoreCars = () => {
    // Update data state with next 10 cars
    setData([...data, ...apiData.slice(data.length, data.length + 10)]); // Concatenate existing and new data
    setShowMore(data.length === apiData.length); // Check if all cars are loaded
  };

  return (
    <>
      <div className="container">
        <div className="text-center my-5">
          <h2>Explore Our Collection Cars</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla non
            saepe, ducimus culpa dolores commodi!
          </p>
        </div>
        <div className="row car_models">
          {data.map((item) => (
            <div className="col-12 col-lg-4 col-md-4" key={item.id}>
              <div className="box">
                <img src={item.carImg} className="img-fluid" alt="car" />
                <div className="model_content mx-3">
                  <div className="mt-3 d-flex align-items-center justify-content-between">
                    <h3>{item.carName}</h3>
                    <h5 className="text-warning">
                      {item.Rent} <small className="text-dark">/Day</small>
                    </h5>
                  </div>
                  <div className="location d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between">
                      <i
                        className="fa fa-map-marker text-warning"
                        aria-hidden="true"
                      />
                      {item.location}
                    </div>
                    <div className="ratting">
                      4.5{" "}
                      <i
                        className="fa fa-star text-warning"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5 d-flex justify-content-center align-items-center">
          {showMore ? (
            <button className="btn register" disabled>
              All Cars Loaded
            </button>
          ) : (
            <button className="btn register" onClick={loadMoreCars}>
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CarModels;
