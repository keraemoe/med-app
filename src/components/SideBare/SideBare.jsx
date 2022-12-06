import React from "react";
import { slide as Menu } from "react-burger-menu";
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
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">Главная
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/entry"
        >
          Как записаться
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/contacts"
        >
          Контакты
        </Link>
      </Menu>
    );
  }
}
