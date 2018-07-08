import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/deckActions';
import { bindActionCreators } from 'redux';
import { Segment, Form, Button } from 'semantic-ui-react';

class ShowsForm extends Component {
  state = {
    name: '',
    network: '',
    weekday: '',
    showtime: ''
  };

  handleOnChange = (event) => {
    const { name, value } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    // Submit show
  }

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