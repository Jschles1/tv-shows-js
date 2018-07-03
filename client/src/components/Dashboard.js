import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return (
      <div>Dashboard</div>
    );
  }
}

function mapStateToProps(state) {
  return { shows: state.shows };
}

export default connect(mapStateToProps, actions)(Dashboard);