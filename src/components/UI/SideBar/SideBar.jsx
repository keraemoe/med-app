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
<<<<<<< HEAD:src/components/SideBare/SideBare.jsx
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">Главная
=======
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
          to="/"
        >
          Home
>>>>>>> AUTH:src/components/UI/SideBar/SideBar.jsx
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
<<<<<<< HEAD:src/components/SideBare/SideBare.jsx
          to="/entry"
        >
          Как записаться
=======
          to="/Entry"
        >
          Entry
>>>>>>> AUTH:src/components/UI/SideBar/SideBar.jsx
        </Link>
        <Link
          onClick={() => this.closeMenu()}
          className="menu-item"
<<<<<<< HEAD:src/components/SideBare/SideBare.jsx
          to="/contacts"
        >
          Контакты
=======
          to="/Contacts"
        >
          Contact
>>>>>>> AUTH:src/components/UI/SideBar/SideBar.jsx
        </Link>
      </Menu>
    );
  }
}
