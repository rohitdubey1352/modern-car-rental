import Car from "../assets/cars (3).png";
import Car2 from "../assets/cars (1).png";

const Experience = () => {
  return (
    <>
      <div className="experience pt-5">
        <div className="container my-5">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-12 col-lg-6 col-md-6 about_content">
              <h2>Company{"'"}s Experience</h2>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam, provident illum! Quam sint rerum vel eveniet odio
                labore esse minus temporibus architecto, obcaecati velit animi
                modi, veritatis et nostrum. Repellat! provident illum! Quam sint
                rerum vel eveniet odio labore esse minus temporibus architecto,
                obcaecati velit animi modi.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi,
                quasi! Exercitationem minus eveniet nulla, culpa eaque ab
                consequuntur pariatur sit fugiat, alias, necessitatibus sapiente
                veniam debitis? Provident labore voluptatibus accusantium. Nisi,
                quasi! Exercitationem minus eveniet nulla, culpa eaque ab
                consequuntur pariatur sit fugiat, alias, necessitatibus sapiente
                veniam debitis? Provident labore voluptatibus accusantium.
              </p>
            </div>
            <div className="col-12 col-lg-6 col-md-6 img_group d-flex align-items-center">
              <img src={Car} alt="car1" className="car1 bg-warning" />
              <div className="box d-flex align-items-start flex-column my-2">
                <h3 className="bg-dark text-white text-center">
                  10+ years <br /> Experience
                </h3>
                <img src={Car2} alt="car2" className="car2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
