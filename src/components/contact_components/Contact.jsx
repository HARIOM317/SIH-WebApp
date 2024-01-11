import React from "react";
import "../../stylesheets/ContactUsStyle.css";
import Lottie from "lottie-react";
import ContactSupport from "../../animations/contact_us.json"

const Contact = () => {
  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          {/* Contact Form */}
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side Part */}
                <div className="contact-left-side col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">Contact Us</h1>

                  <figure>
                    <Lottie
                      loop={true}
                      animationData={ContactSupport}
                      className="lottie-animation"
                    />
                  </figure>
                </div>

                {/* Right Side Part */}
                <div className="contact contact-right-side col-12 col-lg-7">
                  <form method="POST">
                    {/* first row */}
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* second row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* third row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <textarea
                          placeholder="Message"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="my-btn w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
