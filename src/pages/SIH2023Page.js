import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import "../stylesheets/ExploreSIHPageStyle.css";
import Winners from "../components/explore_sih_components/Winners";
import TopBanner from "../components/explore_sih_components/TopBanner";
import ThemeSlider from "../components/home_components/ThemeSlider";
import GlimpseGallery from "../components/explore_sih_components/GlimpseGallery";

const SIH2023Page = () => {
  return (
    <>
      <Navbar />
      <TopBanner />
      <ThemeSlider />
      <Winners />
      <GlimpseGallery />
      <Footer />
    </>
  );
};

export default SIH2023Page;
