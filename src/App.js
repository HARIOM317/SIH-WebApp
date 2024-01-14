import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExploreSIHPage from "./pages/ExploreSIHPage";
import InstructionsPage from "./pages/InstructionPage";
import ProblemStatementsPage from "./pages/ProblemStatementPage";
import ResultPage from "./pages/ResultPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/explore" Component={ExploreSIHPage} />
        <Route path="/instructions" Component={InstructionsPage} />
        <Route path="/problem statements" Component={ProblemStatementsPage} />
        <Route path="/result" Component={ResultPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </>
  );
};

export default App;
