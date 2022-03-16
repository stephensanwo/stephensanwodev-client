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
import Helmet from "react-helmet";

const BlogPost = (props) => {
  const post_url = props.match.params.post_url;
  const { pathname } = useLocation();
  const context_data = useContext(PostContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const getPost = async () => {
    const { data } = await axios.get(
      `${URL}/api/v1/blog/blog_post?post_url=${post_url}`
    );
    return data;
  };

  const { isLoading, status, error, data, isFetching } = useQuery(
    ["post_item", post_url],
    () => getPost(),
    { keepPreviousData: false, refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <Loading style={{ width: "32px", height: "32px" }} />;
  }

  if (error) {
    return <Redirect to="/error" />;
  }

  let newer_post_link;
  let newer_post_value;

  if (data.blog_posts.length > 1) {
    newer_post_link = `/blog/${data.blog_posts[1].post_url}`;
    newer_post_value = "Next Post";
  } else {
    newer_post_link = "/blog";
    newer_post_value = "Back Home";
  }

  let older_post_link;
  let older_post_value;

  if (data.blog_posts[0].post_id === "1") {
    older_post_link = "/blog";
    older_post_value = "Back Home";
  } else {
    older_post_link = "";
    older_post_value = "Back";
  }

  document.title = `Stephen Sanwo - Blog - ${data.blog_posts[0].title}`;

  let seo_keywords = "";
  data.blog_posts[0].tags.map((tag, index) => {
    return (seo_keywords = seo_keywords + tag + ", ");
  });

  const meta_content = `${data.blog_posts[0].category} - ${data.blog_posts[0].title}`;

  return (
    <div className="blog-home-container">
      <Helmet>
        <title>Stephen Sanwo - Blog - {data.blog_posts[0].title}</title>
        <meta name="description" content={data.blog_posts[0].description} />
        <meta name="keywords" content={seo_keywords} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="blog-home-sidenav">
        <BlogPostOptions post_data={data.blog_posts[0]} />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent
              post_data={data.blog_posts[0]}
              newer_post_link={newer_post_link}
              newer_post_value={newer_post_value}
              older_post_link={older_post_link}
              older_post_value={older_post_value}
              isFetching={isFetching}
              all_data={data.blog_posts}
            />
            <Footer
              blogData={data.blog_posts}
              blogDataLoading={data.isLoading}
              setBlogFilter={context_data.setFilter}
              data_type={"blog"}
            />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions all_posts={data} post_id={data.blog_posts[0].post_id} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
