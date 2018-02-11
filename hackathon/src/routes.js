import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";

export default class router extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/Home" component={App} />
        </Switch>
      </Router>
    );
  }
}
