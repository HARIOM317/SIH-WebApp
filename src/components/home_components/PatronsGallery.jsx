import React, { useState } from "react";
import patronsGalleryAPI from "../../APIs/patronsGalleryAPI";

const PatronsGallery = () => {
  const [data] = useState(patronsGalleryAPI);
  return (
    <>
      <section class="project section" id="projects">
        <div class="container">
          <div class="row my-cards">
            {data.map((element) => {
              return (
                <>
                  <div class="project-item padd-15" key={element.id}>
                    <div class="project-item-inner shadow-dark">
                      <div class="project-img">
                        <img src={element.photo} alt="" />

                        <div class="layer">
                          <h3>{element.name}</h3>
                          <p>{element.bio}</p>
                          <div className="row">
                            <div class="col">
                              <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                            <div class="col">
                              <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default PatronsGallery;
