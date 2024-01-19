import React, { useState } from "react";
import { patronsDataAPI, chiefPatronsDataAPI } from "../../APIs/patronsDataAPI";

const PatronsCommitteeCard = () => {
  const [chiefPatronsData] = useState(chiefPatronsDataAPI);
  const [patronsData] = useState(patronsDataAPI);

  return (
    <>
      <section className="container patron-card">
        {/* Chief Patrons Section */}
        <div className="chief-patrons-section">
          <div className="committee-top">
            <img src="./images/community_images/vip.png" alt="VIP" />
            <h2>CHIEF PATRONS</h2>
            <span>Here are some chief patrons</span>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            {chiefPatronsData.map((element) => {
              return (
                <>
                  <div className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="image">
                      <img src={element.photo} alt="" className="profile-img" />
                    </div>

                    <div className="text-data">
                      <span className="name">{element.name}</span>
                      <span className="job">{element.bio}</span>
                    </div>

                    <div className="media-buttons">
                      <a
                        href={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                        className="link"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href={element.facebookProfile}
                        style={{ background: "#3b5998" }}
                        className="link"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        className="link"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                      <a
                        href={element.twitterProfile}
                        style={{ background: "#03a9f4" }}
                        className="link"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* Patrons Section */}
        <div className="patrons-section">
          <div className="committee-top">
            <img src="./images/community_images/patron.png" alt="Patrons" />
            <h2>PATRONS</h2>
            <span>Here are some of our patrons</span>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            {patronsData.map((element) => {
              return (
                <>
                  <div className="profile-card col col-12 col-md-6 col-lg-4 col-xl-3">
                    <div className="image">
                      <img src={element.photo} alt="" className="profile-img" />
                    </div>

                    <div className="text-data">
                      <span className="name">{element.name}</span>
                      <span className="job">{element.bio}</span>
                    </div>

                    <div className="media-buttons">
                      <a
                        href={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                        className="link"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href={element.facebookProfile}
                        style={{ background: "#3b5998" }}
                        className="link"
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                      <a
                        href={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        className="link"
                      >
                        <i className="bx bxl-instagram"></i>
                      </a>
                      <a
                        href={element.twitterProfile}
                        style={{ background: "#03a9f4" }}
                        className="link"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PatronsCommitteeCard;
