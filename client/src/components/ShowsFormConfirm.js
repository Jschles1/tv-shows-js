import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class ShowsFormConfirm extends Component {
  render() {
    return (
      <div>ShowsFormConfirm</div>
    );
  }
}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(
  mapStateToProps,
  actions
)(ShowsFormConfirm);