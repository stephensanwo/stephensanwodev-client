import React from "react";

import "../styles/home.scss";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/img/profile-picture-transparent.png";
import { blog_categories } from "../../data/blog";
import Tile from "../components/Tile";

const About = () => {
  return (
    <section className="home-grid-2-about">
      <div className="home-about-content">
        <div className="home-blog-content-1">
          <h4
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "#19646E",
            }}
          >
            About
          </h4>
        </div>
        <div className="home-about-content-2">
          <div className="profile-image">
            <motion.img
              src={ProfileImage}
              alt=""
              width="100%"
              height="100%"
              whileHover={{ scale: 1.05, filter: "brightness(50%)" }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          </div>
        </div>
        <div className="home-about-content-3"></div>
      </div>
    </section>
  );
};

export default About;
