import React from "react";
import { Launch24 } from "@carbon/icons-react";
import "../styles/components.scss";
import { motion, AnimatePresence } from "framer-motion";

const SlideTile = () => {
  return (
    <motion.div
      className="discover-app-box app-box-1"
      whileHover={{ scale: 1.05 }}
      transition={{ ease: "easeOut", duration: 0.1 }}
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
        <h4 style={{ color: "#fff", fontSize: "2rem" }}>Citadel</h4>
        <p style={{ color: "#fff", fontSize: "1rem", marginTop: "1rem" }}>
          Find and download any book
        </p>
      </div>
    </motion.div>
  );
};

export default SlideTile;
