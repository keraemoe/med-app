import React from 'react';
import s from '../Header/header.module.css'
import cn from 'classnames'

const Header = () => {
    return (
        <div>
            <header>
                <div className={s.container}>
                    <div className={s.header}>
                        <nav className={s.nav_bar}>
                            <div className={s.logo}>Hospital <a className={s.second_tag}>logo</a></div>
                            <ul className={s.navs_ul}>
                                <li><a className={s.navs} href="news.asp">News</a></li>
                                <li><a className={s.navs} href="contact.asp">Contact</a></li>
                                <li><a className={s.navs} href="about.asp">About</a></li>
                                <li><a className={s.navs} href="default.asp">Home</a></li>
                            </ul>
                            <div className={s.auth}>
                                <button className={s.log} role="button">Log In</button>
                                <button className={s.reg} role="button">Sign Up</button>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;