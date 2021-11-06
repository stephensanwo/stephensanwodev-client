import React from "react";
import { top_articles } from "../../../data/tmp_blog";

const PostOptions = () => {
  return (
    <div className="blog-home-options-container">
      <div style={{ borderBottom: "1px solid #444c56" }}>
        <h4
          style={{
            color: "#adbac7",

            marginBottom: "1em",
          }}
        >
          Suggested
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
