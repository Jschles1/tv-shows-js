import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import { Segment, Form, Button } from 'semantic-ui-react';

class ShowsForm extends Component {
  render() {
    return (
      <div>ShowsForm</div>
    );
  }
}

function mapStateToProps({ shows }) {
  return { shows };
}

export default connect(mapStateToProps, actions)(ShowsForm);