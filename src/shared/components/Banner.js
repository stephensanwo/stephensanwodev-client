import React, { Fragment } from "react";
import SliderMenu from "./SliderMenu";
import { ChevronRight16 } from "@carbon/icons-react";
import "../styles/home.scss";
import ToolsAccordion from "./ToolsAccordion";
import {
  LogoGithub24,
  LogoLinkedin24,
  LogoTwitter24,
} from "@carbon/icons-react";

const Banner = ({ isNavOpen }) => {
  return (
    <Fragment>
      <div className="home-grid-2-content">
        <div className="home-header">
          <h4
            style={{
              fontSize: "1rem",
              color: "#A2FACF",
            }}
          >
            stephensanwo.dev
          </h4>
          <h4
            style={{
              fontSize: "0.8rem",
              color: "#ffffff",
              marginLeft: "1rem",
              marginRight: "1rem",
            }}
          >
            {">"}
          </h4>

          <h4 style={{ fontSize: "0.7rem", color: "#ffffff" }}>Home</h4>
        </div>
        <div className="home-body">
          <div className="intro-text">
            <h4
              style={{
                fontSize: "2rem",
                color: "#A2FACF",
                marginRight: "1rem",
              }}
            >
              ✋🏽Hi, I'm
            </h4>
            <h1 style={{ fontSize: "6rem" }}>Stephen Sanwo</h1>
            <h4
              style={{
                fontSize: "2rem",
                color: "#A2FACF",
                marginRight: "1rem",
              }}
            >
              I solve complex problems with Software and Artificial Intelligence
            </h4>

            <p
              style={{ fontSize: "1rem", color: "#ffffff", marginTop: "2rem" }}
            >
              A software and analytics enabled solutions developer, who is
              enthusiastic about architecting solutions in complex data-oriented
              environments, and building models that cut through the
              complexities of business problems. I am energized by highly
              academic, competitive and collaborative environments, with
              continuously evolving challenges that fuel a desire to improve my
              understanding on how to develop solutions that work. While this
              excites me, what also drives my motivation to work continues to be
              the opportunity to be in an environment, where learning, personal,
              and professional development spontaneously align with
              organizational goals.
            </p>

            <p
              style={{ fontSize: "1rem", color: "#ffffff", marginTop: "2rem" }}
            >
              I work 9-5 @KPMG, freelance @Proxify
            </p>
            <div>
              <LogoGithub24 color="#ffffff" />{" "}
              <LogoLinkedin24 color="#ffffff" />{" "}
              <LogoTwitter24 color="#ffffff" />
            </div>
          </div>
          <div className="tools-accordion">
            <ToolsAccordion />
          </div>
        </div>
        <div className="home-bottom"></div>
      </div>
      {isNavOpen === "open" ? (
        <SliderMenu isNavOpen={isNavOpen} />
      ) : isNavOpen === "closed" ? (
        <SliderMenu isNavOpen={isNavOpen} />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default Banner;
