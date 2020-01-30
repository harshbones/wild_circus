import React, { useState, useEffect } from "react";
import "../../stylesheets/components/SignUp.css";

const SignUp = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    if (showSignUp) {
      document.getElementById("modal-SignUp").style.display = "flex";
    } else {
      document.getElementById("modal-SignUp").style.display = "none";
    }
  });

  return (
    <div>
      <button className="button-SignUp" onClick={() => setShowSignUp(true)}>
        Sign Up
      </button>

      <div id="modal-SignUp" className="modal-SignUp">
        <div class="box-SignUp">
          <div className="title-close">
            <h2>Sign Up</h2>
            <button className="box-close" onClick={() => setShowSignUp(false)}>
              x
            </button>
          </div>
          <form>
            <label>Email :</label>
            <input type="email"></input>
            <label>First Name :</label>
            <input type="text"></input>
            <label>Last Name :</label>
            <input type="text"></input>
            <label>Location :</label>
            <select name="location">
              <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
              <option value="Bourgogne-Franche-Comté">
                Bourgogne-Franche-Comté
              </option>
              <option value="Bretagne">Bretagne</option>
              <option value="Centre-Val de Loire">Centre-Val de Loire</option>
              <option value="Corse">Corse</option>
              <option value="Grand Est">Grand Est</option>
              <option value="Hauts-de-France">Hauts-de-France</option>
              <option value="Île-de-France">Île-de-France</option>
              <option value="Normandie">Normandie</option>
              <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
              <option value="Occitanie">Occitanie</option>
              <option value="Pays de la Loire">Pays de la Loire</option>
              <option value="Provence-Alpes-Côte d'Azur">
                Provence-Alpes-Côte d'Azur
              </option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Martinique">Martinique</option>
              <option value="Guyane">Guyane</option>
              <option value="La Réunion">La Réunion</option>
              <option value="Mayotte">Mayotte</option>
            </select>
            <button
              type="button"
              onClick={() =>
                window.location.replace("http://localhost:3000/acts")
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
