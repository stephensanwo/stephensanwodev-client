import React, { useEffect } from "react";
import CodePostOptions from "./CodePostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import { code_data } from "../../../data/code";
import Footer from "../../../shared/components/Footer";
import { useLocation } from "react-router-dom";

const CodePost = (props) => {
  const code_id = props.match.params.code_id;
  const code_content = code_data.filter((item) => item.code_id === code_id)[0];
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <CodePostOptions />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent code_content={code_content} />
            <Footer data_type={"code"} />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions />
        </div>
      </div>
    </div>
  );
};

export default CodePost;
