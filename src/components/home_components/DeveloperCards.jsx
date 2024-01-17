import React, { useState } from "react";

const developerDataAPI = [
  {
    id: 1,
    photo: "./images/developer_photos/hariom.jpg",
    name: "Hariom Singh",
    bio: "Frontend Developer",
    phone: "+91 9302765839",
    linkedInProfile: "",
    githubProfile: "",
    instagramProfile: "",
    gmailProfile: "",
  },
  {
    id: 2,
    photo: "./images/developer_photos/hariom.jpg",
    name: "Harsh Kamde",
    bio: "Backend Developer",
    phone: "+91 8085619973",
    linkedInProfile: "",
    githubProfile: "",
    instagramProfile: "",
    gmailProfile: "",
  },
  {
    id: 3,
    photo: "./images/developer_photos/kapil.png",
    name: "Kapil Kumar",
    bio: "Individual Developer",
    phone: "+91 8103519510",
    linkedInProfile: "",
    githubProfile: "",
    instagramProfile: "",
    gmailProfile: "",
  },
];

const DeveloperCards = () => {
  const [data] = useState(developerDataAPI);

  return (
    <>
      <section className="developer patron-card">
        <div className="committee-top">
          <img
            src="./images/developer_photos/developers.png"
            alt="Developers"
          />
          <h2>DEVELOPERS</h2>
          <span>Here are Developers of SIH</span>
          <span className="bottom-bar"></span>
        </div>
        <div className="developer-card">
          {data.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="img-box">
                  <img src={element.photo} alt="SIH Developer" />
                </div>

                <div className="content">
                  <div className="details">
                    <h2>
                      {element.name}
                      <br />
                      <span>{element.bio}</span>
                      <br />
                    </h2>

                    <div className="phone">
                      <span>{element.phone}</span>
                    </div>

                    <div className="social-btn">
                      <a
                        href={element.linkedInProfile}
                        style={{ background: "#0a63bc" }}
                      >
                        <i class="bx bxl-linkedin"></i>
                      </a>

                      <a
                        href={element.githubProfile}
                        style={{ background: "#212121" }}
                      >
                        <i class="bx bxl-github"></i>
                      </a>
                      <a
                        href={element.instagramProfile}
                        style={{ background: "#db1c8a" }}
                      >
                        <i class="bx bxl-instagram"></i>
                      </a>
                      <a
                        href={element.gmailProfile}
                        style={{ background: "#c74039" }}
                      >
                        <i class="bx bxl-gmail"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DeveloperCards;
