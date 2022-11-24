import React from "react";
import SectionServices from "../../components/HomeComponents/sectionServices/SectionServices";
import Hero from "../../components/HomeComponents/sectionHero/Hero";
import s from "./home.module.css";
import ParticlesContainer from "../../components/Layouts/ParticlesBackground/ParticlesBackground";

const HomePage = () => {
  return (
    <div className={s.Home}>
      <ParticlesContainer/>
      <Hero />
      <SectionServices />
    </div>
  );
};

export default HomePage;
