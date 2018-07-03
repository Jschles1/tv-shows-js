import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/shows/new">Add Show</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shows: state.shows };
}

export default connect(mapStateToProps, actions)(Dashboard);