import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import ShelterPage from "./ShelterPage";
import MapsPage from "./MapsPage";

export default class router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/ShelterPage" component={ShelterPage} />
          <Route path="/MapsPage" component={MapsPage} />
        </Switch>
      </Router>
    );
  }
}
