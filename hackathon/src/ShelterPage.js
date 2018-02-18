import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, TabPane, Row, Col } from "reactstrap";

export default class ShelterPage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Shetlers</h1>
        <TabPane>
          <Row>
            <Col sm="6">
              <Route
                render={({ history }) => (
                  <Button
                    className="mx-auto"
                    type="button"
                    onClick={() => {
                      history.push("/MapsPage");
                    }}
                  >
                    MapsPage
                  </Button>
                )}
              />
            </Col>
          </Row>
        </TabPane>
      </div>
    );
  }
}
