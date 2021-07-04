import React from "react";
import BlogPostOptions from "./BlogPostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";

const BlogPost = () => {
  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <BlogPostOptions />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
