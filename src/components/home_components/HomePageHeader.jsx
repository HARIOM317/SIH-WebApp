import React from "react";
import Lottie from "lottie-react";
import InnovationAnimation from "../../animations/innovation.json";
import { TypeAnimation } from "react-type-animation";

const HomePageHeader = () => {
  return (
    <>
      <header className="homepage">
        <h1 class="hello container">What is SIH?</h1>
        <section className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h3 class="sih-offers">
                SIH is{" "}
                <TypeAnimation
                  className="typing"
                  sequence={[
                    "An Innovative Hackathon",
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                quisquam vel exercitationem esse libero rem voluptatem corrupti
                assumenda sint, in cum eum repellendus. Magni nam illum
                provident, quos dolorum aut.
              </p>

              <button className="my-btn">Register Now</button>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-header-section-images order-md-first order-sm-first">
              <Lottie
                className="animation"
                loop={true}
                animationData={InnovationAnimation}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default HomePageHeader;
