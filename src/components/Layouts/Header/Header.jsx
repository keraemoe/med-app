import { React, useState } from 'react';
import s from '../Header/header.module.css'
import cn from 'classnames'
import { NavLink } from 'react-router-dom';
import Sidebar from '../../UI/SideBar/sidebar';

const Header = () => {
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
                                <li className={s.nav_list}><NavLink className={s.nav_links} to="/">Главная</NavLink></li>
                                <li className={s.nav_list}><NavLink className={s.nav_links} to="/entry">Как записаться</NavLink></li>
                                <li className={s.nav_list}><NavLink className={s.nav_links} to="/contacts">Контакты</NavLink></li>
                            </ul>
                        </nav>
                        <div className={s.auth}>
                            <a><button className={s.log}>Log In</button></a>
                            <a><button className={s.reg}>Sign Up</button></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;