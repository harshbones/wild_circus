import React, { useEffect } from "react";
import Menu from "../components/Menu/Menu";
import "../stylesheets/pages/Wilders.css";
import axios from "axios";

const Wilders = () => {
  const [state, setState] = React.useState([
    {
      wilder_id: "0",
      firstname: "0",
      lastname: "0",
      nickname: "0",
      description: "0"
    }
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/wilders")
      .then(response => setState(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="Dashboard">
      <Menu />
      <div className="Wilders">
        <div className="Title">Wilders</div>
        {state.map(wilder => {
          return (
            <div className="Wilder">
              <div className="Wilder-Name">
                {wilder.firstname} {wilder.lastname}
              </div>
              <div className="Wilder-Nickname">{wilder.nickname}</div>
              <div className="Wilder-Description">{wilder.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wilders;
