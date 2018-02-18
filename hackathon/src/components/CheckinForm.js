import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default class CheckinForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.roomInput = this.roomInput.bind(this);
    this.state = {
      dropdownOpen: false,
      roomInput: 0,
      data: [],
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  roomInput(val) {
    console.log(this.state.roomInput);
    this.setState({
      roomInput: this.state.roomInput + val,
    });
  }

  select(event) {
    console.log(event.target.innerText);
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText,
    });
  }

  onSubmit = () => {
    if (this.state.value) {
      const ele = this.state.data.find(res => {
        if (res.sName.trim() === this.state.value.trim()) {
          return res.sId;
        }
      });
      return axios
        .post("/update", {
          sId: ele.id,
          bookedRooms: this.state.roomInput > 0 ? this.state.roomInput : 0,
          freedRooms: this.state.roomInput < 0 ? -1 * this.state.roomInput : 0,
        })

        .then(() => {
          console.log("Working");
        })

        .catch(() => {
          console.log("Failed");
        });
    }
  };

  getLocations() {
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

  componentDidMount() {
    this.getLocations();
  }

  render() {
    // const locationA = this.state.data[0] || this.state.data[0].sName || locationA;
    console.log(this.state.data[0]);
    return (
      <Form>
        {this.state.data[0] && (
          <div>
            <FormGroup>
              <Label>
                Name:
                <Input type="text" name="name" />
              </Label>
            </FormGroup>
            <FormGroup>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>Location</DropdownToggle>
                <DropdownMenu>
                  {this.state.data.map(i => {
                    return (
                      <DropdownItem key={i.sId} onClick={this.select}>
                        {i.sName}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </Dropdown>
            </FormGroup>

            <Button onClick={() => this.roomInput(1)}> + </Button>
            <span>{this.state.roomInput}</span>
            <Button onClick={() => this.roomInput(-1)}> - </Button>

            <Button onClick={this.onSubmit} value="Submit">
              {" "}
              Submit{" "}
            </Button>
          </div>
        )}
      </Form>
    );
  }
}
