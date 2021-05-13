import React from "react";
import { Tag } from "carbon-components-react";
import { Launch24 } from "@carbon/icons-react";
import "../styles/home.scss";
import { motion } from "framer-motion";
import BlogImage from "../../assets/img/derek-thomson-NqJYQ3m_rVA-unsplash.jpg";
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
              color: "#A2FACF",
            }}
          >
            About
          </h4>
        </div>
        <div className="home-about-content-2"></div>
        <div className="home-about-content-3"></div>
      </div>
    </section>
  );
};

export default About;
