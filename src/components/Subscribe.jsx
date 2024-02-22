import Download1 from "../assets/app1.png";
import Download2 from "../assets/app.png";
import Mobile from '../assets/Sub_App.png'
const Subscribe = () => {
  return (
    <>
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
    </>
  );
};

export default Subscribe;
