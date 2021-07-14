import React, { Fragment } from "react";
import { tech_stack } from "../../../data/techstack";
import { MachineLearningModel24 } from "@carbon/icons-react";
import { UserProfile } from "@carbon/pictograms-react";

const About = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <UserProfile fill="#05aa82" />
            <h4 style={{ color: "#05aa82" }}>About Me</h4>
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
                I am a full-stack software, and analytics driven solutions
                developer, who is skilled in architecting solutions in complex
                data-oriented environments and building models that cut through
                the complexities of business problems. I am energised by
                technically challenging, competitive and collaborative
                environments, where learning, personal and technical
                development, spontaneously align with organisational goals.
              </p>
            </div>
            <div className="about-content-experience-grid ">
              <div
                style={{
                  marginBottom: "1rem",
                }}
              >
                <h4
                  style={{
                    color: "#768390",
                    fontFamily: "display-text-semibold",
                    fontSize: "0.8rem",
                  }}
                >
                  Assistant Manager - KPMG
                </h4>
                <small
                  style={{
                    fontFamily: "display-text",
                    fontSize: "0.7rem",
                    color: "#05aa82",
                  }}
                >
                  Sep 2015 - Present
                </small>
              </div>
              <div>
                <h4
                  style={{
                    color: "#768390",
                    fontFamily: "display-text-semibold",
                    fontSize: "0.8rem",
                  }}
                >
                  Freelance Senior Software Developer - Proxify
                </h4>
                <small
                  style={{
                    fontFamily: "display-text",
                    fontSize: "0.7rem",
                    color: "#05aa82",
                  }}
                >
                  February 2021 - Present
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
                  {tech_item.logo}
                  <h2
                    style={{
                      color: "#adbac7",
                      fontFamily: "display-text-bold",
                      fontSize: "1em",
                      marginLeft: "1.5rem",
                    }}
                  >
                    {tech_item.category}
                  </h2>
                </div>
                <div className="about-technologies-list">
                  {tech_item.tools.map((tool, index) => (
                    <small
                      key={index}
                      style={{
                        color: "#768390",
                        fontFamily: "display-text",
                        fontSize: "0.7rem",
                      }}
                    >
                      {tool}
                    </small>
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
