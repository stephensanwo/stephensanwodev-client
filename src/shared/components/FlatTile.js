import React from "react";
import { Launch24 } from "@carbon/icons-react";
import "../styles/components.scss";
import { motion, AnimatePresence } from "framer-motion";

const FlatTile = ({ data }) => {
  return (
    <motion.div
      className={`discover-app-box app-box-${data.id}`}
      id="slide"
      whileHover={{ y: -20, filter: "brightness(50%)" }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div
        style={{
          padding: "1rem",
          display: " flex",
          justifyContent: "flex-end",
        }}
      >
        <Launch24 fill={"#fff"} />
      </div>
      <div
        style={{
          marginTop: "10rem",
          marginLeft: "2rem",
        }}
      >
        <h4 style={{ color: "#fff", fontSize: "1.5rem" }}>{data.name}</h4>
        <p style={{ color: "#fff", fontSize: "0.8rem", marginTop: "1rem" }}>
          {data.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default FlatTile;
