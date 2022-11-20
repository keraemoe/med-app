import React from 'react';
import s from './Hero.module.css'

import Group from '../../../assets/Group.png'
import SearchGroup from '../../../assets/SearchGroup.png'

const Hero = () => {
    return (
        <section id={s.hero}>
            <div className={s.container}>
                <div>
                    <h1>
                        <span>
                            We care <br />
                        </span>
                        about your health
                    </h1>
                    <p>
                        Good health is the state of mental, physical and social well being <br /> and it does not just mean absence of diseases.
                    </p>
                    <div className={s.container_main_btn}>
                        <input type="text" />
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <div className={s.container_btns}>
                        <button className={s.search}>
                            <img src={SearchGroup} alt="search" />
                            <a>
                                Well Qualified doctors
                            </a>
                        </button>
                        <button className={s.book}>
                            <img src={Group} alt="group" />
                            <a>
                                Book an appointment.
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Hero;