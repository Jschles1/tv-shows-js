import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import ShowsForm from "./ShowsForm";
import ShowsFormConfirm from "./ShowsFormConfirm";

class ShowsNew extends Component {
  state = {
    displayConfirm: false
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
    return this.state.displayConfirm ? (
      <ShowsFormConfirm confirmNewShow={this.confirmNewShow} />
    ) : (
      <ShowsForm handleOnSubmit={this.handleOnSubmit} />
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
