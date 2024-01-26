import React from "react";
import "../stylesheets/HomePageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import FormComponent from "../components/form_components/FormComponent";

const RegistrationPage = () => {
  return (
    <>
      <Navbar />
      <FormComponent />
      <Footer />
    </>
  );
};

export default RegistrationPage;
