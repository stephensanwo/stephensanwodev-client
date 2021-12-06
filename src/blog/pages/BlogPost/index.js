import React, { useEffect, useContext } from "react";
import BlogPostOptions from "./BlogPostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import Footer from "../../../shared/components/Footer";
import { Redirect, useLocation } from "react-router-dom";
import { Loading } from "carbon-components-react";
import axios from "axios";
import { useQuery } from "react-query";
import { PostContext } from "../..";
import URL from "../../../config";

const BlogPost = (props) => {
  const post_id = props.match.params.post_id;
  const { pathname } = useLocation();
  const context_data = useContext(PostContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const getPost = async () => {
    const { data } = await axios.get(`${URL}/api/v1/blog/blog_post/${post_id}`);
    return data;
  };

  const { isLoading, status, error, data, isFetching } = useQuery(
    ["post_item", post_id],
    () => getPost(),
    { keepPreviousData: false, refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Redirect to="/error" />;
  }

  const post_count = 4;

  let newer_post_link = `/blog/${Number(post_id) + 1}`;
  let older_post_link;

  if (Number(post_id) >= 2) {
    older_post_link = `/blog/${Number(post_id) - 1}`;
  } else {
    older_post_link = `/blog`;
  }

  document.title = `${data.blog_posts[0].category} | ${data.blog_posts[0].title}`;

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <BlogPostOptions post_data={data.blog_posts[0]} />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent
              post_data={data.blog_posts[0]}
              newer_post_link={newer_post_link}
              older_post_link={older_post_link}
              post_count={post_count}
              isFetching={isFetching}
            />
            <Footer
              blogData={data.featured_posts}
              blogDataLoading={data.isLoading}
              setBlogFilter={context_data.setFilter}
              data_type={"blog"}
            />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions all_posts={data} post_id={post_id} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
