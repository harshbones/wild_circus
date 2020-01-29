import React from "react";
import Menu from "../components/Menu/Menu";
import "../stylesheets/pages/Admin.css";

const Admin = () => {
  return (
    <div className="Dashboard">
      <Menu />
      <div className="Admin">
        <div className="Title">Admin</div>
      </div>
    </div>
  );
};

export default Admin;
