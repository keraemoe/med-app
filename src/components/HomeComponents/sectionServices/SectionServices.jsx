import React from "react";
import s from "./sectionServices.module.css";
import labIcon from "./images/lab-icon.png";
import ambulanceIcon from "./images/ambulance-icon.png";
import onlineIcon from "./images/online-icon.png";
import callCenterIcon from "./images/call-center__icon.png";
import { motion } from "framer-motion";

const SectionServices = () => {
  return (
    <section id={s.services}>
      <div className={s.titles}>
        <motion.span
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Our Medical Services
        </motion.span>
        <motion.h3
          initial={{ y: "200px", opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          We are dedicated to serve you <br /> best medical services
        </motion.h3>
      </div>
      <div className={s.learn__blocks}>
        <motion.div
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={s.block}
        >
          <div>
            <img src={labIcon} alt="" />
          </div>
          <p>Well equipped lab</p>
        </motion.div>
        <motion.div
          initial={{ y: "200px", opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={s.block}
        >
          <div>
            <img src={ambulanceIcon} alt="" />
          </div>
          <p>Emergency Ambulance</p>
        </motion.div>
        <motion.div
          initial={{ y: "300px", opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          animate={{ y: 0, opacity: 1 }}
          className={s.block}
        >
          <div>
            <img src={onlineIcon} alt="" />
          </div>
          <p>Online Appointment</p>
        </motion.div>
        <motion.div
          initial={{ y: "350px", opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileInView={{ y: 0, opacity: 1 }}
          className={s.block}
        >
          <div>
            <img src={callCenterIcon} alt="" />
          </div>
          <p>Call Center</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionServices;