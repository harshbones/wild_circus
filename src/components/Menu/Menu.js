import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/components/Menu.css";

const Menu = () => {
  return (
    <div className="Menu">
      <div>
        <div className="Menu-link">
          <Link to="/acts">Acts</Link>
        </div>
        <div className="Menu-link">
          <Link to="/wilders">Wilders</Link>
        </div>
        <div className="Menu-link">
          <Link to="/admin">Admin</Link>
        </div>
      </div>
      <div className="Menu-logout">
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Menu;
