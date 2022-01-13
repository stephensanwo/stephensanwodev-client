import React from "react";
import "./style.scss";
import { Email16, Chat16 } from "@carbon/icons-react";

const Landing = () => {
  return (
    <div className="landing-content">
      <h4>✋🏽 Hi, I'm</h4>
      <h1>Stephen Sanwo</h1>
      <h2>I Build Software and AI Solutions</h2>
      {/* <p style={{ width: "100%" }}>
        I am a full-stack software, and artificial intelligence solutions
        developer, skilled in architecting data-driven solutions in complex
        data-oriented environments, building and deploying solutions that cut
        through the complexities of business problems. I currently lead the
        digital solutions development team for the GRC Unit at KPMG Nigeria,
        where I develop and maintain scalable analytics solutions for clients
        and internal use cases.
      </p> */}
      <div className="contact-section">
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
