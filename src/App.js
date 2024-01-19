import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SIH2024Page from "./pages/SIH2024Page";
import AboutSIHPage from "./pages/AboutSIHPage";
import SIH2023Page from "./pages/SIH2023Page";
import InstructionsPage from "./pages/InstructionPage";
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
        <Route exact path="/sih 2024" Component={SIH2024Page} />
        <Route exact path="/about" Component={AboutSIHPage} />
        <Route path="/explore" Component={SIH2023Page} />
        <Route path="/instructions" Component={InstructionsPage} />
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
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
};

export default App;
