import { React, useState } from 'react';
import s from '../Header/header.module.css'
import cn from 'classnames'
import { NavLink } from 'react-router-dom';
import Sidebar from '../../UI/SideBar/sidebar';
import { changeAuth, changeStatusAuthed, changeTypeOfModal, unUhangeAuth } from '../../Redux/Slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Badge } from 'antd';

const Header = () => {
    const { isAuthed } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const handleRemove = () => {
        localStorage.clear();
    }
    return (
        <div>
            <header>
                <div className={s.burger}>
                    <Sidebar />
                </div>
                <div className={s.container}>
                    <div className={s.header_nav}>
                        <NavLink to="/">
                            <a className={s.logo}>Hospital <span>logo</span> </a>
                        </NavLink>
                        <nav className={s.nav}>
                            <ul className={s.nav_list}>
                                <li className={s.nav_list}><NavLink className={s.nav_links} to="/">Home</NavLink></li>
                                <li className={s.nav_list}><NavLink className={s.nav_links} to="/entry">Appointment</NavLink></li>
                                <li className={s.nav_list}><NavLink className={s.nav_links} to="/about">About US</NavLink></li>
                            </ul>
                        </nav>
                        <div className={s.auth}>
                            <a><button className={s.log} onClick={() => {
                                dispatch(changeTypeOfModal('login'))
                                dispatch(changeStatusAuthed(true))
                            }}>Log In</button></a>
                            {
                                isAuthed ?
                                    <a><button className={s.reg} onClick={() => {
                                        dispatch(changeTypeOfModal('register'))
                                        dispatch(changeStatusAuthed(true))
                                    }}>Sign Up</button>
                                    </a>
                                    :
                                    <a><button className={s.reg} onClick={() => {
                                        dispatch(unUhangeAuth())
                                        handleRemove()
                                    }}>Log out</button>
                                    </a>
                            }

                            <NavLink to='/profile'>
                                <div>
                                    <span className="avatar-item">
                                        <Badge count={1}>
                                            <Avatar shape="square" icon={<UserOutlined />} />
                                        </Badge>
                                    </span>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;