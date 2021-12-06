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
  const code_id = props.match.params.code_id;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const getCode = async () => {
    const { data } = await axios.get(`${URL}/api/v1/blog/code_data/${code_id}`);
    return data.code_posts;
  };

  const { isLoading, status, error, data, isFetching } = useQuery(
    ["code_item", code_id],
    () => getCode(),
    { keepPreviousData: false, refetchOnWindowFocus: false }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    <Redirect to="/code" />;
  }

  const post_count = 5;

  let newer_post_link = `/code/${Number(code_id) + 1}`;
  let older_post_link;

  if (Number(code_id) >= 2) {
    older_post_link = `/code/${Number(code_id) - 1}`;
  } else {
    older_post_link = `/code`;
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
              older_post_link={older_post_link}
              post_count={post_count}
              isFetching={isFetching}
            />
            <Footer data_type={"code"} />
          </div>
        </div>
        <div className="blog-home-options">
          <PostOptions all_posts={data} code_id={code_id} />
        </div>
      </div>
    </div>
  );
};

export default CodePost;
