import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Segment, Form, Button } from "semantic-ui-react";
import ShowsFormConfirm from "./ShowsFormConfirm";

class ShowsNew extends Component {
  state = {
    displayConfirm: false,
    name: "",
    network: "",
    weekday: "",
    showtime: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = event => {
    this.setState({
      displayConfirm: true
    });
  };

  confirmNewShow = event => {
    this.props.actions.submitNewShow(this.state);
  };

  render() {
    let { name, network, weekday, showtime, displayConfirm } = this.state;
    return displayConfirm ? (
      <ShowsFormConfirm confirmNewShow={this.confirmNewShow} />
    ) : (
      <Segment>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group widths="equal">
            <Form.Input value={name} onChange={this.handleOnChange} name="name" label="Show Name" placeholder="Show Name" />
            <Form.Input value={network} onChange={this.handleOnChange} name="network" label="Network" placeholder="Network" />
            <Form.Input value={weekday} onChange={this.handleOnChange} name="weekday" label="Weekday" placeholder="Weekday" />
            <Form.Input value={showtime} onChange={this.handleOnChange} name="showtime" label="Showtime" placeholder="Showtime" />
          </Form.Group>
          <Button type="submit">Add Show</Button>
        </Form>
      </Segment>
    );
  }
}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(
  mapStateToProps,
  actions
)(ShowsNew);
