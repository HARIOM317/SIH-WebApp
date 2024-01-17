import React from "react";
import { TypeAnimation } from "react-type-animation";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePageHeader = () => {
  return (
    <>
      <section className="homepage">
        <h1 className="hello container">What is SIH?</h1>
        <section className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h3 className="sih-offers">
                SIH is{" "}
                <TypeAnimation
                  className="typing"
                  sequence={[
                    "an Innovative Hackathon",
                    2000,
                    "Organized by SISTec",
                    2000,
                  ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
              </h3>

              <p className="main-header-para">
                Hey, tech enthusiasts! Ready to dive into the SISTec
                Innovation Hackathon? Imagine a day filled with coding
                adventures, problem-solving highs, and a chance to showcase your
                genius. Join us from Your College for an incredible competition
                that's not just about code – it's about sparking innovation.
                Connect with industry experts, win cool prizes, and level up
                your skills. Whether you're a seasoned coder or just starting,
                this is your moment to shine. Save the date for a day of coding,
                collaboration, and celebrating your awesomeness! See you there!
              </p>

              <button className="my-btn">Register Now</button>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-header-section-images order-md-first order-sm-first">
              {/* Embed Youtube Video */}
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/dGBt8_QUguY?si=CaWBvg9Nzhp8oDAs&rel=0"
                  title="SISTec Innovation Hackathon 2.0"
                  allowFullScreen={false}
                  className="video"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePageHeader;
