import React, { useState } from "react";
import { advisoryCommitteeDataAPI } from "../../APIs/patronsDataAPI";

const AdvisoryCommitteeCard = () => {
  const [advisoryCommitteeData] = useState(advisoryCommitteeDataAPI);

  return (
    <>
      <section className="container patron-card">
        {/* Advisory Committee Section */}
        <div className="chief-patrons-section">
          <div className="committee-top">
            <img
              src="./images/community_images/advisory_committee.png"
              alt="Advisory Committee"
            />
            <h2>ADVISORY-COMMITTEE</h2>
            <span>Here are some of our Advisors</span>
            <span className="bottom-bar"></span>
          </div>

          <div className="row">
            {advisoryCommitteeData.map((element) => {
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
                        <i class="bx bxl-linkedin"></i>
                      </a>
                      <a
                        href={element.facebookProfile}
                        style={{ background: "#3b5998" }}
                        className="link"
                      >
                        <i class="bx bxl-facebook"></i>
                      </a>
                      <a
                        href={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                        className="link"
                      >
                        <i class="bx bxl-instagram"></i>
                      </a>
                      <a
                        href={element.twitterProfile}
                        style={{ background: "#03a9f4" }}
                        className="link"
                      >
                        <i class="bx bxl-twitter"></i>
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

export default AdvisoryCommitteeCard;
