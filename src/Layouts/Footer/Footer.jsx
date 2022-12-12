import React, { useState } from "react";
import s from "./footer.module.css";
import facebookIcon from "./images/facebook.png";
import twitterIcon from "./images/twitter.png";
import instagramIcon from "./images/instagram.png";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};


const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
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
            <div class="your-container">
                <svg
                    class="css-waves"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                >
                    <defs>
                        <path
                            id="wave-pattern"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        ></path>
                    </defs>
                    <g class="animated-waves">
                        <use href="#wave-pattern" x="48" y="1" fill="rgb(0, 0, 255,0.5)"></use>
                        <use href="#wave-pattern" x="48" y="3" fill="rgb(106, 90, 205,0.6)"></use>
                        <use href="#wave-pattern" x="48" y="7" fill="rgb(0, 0, 255,0.4)"></use>
                    </g>
                </svg>
            </div>
        </footer>
    );
};

export default Footer;