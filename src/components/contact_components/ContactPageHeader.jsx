import React from "react";
import "../../stylesheets/ContactUsStyle.css";

const ContactPageHeader = () => {
  return (
    <>
      <section className="contact">
        <div className="container">
          <h3 class="contact-title pad-15">HAVE YOU ANY QUESTION?</h3>
          <h4 class="contact-sub-title pad-15">
            WE ARE ALWAYS AT YOUR SERVICES
          </h4>

          <div class="row">
            {/* <!-- Contact Info item --> */}
            <div class="contact-info-item pad-15">
              <div class="icon">
                <i class="fa fa-phone"></i>
              </div>
              <h4>Helpline Number</h4>
              <p>+91 0000000000</p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div class="contact-info-item pad-15">
              <div class="icon">
                <i class="fa fa-map"></i>
              </div>
              <h4>Address</h4>
              <p>City, Pin Code, State, Country</p>
            </div>

            {/* <!-- Contact Info item --> */}
            <div class="contact-info-item pad-15">
              <div class="icon">
                <i class="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>xyz@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPageHeader;
