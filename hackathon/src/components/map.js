import React, { Component } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import Marker from "./marker";

export default class Map extends Component {
  static propTypes = {
    shelters: PropTypes.array,
  };

  contructor() {
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick() {}

  render() {
    const defaultProps = {
      center: { lat: 49.28, lng: -123.08 },
      zoom: 13,
    };

    const markers = this.props.shelters.map(marker => (
      <Marker
        key={marker.sId}
        text={marker.sName}
        lat={marker.lat}
        lng={marker.lng}
        vacancy={marker.unoccupiedRooms}
        onChildClick={this.onMarkerClick(this)}
      />
    ));

    return (
      <GoogleMapReact
        bootstrapURLKeys={{
          key: ["AIzaSyA0TLgdKpm50-ZfE3US69WM3wFgpO06KSQ"],
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
    );
  }
}
