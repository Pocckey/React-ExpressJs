import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class Map extends Component {
  render() {
    const defaultProps = {
      center: { lat: 49.2827, lng: -123.1207 },
      zoom: 11,
    };
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: ["AIzaSyA0TLgdKpm50-ZfE3US69WM3wFgpO06KSQ"] }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    );
  }
}
