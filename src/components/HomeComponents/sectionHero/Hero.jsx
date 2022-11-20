import React from 'react';
import s from './hero.module.css'

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
                </div>
                <div>
                    <div className={s.container_btns}>
                        <button className={s.search}>
                            <img src="" alt="search" />
                            <a>
                                Well Qualified doctors
                            </a>
                        </button>
                        <button className={s.book}>
                            <img src="" alt="group" />
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