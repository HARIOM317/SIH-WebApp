import React from "react";
import "../../stylesheets/FooterStyle.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* First Column */}
                <div className="col-6 col-lg-3">
                  <h2>SIH</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">About SIH</a>
                    </li>
                    <li>
                      <a href="/">Process Flow</a>
                    </li>
                    <li>
                      <a href="/">Timeliness</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>

                {/* Second Column */}
                <div className="col-6 col-lg-3">
                  <h2>Participants</h2>
                  <ul>
                    <li>
                      <a href="/">Instructions</a>
                    </li>
                    <li>
                      <a href="/">How to Apply</a>
                    </li>
                    <li>
                      <a href="/">Problem Statements</a>
                    </li>
                    <li>
                      <a href="/">Result</a>
                    </li>
                    <li>
                      <a href="/">FAQs</a>
                    </li>
                  </ul>
                </div>

                {/* Third Column */}
                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="/">+91 12345 12345</a>
                    </li>
                    <li>
                      <a href="/">sih2024@gmail.com</a>
                    </li>
                    <li>
                      <a href="/">City, Street - Pin Code</a>
                    </li>
                  </ul>
                </div>

                {/* Forth Column */}
                <div className="col-6 col-lg-3">
                  <h2>Social</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/instagram.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/facebook.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/twitter.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/whatsapp.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-4">
                <p className="paragraph text-center w-100">
                  © Copyright SIH-2024. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
