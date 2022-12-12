import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import { Link } from 'react-router-dom'
import { render } from "@testing-library/react";
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';


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
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    onClick={() => this.closeMenu()}
                    className="menu-item"
                    to="/profile"
                >
                    <span className="avatar-item">
                        <Badge count={1}>
                            <Avatar shape="square" icon={<UserOutlined />} />
                        </Badge>
                    </span>
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
                    Appointment
                </Link>
                <Link
                    onClick={() => this.closeMenu()}
                    className="menu-item"
                    to="/about"
                >
                    About Us
                </Link>
            </Menu>
        );
    }
}