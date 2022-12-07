import React from "react";
import s from "./footer.module.css";
import facebookIcon from "./images/facebook.png";
import twitterIcon from "./images/twitter.png";
import instagramIcon from "./images/instagram.png";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer id={s.footer}>
            <div className={s.footer__container}>
                <motion.div
                    className={s.block__logo}
                    initial={{ y: "40px", opacity: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    <div className={s.footer__logo}>
                        <h3>
                            Hospital <span>logo</span>
                        </h3>
                    </div>
                    <div className={s.subLogo__titles}>
                        <h4>Card title</h4>
                        <span>
                            Card desription. Lorem ipsum dolor sit <br /> amet, consectetur
                            adipiscing elit. Sit <br /> rhoncus imperdiet nisi.
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className={s.footer__nav}
                    initial={{ y: "50px", opacity: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                >
                    <nav>
                        <ul>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
                <motion.div
                    initial={{ y: "100px", opacity: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className={s.footer__nav}
                >
                    <nav>
                        <ul>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Card title
                                </a>
                            </li>
                        </ul>
                    </nav>
                </motion.div>

                <motion.div
                    initial={{ y: "150px", opacity: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className={s.footer__social}
                >
                    <ul>
                        <li>
                            <h3>Follow Us</h3>
                        </li>
                        <li>
                            <a href="https://facebook.com" target="_blank">
                                <img src={facebookIcon} alt="" />
                            </a>
                        </li>

                        <li>
                            <a href="https://twitter.com" target="_blank">
                                <img src={twitterIcon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank">
                                <img src={instagramIcon} alt="" />
                            </a>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;