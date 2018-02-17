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
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="password placeholder"
        />
        <FormGroup />
        <Route
          render={({ history }) => (
            <Button
              type="button"
              onClick={() => {
                history.push("/ShelterPage");
              }}
            >
              Login
            </Button>
          )}
        />
      </Form>
    );
  }
}
