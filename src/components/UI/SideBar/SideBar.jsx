import React from "react";
import { scaleRotate as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default class Sidebar extends React.Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Menu
        isOpen={this.state.menuOpen}
        right
        fallDown
        onStateChange={state => this.handleStateChange(state)}
      >
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/Entry"
        >
          Entry
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/Contacts"
        >
          Contact
        </Link>
      </Menu>
    );
  }
}
