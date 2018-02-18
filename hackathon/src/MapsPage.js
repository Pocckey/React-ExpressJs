import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, TabPane } from "reactstrap";

export default class MapsPage extends Component {
  constructor() {
    super();
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
      </div>
    );
  }
}
