import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import AboutSIHPage from "./pages/AboutSIHPage";
import Timeline from "./pages/Timeline";
import Schedule from "./pages/Schedule";
import SIH2023Page from "./pages/SIH2023Page";
import ProblemStatementsPage from "./pages/ProblemStatementPage";
import ComingSoonResultPage from "./pages/ComingSoonResultPage";
import PreviousYearGrandFinalePage from "./pages/PreviousYearGrandFinalePage";
import PreviousYearWinnersPage from "./pages/PreviousYearWinnersPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/about" Component={AboutSIHPage} />
        <Route path="/timeline" Component={Timeline} />
        <Route path="/schedule" Component={Schedule} />
        <Route path="/explore" Component={SIH2023Page} />
        <Route path="/problem statements" Component={ProblemStatementsPage} />
        <Route
          path="/previous year grand finale"
          Component={PreviousYearGrandFinalePage}
        />
        <Route
          path="/previous year winners"
          Component={PreviousYearWinnersPage}
        />
        <Route path="/result" Component={ComingSoonResultPage} />
        <Route path="/winners" Component={ComingSoonResultPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/register" Component={RegistrationPage} />

        {/* Error page */}
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
};

export default App;
