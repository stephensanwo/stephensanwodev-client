import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

const Options = ({ data }) => {
  return (
    <motion.div
      className="options-container"
      //   whileHover={{ borderBottom: "4px solid #a2facf" }}
      transition={{ ease: "easeOut", duration: 0.1 }}
    >
      <div className="options-text">
        <h4>{data.name}</h4>
      </div>
    </motion.div>
  );
};

export default Options;
