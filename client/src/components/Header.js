import React, { Component } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";

class Header extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item header>TV Shows</Menu.Item>
        <Menu.Item position="right">
          <Button 
            color="google plus"
            href="/auth/google"
          >
            <Icon name="google" /> Log In With Google 
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Header;
