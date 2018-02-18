import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class LoginPage extends Component {
  constuctor() {
    this.login = this.login.bind(this);
  }

  login() {
    //authenticate yada yada...
  }

  render() {
    return (
      <Form style={{ marginTop: 200 }}>
        <h1 className="text-center"> Home Shelter Finder </h1>
        <FormGroup row style={{ marginTop: 50 }}>
          <Label className="text-center col-md-12" for="exampleEmail">
            Email
          </Label>
          <Input
            className="col-md-2 mx-auto"
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Email"
          />
        </FormGroup>
        <FormGroup row>
          <Label className="text-center col-md-12" for="examplePassword">
            Password
          </Label>
          <Input
            className="col-md-2 mx-auto"
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter password"
          />
        </FormGroup>
        <FormGroup row>
          <Route
            render={({ history }) => (
              <Button
                className="mx-auto"
                type="button"
                onClick={() => {
                  history.push("/MapsPage");
                }}
              >
                Login
              </Button>
            )}
          />
        </FormGroup>
      </Form>
    );
  }
}
