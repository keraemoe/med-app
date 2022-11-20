import React from "react";
import SectionServices from "../../components/HomeComponents/sectionServices/SectionServices";
import Hero from "../../components/HomeComponents/sectionHero/Hero";
import s from "./home.module.css";

const HomePage = () => {
  return (
    <div className={s.Home}> 
      <Hero />
      <SectionServices />
    </div>
  );
};

export default HomePage;
