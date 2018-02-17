import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, TabPane, Row, Col } from "reactstrap";
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
        <h1>MapsPage</h1>
        <TabPane>
          <Row>
            <Col sm="6">
              <Route
                render={({ history }) => (
                  <Button
                    type="button"
                    onClick={() => {
                      history.push("/ShelterPage");
                    }}
                  >
                    ShelterPage
                  </Button>
                )}
              />
            </Col>
          </Row>
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
        console.log(err);
        throw new Error(err);
      });
  }
}
