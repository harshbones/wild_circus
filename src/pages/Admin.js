import React from "react";
import Menu from "../components/Menu/Menu";
import "../stylesheets/pages/Admin.css";

const Admin = () => {
  return (
    <div className="Dashboard">
      <Menu />
      <div className="Admin">
        <div className="Title">Admin</div>
        <div className="AdminAct">
          <div className="AdminAct-Title">Title</div>
          <div className="AdminAct-Date">Date</div>
          <div className="AdminAct-Description">Description</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
