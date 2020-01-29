import React, { useState, useEffect } from "react";
import "../../stylesheets/components/SignIn.css";

const SignIn = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  useEffect(() => {
    if (showSignIn) {
      document.getElementById("modal-SignIn").style.display = "flex";
    } else {
      document.getElementById("modal-SignIn").style.display = "none";
    }
  });

  return (
    <div>
      <button className="button-SignIn" onClick={() => setShowSignIn(true)}>
        Sign In
      </button>
      <div id="modal-SignIn" className="modal-SignIn">
        <div class="box-SignIn">
          <div className="title-close">
            <h2>Sign In</h2>
            <button className="box-close" onClick={() => setShowSignIn(false)}>
              x
            </button>
          </div>
          <form>
            <label>Email :</label>
            <input type="email"></input>
            <label>Password :</label>
            <input type="password"></input>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
