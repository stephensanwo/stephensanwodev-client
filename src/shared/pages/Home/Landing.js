import React from "react";
import "./style.scss";
import {
  LogoGithub16,
  LogoLinkedin16,
  LogoTwitter16,
  Email16,
  Phone16,
  Chat16,
} from "@carbon/icons-react";
// import { motion, AnimatePresence } from "framer-motion";

const Landing = () => {
  return (
    <div className="landing-content">
      <h4
        initial={{ x: "-100px" }}
        animate={{ x: "0", speed: "100ms" }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        exit={{ display: "none", speed: "1000ms" }}
      >
        ✋🏽 Hi, I'm
      </h4>
      <h1
        initial={{ x: "-100px" }}
        animate={{ x: "0", speed: "100ms" }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        exit={{ display: "none", speed: "1000ms" }}
      >
        Stephen Sanwo
      </h1>
      <h4
        initial={{ x: "-100px" }}
        animate={{ x: "0", speed: "100ms" }}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        exit={{ display: "none", speed: "1000ms" }}
      >
        I solve complex problems with Software and Artificial Intelligence
      </h4>
      <p
        initial={{ x: "-100px" }}
        animate={{ x: "0", speed: "100ms" }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
        exit={{ display: "none", speed: "1000ms" }}
        style={{ width: "100%" }}
      >
        I translate problem statements into solutions that solve the problems;
        building and shipping APIs and Micro-services for internal and client
        projects, developing custom algorithms to tackle domain problems, and
        developing custom analytics solutions for automating client processes. I
        currently lead the digital solutions development project team for the
        GRC Unit at KPMG, developing and maintaining scalable and quality
        software and analytics solutions for clients and internal use cases.
      </p>
      <div
        initial={{ x: "-100px" }}
        animate={{ x: "0", speed: "100ms" }}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        exit={{ display: "none", speed: "1000ms" }}
        className="contact-section"
      >
        <h4>Get in touch</h4>
        <div className="contact-section-logo">
          <div className="contact-section-logo-item">
            <Email16 color="#05aa82" />
            <a
              href="mailto:stephen.sanwo@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              stephen.sanwo@icloud.com
            </a>
          </div>
          <div className="contact-section-logo-item">
            <Chat16 color="#05aa82" />
            <a
              href="https://wa.me/+2347069331383"
              target="_blank"
              rel="noopener noreferrer"
            >
              +2347069331383
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
