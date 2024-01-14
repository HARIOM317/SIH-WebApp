import React, { useState } from "react";
import sliderAPI from "../../APIs/sliderAPI";

const TopSlider = () => {
  const [image] = useState(sliderAPI);
  return (
    <>
      <div className="margin-top-max">
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {image.map((item) => {
              return (
                <>
                  <div class={item.classes}>
                    <img
                      src={item.imagePath}
                      class="d-block w-100"
                      alt="Card"
                    />
                  </div>
                </>
              );
            })}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopSlider;
