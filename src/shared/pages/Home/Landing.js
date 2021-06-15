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
          A software and analytics enabled solutions developer, who is
          enthusiastic about architecting solutions in complex data-oriented
          environments, and building models that cut through the complexities of
          business problems. I am energized by highly academic, competitive and
          collaborative environments, with continuously evolving challenges that
          fuel a desire to improve my understanding on how to develop solutions
          that work. While this excites me, what also drives my motivation to
          work continues to be the opportunity to be in an environment, where
          learning, personal, and professional development spontaneously align
          with organizational goals.
        </p>
        <div className="contact-button">
          <h4>Get in touch</h4>
          <ArrowRight24 fill="#A2FACF" />
        </div>
        <div className="tools-accordion">
          <ToolsAccordion />
        </div>
      </div>
    </div>
  );
};

export default Landing;
