import React, { Component } from "react";

class Square extends Component {
  render() {
    return <button className="Square" />;
  }
}

export default class Calculator extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return <div />;
  }
}
