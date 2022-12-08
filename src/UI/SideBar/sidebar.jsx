import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react";


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
                onStateChange={state => this.handleStateChange(state)}>
                <Link
                    onClick={() => this.closeMenu()}
                    className="menu-item"
                    to="/profile"
                >
                    <img src=''></img>
                    Profile
                </Link >
                <Link
                    onClick={() => this.closeMenu()}
                    className="menu-item"
                    to="/"
                >
                    Home
                </Link >
                <Link
                    onClick={() => this.closeMenu()}
                    className="menu-item"
                    to="/Entry"
                >
                    How to make an appointment?
                </Link>
                <Link
                    onClick={() => this.closeMenu()}
                    className="menu-item"
                    to="/medcard"
                >
                    MedCard
                </Link>
            </Menu>
        );
    }
}