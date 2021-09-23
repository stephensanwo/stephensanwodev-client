import React from "react";
import { top_articles } from "../../../data/tmp_blog";
import { featured_apps_data } from "../../../data/apps";
import Tags from "../../../shared/components/Tags";

const PostOptions = () => {
  return (
    <div className="blog-home-options-container">
      <div style={{ borderBottom: "1px solid #444c56" }}>
        <h4
          style={{
            color: "#adbac7",
            fontFamily: "display-text-bold",
            fontSize: "1em",
            marginBottom: "1em",
          }}
        >
          Suggested Next Reads
        </h4>
      </div>
      {top_articles.map((article, index) => (
        <div style={{ marginTop: "2rem" }}>
          <h4
            style={{
              fontSize: "0.8em",
              marginBottom: "0.4em",
            }}
            className="header-link-highlight"
          >
            {article.title}
          </h4>
          <p
            style={{
              marginBottom: "0.4em",
              width: "100%",
              fontSize: "0.8em",
            }}
          >
            {`${article.description}`.slice(0, 160)}
            {article.description.length > 160 ? "..." : ""}
          </p>
        </div>
      ))}

      <div style={{ borderBottom: "1px solid #444c56", marginTop: "4rem" }}>
        <h4
          style={{
            color: "#adbac7",
            fontFamily: "display-text-bold",
            fontSize: "1em",
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
              fontSize: "0.8em",
              marginBottom: "0.4em",
            }}
            className="header-link-highlight"
          >
            {article.title}
          </h4>
          <p
            style={{
              marginBottom: "0.4em",
              width: "100%",
              fontSize: "0.8em",
            }}
          >
            {`${article.description}`.slice(0, 160)}
            {article.description.length > 160 ? "..." : ""}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PostOptions;
