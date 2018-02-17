import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Child extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>
            Name:
            <Input type="text" name="name" />
          </Label>
        </FormGroup>
        <FormGroup />
        <Input type="submit" value="Submit" />
      </Form>
    );
  }
}
