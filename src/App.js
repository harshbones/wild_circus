import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Acts from "./pages/Acts";
import Wilders from "./pages/Wilders";
import Admin from "./pages/Admin";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/acts" component={Acts} />
        <Route path="/wilders" component={Wilders} />
        <Route path="/admin" component={Admin} />
      </div>
    </BrowserRouter>
  );
};

export default App;
