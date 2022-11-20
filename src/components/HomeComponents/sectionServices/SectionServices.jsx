import React from "react";
import s from "./section.module.css";

const SectionServices = () => {
  return (
    <section id={s.services}>
      <div className={s.titles}>
        <h1>Our Medical Services</h1>
        <h3>
          We are dedicated to serve you <br /> best medical services
        </h3>
      </div>
    </section>
  );
};

export default SectionServices;
