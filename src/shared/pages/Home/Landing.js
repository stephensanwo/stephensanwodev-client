import React from "react";
import About from "./About";
import Blog from "./Blog";
import "./style.scss";
import {
  LogoGithub24,
  LogoLinkedin24,
  LogoTwitter24,
  Email24,
} from "@carbon/icons-react";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h4>✋🏽Hi, I'm</h4>
        <h1>Stephen Sanwo</h1>
        <h4>
          I solve complex problems with Software and Artificial Intelligence
        </h4>
        <p style={{ width: "100%" }}>
          I translate problem statements into solutions that solve the problems;
          building and shipping APIs and Micro-services for internal and client
          projects, developing custom algorithms to tackle domain problems, and
          developing custom analytics solutions for automating client processes.
          I currently lead the digital solutions development project team for
          the GRC Unit at KPMG, developing and maintaining scalable and quality
          software and analytics solutions for clients and internal use cases.
        </p>
        <div className="contact-section">
          <h4>Get in touch</h4>
          <div className="contact-section-logo">
            <Email24 color="#A2FACF" /> <LogoGithub24 color="#A2FACF" />{" "}
            <LogoLinkedin24 color="#A2FACF" /> <LogoTwitter24 color="#A2FACF" />
          </div>
        </div>
        <About />
        <Blog />
      </div>
    </div>
  );
};

export default Landing;
