import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Teams from "./components/teams";
import Navbar from "./components/navBar";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/teams" component={Teams} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
