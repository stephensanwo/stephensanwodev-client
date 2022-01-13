import React, { useEffect, useContext } from "react";
import CodePostOptions from "./CodePostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import Footer from "../../../shared/components/Footer";
import { Redirect, useLocation } from "react-router-dom";
import { Loading } from "carbon-components-react";
import axios from "axios";
import { useQuery } from "react-query";
import URL from "../../../config";
import Helmet from "react-helmet";

const CodePost = (props) => {
  const code_url = props.match.params.code_url;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const getCode = async () => {
    const { data } = await axios.get(
      `${URL}/api/v1/blog/code_post?code_url=${code_url}`
    );
    return data.code_posts;
  };

  const { isLoading, status, error, data, isFetching } = useQuery(
    ["code_item", code_url],
    () => getCode(),
    { keepPreviousData: false, refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <Redirect to="/code" />;
  }

  let newer_post_link;
  let newer_post_value;

  if (data.length > 1) {
    newer_post_link = `/code/${data[1].code_url}`;
    newer_post_value = "Next Post";
  } else {
    newer_post_link = "/code";
    newer_post_value = "Back Home";
  }

  let older_post_link;
  let older_post_value;

  if (data[0].code_id === "1") {
    older_post_link = "/code";
    older_post_value = "Back Home";
  } else {
    older_post_link = "";
    older_post_value = "Back";
  }

  document.title = `Stephen Sanwo - Code - ${data[0].title}`;

  let seo_keywords = "";
  data[0].tags.map((tag, index) => {
    return (seo_keywords = seo_keywords + tag + ", ");
  });

  const meta_content = `${data[0].category} - ${data[0].title}`;
  return (
    <div className="blog-home-container">
      <Helmet>
        <title>Stephen Sanwo - Code - {data[0].title}</title>
        <meta name="description" content={data[0].description} />
        <meta name="keywords" content={seo_keywords} />
      </Helmet>
      <div className="blog-home-sidenav">
        <CodePostOptions />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent
              code_content={data[0]}
              all_posts={data}
              newer_post_link={newer_post_link}
              newer_post_value={newer_post_value}
              older_post_link={older_post_link}
              older_post_value={older_post_value}
              isFetching={isFetching}
            />
            <Footer data_type={"code"} />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions all_posts={data} code_id={data[0].code_id} />
        </div>
      </div>
    </div>
  );
};

export default CodePost;
