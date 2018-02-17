import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import ShelterPage from "./ShelterPage";

export default class router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/ShelterPage" component={ShelterPage} />
        </Switch>
      </Router>
    );
  }
}
