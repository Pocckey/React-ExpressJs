import React, { Component } from "react";
import { greatPlaceStyle } from "./greatPlaceStyle";
import PropTypes from "prop-types";

export default class Marker extends Component {
  static propTypes = {
    text: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    vacancy: PropTypes.number,
  };
  render() {
    return (
      <div style={greatPlaceStyle}>
        <span style={{ marginTop: -10, marginLeft: 6, position: "absolute" }}>
          {this.props.text}({this.props.vacancy})
        </span>
      </div>
    );
  }
}
