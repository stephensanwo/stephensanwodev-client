import React from "react";
import { top_articles } from "../../../data/tmp_blog";
import { apps_data } from "../../../data/apps";

const Options = () => {
  return (
    <div className="app-home-options-container">
      <div style={{ borderBottom: "1px solid #2b323d", marginTop: "4rem" }}>
        <h4
          style={{
            marginBottom: "1em",
          }}
        >
          Top Apps
        </h4>
      </div>
      {apps_data.map((app_data, index) => (
        <div style={{ marginTop: "2rem" }}>
          <a href={app_data.app_url} target="_blank" rel="noopener noreferrer">
            <h4
              style={{
                fontSize: "0.8em",
                marginBottom: "0.4em",
              }}
              className="header-link-highlight"
            >
              {app_data.title}
            </h4>
          </a>

          <p
            style={{
              fontSize: "0.8em",
              marginBottom: "0.4em",

              width: "100%",
            }}
          >
            {app_data.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Options;
