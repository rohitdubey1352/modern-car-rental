import Mobile from "../assets/Sub_App.png";

const FindCar = () => {
  return (
    <>
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
    </>
  );
};

export default FindCar;
