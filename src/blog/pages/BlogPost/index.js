import React, { useEffect } from "react";
import BlogPostOptions from "./BlogPostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import { all } from "../../../data/tmp_blog";
import Footer from "../../../shared/components/Footer";
import { useLocation } from "react-router-dom";

const BlogPost = (props) => {
  const post_id = props.match.params.post_id;
  const post_data = all.filter((item) => item.post_id === post_id)[0];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <BlogPostOptions post_data={post_data} />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent post_data={post_data} />
            <Footer />
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
