import React from 'react';
import s from './Hero.module.css'
import Group from '../../../assets/Group.png'
import SearchGroup from '../../../assets/SearchGroup.png'
// import ParticlesBackground from '../../Layouts/ParticlesBackground/ParticlesBackground';

const Hero = () => {
    return (
        <section id={s.hero}>
            {/* <ParticlesBackground/> */}
            <div className={s.container}>
                <div className={s.section_hero}>
                    <div className={s.hero_left}>
                        <h1>We care <br /> <span>about your health</span></h1>
                        <p>Good health is the state of mental, physical and social well being <br /> and it does not just mean absence of diseases.</p>
                        <span> Become member of our hospital community?<a href="#">Sign Up</a>
                        </span>
                        <div className={s.container_btn}>
                            <a>Find a doctor</a>
                            <div>
                                <input type="text" value="Name of Doctor" />
                                <input type="text" value="Speciality" />
                                <button>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={s.hero_right}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;