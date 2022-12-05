import React from "react";
import SectionServices from "../components/HomeComponents/sectionServices/SectionServices";
import Hero from "../components/HomeComponents/sectionHero/Hero";
import ParticlesContainer from "../components/UI/ParticlesBackground/ParticlesBackground";

const HomePage = () => {
  return (
    <div>
      <ParticlesContainer/>
      <Hero />
      <SectionServices />
    </div>
  );
};

export default HomePage;
