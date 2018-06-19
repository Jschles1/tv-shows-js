import React, { Component } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <Button color="google plus" href="/auth/google">
            <Icon name="google" /> Log In With Google 
          </Button>
        );
      default:
        return (
          <Button basic href="/api/logout">
            Log Out
          </Button>
        );
    }
  }

  render() {
    return (
      <Menu>
        <Menu.Item header>TV Shows</Menu.Item>
        <Menu.Item position="right">
          {this.renderContent()}
        </Menu.Item>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
