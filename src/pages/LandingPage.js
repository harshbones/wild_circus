import React from "react";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

import "../stylesheets/pages/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <h1>THE WILD CIRCUS</h1>
      <div className="Sign-Buttons">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default LandingPage;
