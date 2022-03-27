import React from "react";
import { tech_stack } from "../../../data/techstack";
import { UserProfile } from "@carbon/pictograms-react";
import Tags from "../../components/Tags";

const About = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserProfile fill="#addec9" />
            <h4 style={{ color: "#addec9" }}>About Me</h4>
          </div>
          <div></div>
        </div>
        <div className="section-divider-line"></div>
      </div>
      <div className="about-content">
        <div className="about-content-experience">
          <div className="about-content-title">
            <h4>Work Experience</h4>
          </div>
          <div className="about-content-experience-container">
            <div>
              <p>
                I am a Fullstack Software, and ML/AI Solutions Developer. I
                focus on architecting data-driven software that solve domain
                specific problems in complex data-oriented environments (i.e.
                Financial Services Sector and Consumer Markets). I currently
                lead an analytics solutions development team at KPMG Nigeria,
                focused on developing and maintaining scalable analytics
                solutions for clients.
              </p>
              <p style={{ marginTop: "1rem" }}>
                I am also a certified robotics process automation (RPA) advanced
                developer, and a Microsoft certified data and analytics expert.
                I blog about tech topics at{" "}
                <a
                  href="https://blog.stephensanwo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blog.stephensanwo.dev
                </a>{" "}
                and I share publish my AI/ML apps at{" "}
                <a
                  href="https://ai.stephensanwo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ai.stephensanwo.dev
                </a>
              </p>
            </div>
            <div className="about-content-experience-grid ">
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <h4
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Manager - KPMG Nigeria
                </h4>
                <small
                  style={{
                    color: "#addec9",
                  }}
                >
                  Sep 2015 - Present
                </small>
              </div>
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <h4
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  Founder - Wager
                </h4>
                <small
                  style={{
                    color: "#addec9",
                  }}
                >
                  October 2021 - Present
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-technologies">
          <div className="about-content-title">
            <h4>Technologies/Stack</h4>
          </div>
          <div className="about-content-technologies-container">
            {tech_stack.map((tech_item, index) => (
              <div className="about-technologies-item-container">
                <div key={index} className="about-technologies-item">
                  <div>{tech_item.logo}</div>
                  <h4
                    style={{
                      marginLeft: "1.5rem",
                    }}
                  >
                    {tech_item.category}
                  </h4>
                </div>

                <div className="about-technologies-list">
                  {tech_item.tools.map((tool, index) => (
                    <Tags
                      type="app"
                      icon="false"
                      title={tool}
                      color={"generic"}
                      style={{ marginBottom: "0.5em" }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
