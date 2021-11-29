import React, { useContext } from "react";
import { top_articles } from "../../../data/tmp_blog";
import { PostContext } from "../..";
import { Link, useRouteMatch } from "react-router-dom";
import Loader from "../../../shared/components/Loader";

const PostOptions = ({ all_posts, featured_posts, post_id }) => {
  const { path } = useRouteMatch();
  return (
    <div className="blog-home-options-container">
      <div style={{ borderBottom: "1px solid #444c56" }}>
        <h4
          style={{
            color: "#adbac7",

            marginBottom: "1em",
          }}
        >
          Suggested Next Reads
        </h4>
      </div>
      {all_posts.blog_posts.slice(Number(post_id)).map((article, index) => (
        <div style={{ marginTop: "2rem" }}>
          <Link to={`${path}${article.post_id}`}>
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
