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
        {this.props.text}({this.props.vacancy})
      </div>
    );
  }
}
