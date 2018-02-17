import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Child from "./components/TestDiv";
import Map from "./components/map";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      call: [],
      data: [],
    };
  }

  componentDidMount() {
    this.ApiCall();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.call}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child />
        <div className="map-container">
          <Map shelters={this.state.data} />
        </div>
      </div>
    );
  }

  ApiCall() {
    return axios
      .get("/shelter")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
        throw new Error(err);
      });
  }
}
