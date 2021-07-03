import React from "react";
import { motion } from "framer-motion";
import "./style.scss";
import { Link } from "react-router-dom";

const Options = ({ data }) => {
  return (
    <motion.div
      className="options-container"
      //   whileHover={{ borderBottom: "4px solid #a2facf" }}
      transition={{ ease: "easeOut", duration: 0.1 }}
    >
      <div className="options-text">
        <Link to={data.link}>
          <a>{data.name}</a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Options;
