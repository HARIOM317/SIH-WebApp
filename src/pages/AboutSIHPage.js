import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import HomePageHeader from "../components/home_components/HomePageHeader";
import ProcessFlow from "../components/home_components/ProcessFlow";

const AboutSIHPage = () => {
  return (
    <>
      <Navbar />
      <HomePageHeader />
      <ProcessFlow />
      <Footer />
    </>
  );
};

export default AboutSIHPage;
