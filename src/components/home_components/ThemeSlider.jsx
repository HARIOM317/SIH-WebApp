import React, { useState } from "react";
import sihThemesAPI from "../../APIs/sihThemesAPI";
import { sliderSettings } from "../../utils/common";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const ThemeSlider = () => {
  const [data] = useState(sihThemesAPI);

  return (
    <>
      <section className="themes container">
        <div className="paddings innerWidth theme-container">
          <div className="theme-head flexColStart">
            <span className="primaryText">SIH Themes</span>
          </div>

          <Swiper {...sliderSettings}>
            {/* Buttons for slider */}

            <SliderButtons />

            {data.map((element) => {
              return (
                <SwiperSlide key={element.id}>
                  <div className="flexColCenter theme-card">
                    <img src={element.logo} alt="Announcement Logo" />
                    <span className="primaryText">{element.themeName}</span>
                    <span>{element.description}</span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default ThemeSlider;

const SliderButtons = () => {
  // useSwiper Hook
  const swiper = useSwiper();

  return (
    <div className="slider-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
