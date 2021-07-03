import React from "react";
import "./style.scss";

import FeaturedArticle from "./FeaturedArticle";
import ArticleList from "./ArticleList";
import Options from "./Options";

const BlogHome = () => {
  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav"></div>
      <div className="blog-home-content-container">
        <div className="blog-home-content">
          <div className="blog-home-content-items">
            <h4
              style={{
                fontSize: "2rem",
                fontFamily: "display-text-medium",
                color: "#adbac7",
              }}
            >
              Blog
            </h4>
            <FeaturedArticle />
            <div
              className="section-divider-line"
              style={{ marginTop: "4rem", marginBottom: "6rem" }}
            ></div>
            <ArticleList />
          </div>
        </div>
        <div className="blog-home-options">
          <Options />
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
