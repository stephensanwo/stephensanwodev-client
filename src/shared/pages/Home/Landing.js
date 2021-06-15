import { ArrowRight24 } from "@carbon/icons-react";
import React from "react";
import ToolsAccordion from "../../components/ToolsAccordion";
import "./style.scss";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h4>✋🏽Hi, I'm</h4>
        <h1>Stephen Sanwo</h1>
        <h4>
          I solve complex problems with Software and Artificial Intelligence
        </h4>
        <p>
          I translate problem statements into solutions that solve the problems;
          building and shipping APIs and Micro-services for internal and client
          projects, developing custom algorithms to tackle domain problems, and
          developing custom analytics solutions for automating client processes.
          I currently lead the digital solutions development project team for
          the GRC Unit at KPMG, developing and maintaining scalable and quality
          software and analytics solutions for clients and internal use cases.
        </p>
        <div className="contact-button">
          <h4>Get in touch</h4>
          <ArrowRight24 fill="#A2FACF" />
        </div>
        <div className="about-container">
          <div className="section-divider">
            <div className="section-title">
              <h4>About Me</h4>
            </div>
            <div className="section-divider-line"></div>
          </div>

          <div className="about-content">
            <p>
              I am full-stack software, and analytics driven solutions
              developer, who is skilled in architecting solutions in complex
              data-oriented environments and building models that cut through
              the complexities of business problems. I am energised by
              technically challenging, competitive and collaborative
              environments, where learning, personal and technical development,
              spontaneously align with organisational goals.
            </p>
            <div className="tools-accordion">
              <p>Tools & Technologies I use</p>
              <ToolsAccordion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
