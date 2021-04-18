import React, { Fragment } from "react";
import SliderMenu from "./SliderMenu";
import { ChevronRight16 } from "@carbon/icons-react";
import "../styles/home.scss";

const Banner = ({ isNavOpen }) => {
  return (
    <Fragment>
      <div className="home-grid-2-content" style={{ minHeight: "200vh" }}>
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

          <h4 style={{ fontSize: "0.8rem", color: "#ffffff" }}>Home</h4>
        </div>
        <div className="home-body">
          <h1 style={{ fontSize: "6rem" }}>Stephen Sanwo</h1>
          <h4
            style={{ fontSize: "2rem", color: "#A2FACF", marginRight: "1rem" }}
          >
            Fullstack Software, Mobile & AI Solutions Developer
          </h4>{" "}
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
