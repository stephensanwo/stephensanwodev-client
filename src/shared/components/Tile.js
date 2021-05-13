import React from "react";
import "../styles/components.scss";
import { motion } from "framer-motion";

const Tile = ({ data }) => {
  return (
    <motion.div
      className="tile-box"
      whileHover={{ y: -20 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <motion.div
        className={`tile-box-image tile-box-image-${data.id}`}
        whileHover={{ filter: "brightness(50%)" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      ></motion.div>
      <div className="tile-box-text">
        <h4>{data.title}</h4>
        <a>Read Articles</a>
      </div>
    </motion.div>
  );
};

export default Tile;
