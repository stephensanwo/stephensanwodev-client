import React, { useEffect, useContext } from "react";
import CodePostOptions from "./CodePostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import Footer from "../../../shared/components/Footer";
import { Redirect, useLocation } from "react-router-dom";
import { PostContext } from "../..";
import { Loading } from "carbon-components-react";

const CodePost = (props) => {
  const code_id = props.match.params.code_id;
  const { pathname } = useLocation();
  const data = useContext(PostContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (data.isLoading) {
    return <Loading stlye={{ backgroundColor: "green" }} />;
  }

  if (data.error) {
    <Redirect to="/code" />;
  }

  const code_content = data.data.code_posts.filter(
    (item) => item.code_id === code_id
  )[0];
  const post_count = data.data.code_posts.length;
  const all_posts = data.data.code_posts;

  let next_post_link = `/code/${Number(code_id) + 1}`;
  let previous_post_link;

  if (Number(code_id) >= 2) {
    previous_post_link = `/code/${Number(code_id) - 1}`;
  } else {
    previous_post_link = `/code`;
  }

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <CodePostOptions code_content={code_content} />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent
              code_content={code_content}
              next_post_link={next_post_link}
              previous_post_link={previous_post_link}
              post_count={post_count}
            />
            <Footer data_type={"code"} />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions all_posts={all_posts} code_id={code_id} />
        </div>
      </div>
    </div>
  );
};

export default CodePost;
