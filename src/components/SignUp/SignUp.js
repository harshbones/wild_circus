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
            <input type="select"></input>
            <input type="submit" value="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
