import React, { Fragment } from "react";
import { tech_stack } from "../../../data/techstack";
import { UserProfile } from "@carbon/pictograms-react";
import Tags from "../../components/Tags";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserProfile fill="#986ee2" />
            <h4 style={{ color: "#986ee2" }}>About Me</h4>
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
                I am a full-stack software, and artificial intelligence
                solutions developer, skilled in architecting data-driven
                solutions in complex data-oriented environments, building and
                deploying solutions that cut through the complexities of
                business problems.
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
                and I share code snippets at{" "}
                <a
                  href="https://codeshare.stephensanwo.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  codeshare.stephensanwo.dev
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
                    color: "#986ee2",
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
                    color: "#986ee2",
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
