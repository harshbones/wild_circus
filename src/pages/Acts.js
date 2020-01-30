import React from "react";
import Menu from "../components/Menu/Menu";
import "../stylesheets/pages/Acts.css";

const Acts = () => {
  return (
    <div className="Dashboard">
      <Menu />
      <div className="Acts">
        <div className="Title">Acts</div>
        <div className="Act">
          <div className="Act-Title">Title</div>
          <div className="Act-Date">Date</div>
          <div className="Act-Description">Description</div>
        </div>
      </div>
    </div>
  );
};

export default Acts;
