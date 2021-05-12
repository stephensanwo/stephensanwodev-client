import React from "react";
import "../styles/components.scss";
import { motion } from "framer-motion";

const Tile = ({ data }) => {
  return (
    <div className="tile-box">
      <div className="tile-box-image ">
        <motion.img
          src={data.image}
          alt=""
          width="100%"
          height="100%"
          whileHover={{ scale: 1.05 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      </div>
      <div className="tile-box-text">
        <h4>{data.title}</h4>
        <a>Read Articles</a>
      </div>
    </div>
  );
};

export default Tile;
