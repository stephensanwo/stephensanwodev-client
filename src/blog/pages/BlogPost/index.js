import React, { useEffect, useContext } from "react";
import BlogPostOptions from "./BlogPostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import Footer from "../../../shared/components/Footer";
import { Redirect, useLocation } from "react-router-dom";
import { PostContext } from "../..";
import { Loading } from "carbon-components-react";

const BlogPost = (props) => {
  const post_id = props.match.params.post_id;
  const { pathname } = useLocation();
  const data = useContext(PostContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (data.isLoading) {
    return <Loading stlye={{ backgroundColor: "green" }} />;
  }

  if (data.error) {
    <Redirect to="/blog" />;
  }

  const post_data = data.data.data.blog_posts.filter(
    (item) => item.post_id === post_id
  )[0];

  const all_posts = data.data.data.blog_posts;
  const featured_posts = data.data.data.featured_posts;

  const post_count = data.data.data.blog_posts.length;

  let next_post_link = `/blog/${Number(post_id) + 1}`;
  let previous_post_link;

  if (Number(post_id) >= 2) {
    previous_post_link = `/blog/${Number(post_id) - 1}`;
  } else {
    previous_post_link = `/blog`;
  }

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <BlogPostOptions all_posts={all_posts} post_data={post_data} />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent
              post_data={post_data}
              next_post_link={next_post_link}
              previous_post_link={previous_post_link}
              post_count={post_count}
            />
            <Footer data_type={"blog"} />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions
            all_posts={all_posts}
            featured_posts={featured_posts}
            post_id={post_id}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
