import React, { Fragment } from "react";
import { tech_stack } from "../../../data/techstack";
import { MachineLearningModel24 } from "@carbon/icons-react";

const About = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <h4>About Me</h4>
        </div>
        <div className="section-divider-line"></div>
      </div>
      <div className="about-content">
        <div className="about-content-experience">
          <div className="about-content-title">
            <h4
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5",
                color: "#444c56",
              }}
            >
              Work Experience
            </h4>
          </div>
          <div className="about-content-experience-container">
            <div>
              <p>
                I am full-stack software, and analytics driven solutions
                developer, who is skilled in architecting solutions in complex
                data-oriented environments and building models that cut through
                the complexities of business problems. I am energised by
                technically challenging, competitive and collaborative
                environments, where learning, personal and technical
                development, spontaneously align with organisational goals.
              </p>
              <p>Assistant Manager - KPMG</p>
              <p>Freelance Senior Software Developer - Proxify</p>
            </div>
          </div>
        </div>

        <div className="about-content-technologies">
          <div className="about-content-title">
            <h4
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5",
                color: "#444c56",
              }}
            >
              Technologies/Stack
            </h4>
          </div>
          <div className="about-content-technologies-container">
            {tech_stack.map((tech_item, index) => (
              <div className="about-technologies-item-container">
                <div key={index} className="about-technologies-item">
                  {tech_item.logo}
                  <h2
                    style={{
                      color: "#ffffff",
                      fontFamily: "display-text-semibold",
                      fontSize: "0.8rem",
                      marginLeft: "1.5rem",
                    }}
                  >
                    {tech_item.category}
                  </h2>
                </div>
                <div className="about-technologies-list">
                  {tech_item.tools.map((tool, index) => (
                    <small key={index} style={{ color: "#adbac7" }}>
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
