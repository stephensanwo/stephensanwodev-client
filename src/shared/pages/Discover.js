import React from "react";
import { Tag } from "carbon-components-react";
import { Launch24 } from "@carbon/icons-react";
import "../styles/home.scss";
import SlideTile from "../components/SlideTile";

const Discover = () => {
  return (
    <section className="home-grid-2-discover">
      <div className="home-discover-content">
        <div className="home-discover-content-1">
          <h4
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "#19646E",
            }}
          >
            Discover
          </h4>
          <a href="">See All Apps</a>
        </div>
        <div className="home-discover-content-2">
          <h4>Forecasting at Scale with</h4>
          <h1>Gallium 2.0</h1>
          <p style={{ width: "50%", marginTop: "2rem" }}>
            An open-sourced no-code forecasting analytics platform built on top
            of Facebook’s forecasting engine{" "}
            <a href="https://facebook.github.io/prophet/" target="_blank">
              Facebook Prophet
            </a>
            . From predicting user growth to revenue forecasts, Non-technical
            users across several functions can now leverage the powerful
            facebook prophet analytics engine without having to write code.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
              marginTop: "1rem",
              alignItems: "center",
            }}
          >
            <Tag type="cyan" title="Python">
              Python
            </Tag>
            <Tag type="green" title="Javascript">
              Javascript
            </Tag>
            <Tag type="red" title="Python">
              Redis
            </Tag>
            <Tag type="grey" title="Python">
              React
            </Tag>
            <Tag type="teal" title="Python">
              FastAPI
            </Tag>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "3rem",
              width: "10%",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ color: "#0f62fe" }}>
              <a>Launch Gallium</a>
            </h4>
            <Launch24 fill="#0f62fe" />
          </div>
        </div>
        <div className="home-discover-content-3">
          <SlideTile />
        </div>
      </div>
    </section>
  );
};

export default Discover;
