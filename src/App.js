import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import SIH2024Page from "./pages/SIH2024Page";
import AboutSIHPage from "./pages/AboutSIHPage";
import SIH2023Page from "./pages/SIH2023Page";
import ProblemStatementsPage from "./pages/ProblemStatementPage";
import ComingSoonResultPage from "./pages/ComingSoonResultPage";
import PreviousYearGrandFinalePage from "./pages/PreviousYearGrandFinalePage";
import PreviousYearWinnersPage from "./pages/PreviousYearWinnersPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";

// Admin Pages
import InboxAdmin from "./pages/adminPages/InboxAdmin";
import PSAdmin from "./pages/adminPages/PSAdmin";
import SelectedTeamsAdmin from "./pages/adminPages/SelectedTeamsAdmin";
import RegisteredTeamsAdmin from "./pages/adminPages/RegisteredTeamsAdmin";
import ContactAdmin from "./pages/adminPages/ContactAdmin";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route exact path="/sih 2024" Component={SIH2024Page} />
        <Route exact path="/about" Component={AboutSIHPage} />
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

        {/* Admin Pages */}
        <Route path="/admin" element={<InboxAdmin />} />
        <Route path="/ps-admin" element={<PSAdmin />} />
        <Route path="/registered teams" element={<RegisteredTeamsAdmin />} />
        <Route path="/selected teams" element={<SelectedTeamsAdmin />} />
        <Route path="/user-messages" element={<ContactAdmin />} />

        {/* Error page */}
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
};

export default App;
