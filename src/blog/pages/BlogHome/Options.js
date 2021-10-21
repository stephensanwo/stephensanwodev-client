import React from "react";
import { top_articles } from "../../../data/tmp_blog";
import { featured_apps_data } from "../../../data/apps";

const Options = () => {
  return (
    <div className="blog-home-options-container">
      <div style={{ borderBottom: "1px solid #2b323d" }}>
        <h4
          style={{
            marginBottom: "1em",
          }}
        >
          Top Blog Posts
        </h4>
      </div>
      {top_articles.map((article, index) => (
        <div style={{ marginTop: "2rem" }}>
          <h4
            style={{
              marginBottom: "0.4em",
              fontSize: "0.8em",
            }}
            className="header-link-highlight"
          >
            {article.title}
          </h4>
          <p
            style={{
              fontSize: "0.8em",
              marginBottom: "0.4em",
              width: "100%",
            }}
          >
            {`${article.description}`.slice(0, 160)}
            {article.description.length > 160 ? "..." : ""}
          </p>
        </div>
      ))}

      <div style={{ borderBottom: "1px solid #2b323d", marginTop: "4rem" }}>
        <h4
          style={{
            marginBottom: "1em",
          }}
        >
          Top Apps
        </h4>
      </div>
      {featured_apps_data.map((app_data, index) => (
        <div style={{ marginTop: "2rem" }}>
          <h4
            style={{
              marginBottom: "0.4em",
              fontSize: "0.8em",
            }}
            className="header-link-highlight"
          >
            {app_data.title}
          </h4>
          <p
            style={{
              marginBottom: "0.4em",
              width: "100%",
              fontSize: "0.8em",
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
