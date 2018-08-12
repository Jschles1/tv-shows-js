import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Button } from "semantic-ui-react";
import * as actions from "../actions";

class ShowsFormConfirm extends Component {
  render() {
    const { name, network, weekday, showtime, confirmNewShow } = this.props;
    return (
      <Segment>
        <div>
          <h2>Confirm Show to be Added:</h2>
        </div>
        <div>
          <p>Name: {name}</p>
          <p>Network: {network}</p>
          <p>Weekday: {weekday}</p>
          <p>Time: {showtime}</p>
        </div>
        <Button onClick={confirmNewShow}>Confirm</Button>
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
)(ShowsFormConfirm);