import React from "react";
import "./style.scss";
import {
  LogoGithub16,
  LogoLinkedin16,
  LogoTwitter16,
  Email16,
  Phone16,
} from "@carbon/icons-react";
import Tags from "../../components/Tags";

const Landing = () => {
  return (
    <div className="landing-content">
      <h4>✋🏽 Hi, I'm</h4>
      <h1>Stephen Sanwo</h1>
      <h4>
        I solve complex problems with Software and Artificial Intelligence
      </h4>
      <p style={{ width: "100%" }}>
        I translate problem statements into solutions that solve the problems;
        building and shipping APIs and Micro-services for internal and client
        projects, developing custom algorithms to tackle domain problems, and
        developing custom analytics solutions for automating client processes. I
        currently lead the digital solutions development project team for the
        GRC Unit at KPMG, developing and maintaining scalable and quality
        software and analytics solutions for clients and internal use cases.
      </p>
      <div className="contact-section">
        <h4>Get in touch</h4>
        <div className="contact-section-logo">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "2rem",
            }}
          >
            <Email16 color="#05aa82" />
            <a>stephen.sanwo@icloud.com</a>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "2rem",
            }}
          >
            <Phone16 color="#05aa82" />
            <a>+2347069331383</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
