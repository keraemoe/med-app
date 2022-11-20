import React from 'react';
import s from '../Header/header.module.css'
import cn from 'classnames'

const Header = () => {
    return (
        <div>
            <header>
                <div className={s.container}>
                    {/* Header Nav */}
                    <div className={s.header_nav}>
                        <a className={s.logo} href="#">Hospital <span>logo</span> </a>
                        <nav className={s.nav}>
                            <ul className={s.nav_list}>
                                <li className={s.nav_list}><a href="#" className={s.nav_links}>Главная</a></li>
                                <li className={s.nav_list}><a href="#" className={s.nav_links}>Как записаться</a></li>
                                <li className={s.nav_list}><a href="#" className={s.nav_links}>Контакты</a></li>
                            </ul>
                        </nav>
                        <div className={s.auth}>
                            <a href="#"><button className={s.log}>Log In</button></a>
                            <a href="#"><button className={s.reg}>Sign Up</button></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;