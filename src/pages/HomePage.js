import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import TopSlider from "../components/home_components/TopSlider";
import Footer from "../components/other/Footer";
import HomePageHeader from "../components/home_components/HomePageHeader";
import ProcessFlow from "../components/home_components/ProcessFlow";
import FAQs from "../components/home_components/FAQs";
// import PatronsGallery from "../components/home_components/PatronsGallery";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <TopSlider />
      <HomePageHeader />
      <ProcessFlow />
      {/* <PatronsGallery /> */}
      <FAQs />
      <Footer />
    </>
  );
};

export default HomePage;
