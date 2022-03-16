import React from "react";
import { Link } from "react-router-dom";

const PostOptions = ({ all_posts, post_id }) => {
  return (
    <div className="blog-home-options-container">
      <div style={{ borderBottom: "0.1px solid #addec9" }}>
        <h4
          style={{
            color: "#fff",
            marginBottom: "1em",
          }}
        >
          Suggested Next Reads
        </h4>
      </div>
      {all_posts.blog_posts.slice(Number(post_id)).map((article, index) => (
        <div key={index} style={{ marginTop: "2rem" }}>
          <Link to={`${article.post_url}`}>
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
      ))}
    </div>
  );
};

export default PostOptions;
