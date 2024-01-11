import React from "react";
import "../stylesheets/ResultPageStyle.css";
import Navbar from "../components/other/Navbar";
import Footer from "../components/other/Footer";
import Lottie from "lottie-react";
import ComingSoonResult from "../animations/coming_soon.json";

const ResultPage = () => {
  return (
    <>
      <Navbar />
      <section className="coming-soon">
        <Lottie
          loop={true}
          animationData={ComingSoonResult}
          className="lottie-animation"
        />
      </section>
      <Footer />
    </>
  );
};

export default ResultPage;
