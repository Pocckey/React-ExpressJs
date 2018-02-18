import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, TabPane } from "reactstrap";
import Map from "./components/map";
import axios from "axios";
import "./scss/pages/App.scss";

export default class MapsPage extends Component {
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
      <div>
        <h1 className="text-center">Home finder</h1>
        <TabPane row>
          <Route
            render={({ history }) => (
              <Button
                className="mx-auto"
                type="button"
                onClick={() => {
                  history.push("/ShelterPage");
                }}
              >
                ShelterPage
              </Button>
            )}
          />
        </TabPane>
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
        throw new Error(err);
      });
  }
}
