import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      call: []
    }
  }

  componentDidMount(){
    console.log("api call");
    axios.get('/API').then((res)=>{
        const title = res.data.title;
        this.setState({call: title})
      }).catch((err)=>{
        console.log(err);
      });
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
      </div>
    );
  }

  ApiCall = function(){
  return
  }
}
