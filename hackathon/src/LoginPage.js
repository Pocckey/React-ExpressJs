import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class LoginPage extends Component {
  constuctor() {
    this.login = this.login.bind(this);
  }

  login() {
    //authenticate yada yada...
  }

  render() {
    return (
      <div>
        <label>
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <Route
          render={({ history }) => (
            <button
              type="button"
              onClick={() => {
                history.push("/ShelterPage");
              }}
            >
              Login
            </button>
          )}
        />
      </div>
    );
  }
}
