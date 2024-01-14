import React from "react";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
// import GlimpsGallery from "../components/explore_sih_components/GlimpsGallery";
import "../stylesheets/ExploreSIHPageStyle.css";

const ExploreSIHPage = () => {
  return (
    <>
      <Navbar />
      <h2 className="margin-top-ultra-max">Explore SIH</h2>
      <Footer />
    </>
  );
};

export default ExploreSIHPage;
