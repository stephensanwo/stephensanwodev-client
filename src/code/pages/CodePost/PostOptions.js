import React from "react";
import { Link } from "react-router-dom";
const PostOptions = ({ all_posts, code_id }) => {
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
      {all_posts.length === 1 ? (
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <h4
            style={{
              fontSize: "0.8em",
              marginBottom: "0.4em",
            }}
          >
            No Suggestions
          </h4>
        </div>
      ) : (
        all_posts.slice(1).map((article, index) => (
          <div key={index} style={{ marginTop: "2rem" }}>
            <Link to={`/code/${article.code_id}`}>
              <h4
                style={{
                  fontSize: "0.8em",
                  marginBottom: "0.4em",
                }}
                className="header-link-highlight"
              >
                {article.title}
              </h4>
            </Link>
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
        ))
      )}
    </div>
  );
};

export default PostOptions;
