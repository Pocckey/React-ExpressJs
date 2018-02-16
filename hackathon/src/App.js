import React, { Component } from "react";
import axios from "axios";
import logo from "./img/logo.svg";
import Child from "./components/TestDiv";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      call: [],
    };
  }

  componentDidMount() {
    // Leaving this commented out for initialization API calls
    //this.ApiCall();
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">{this.state.call}</h1>
        </header>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child />
      </div>
    );
  }

  //TODO remove this
  ApiCall() {
    return axios
      .get("/API")
      .then(res => {
        const title = res.data.title;
        this.setState({ call: title });
      })
      .catch(err => {
        console.log(err);
        this.setState({ call: "NoAPI" });
      });
  }
}
