import Bg from "../assets/bg.jpg";
import Message from "../components/Message";
const Contact = () => {
  return (
    <>
      <img src={Bg} className="about_bg" alt="bg" />
      {/* heading */}
      <Message page="Contact Us" />
      {/* contact details */}
      <div className="container contact_box py-5">
        <div className="row d-flex align-items-center justify-content-around">
          <div className="col-12 col-lg-4 col-md-4 contact_details">
            <div className="contact_content">
              <h3>Chat to us</h3>
              <p>Our friendly team is here to help.</p>
              <a href="mailto:rohit@gmail.com">rohit@gmail.com</a>
            </div>
            <div className="contact_content">
              <h3>Where we based?</h3>
              <p>Come say hello at our office HQ.</p>
              <a href="#">Noida, Uttar Pradesh, India, 201301</a>
            </div>
            <div className="contact_content">
              <h3>Contact Us</h3>
              <p>Mon-Fri from 10 am to 5 pm.</p>
              <a href="tel:+919287654321">+91 9287654321</a>
            </div>
          </div>
          <div className="col-12 col-lg-8 col-md-8 contact_form">
            <h2>
              Got something in your mind, free fell to send us your thoughts!
            </h2>
            <p className="mb-4 text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos necessitatibus accusantium voluptate!
            </p>
            <form action="https://formspree.io/f/xpzvdeak" method="POST">
              <div className="question">
                <label>01</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name: Rohit Dubey"
                  required
                />
              </div>
              <div className="question">
                <label>02</label>
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail: rohit@gmail.com"
                  required
                />
              </div>
              <div className="question">
                <label>03</label>
                <input
                  type="text"
                  name="message"
                  placeholder="write your message here..."
                />
              </div>
              <button className="btn register text-center mt-5">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
