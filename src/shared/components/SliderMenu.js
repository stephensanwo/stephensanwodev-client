import React, { Fragment } from "react";
import "../styles/sidenav.scss";
import { motion, AnimatePresence } from "framer-motion";

const SliderMenu = ({ isNavOpen }) => {
  return (
    <AnimatePresence>
      {isNavOpen === "open" ? (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%", speed: "100ms" }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          className={"slider-menu slider-menu-open"}
        >
          <h1>Slider Menu</h1>
        </motion.div>
      ) : isNavOpen === "closed" ? (
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%", speed: "100ms" }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          className="slider-menu slider-menu-closed"
        ></motion.div>
      ) : (
        <Fragment></Fragment>
      )}
    </AnimatePresence>
  );
};

export default SliderMenu;
