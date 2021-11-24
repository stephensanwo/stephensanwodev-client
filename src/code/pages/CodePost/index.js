import React, { useEffect, useContext } from "react";
import CodePostOptions from "./CodePostOptions";
import PostContent from "./PostContent";
import PostOptions from "./PostOptions";
import "./style.scss";
import Footer from "../../../shared/components/Footer";
import { Redirect, useLocation } from "react-router-dom";
import { PostContext } from "../..";
import { Loading } from "carbon-components-react";
import axios from "axios";
import { useQuery } from "react-query";
import URL from "../../../config";

const CodePost = (props) => {
  const code_id = props.match.params.code_id;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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

  // if (isFetching) {
  //   return <Loading />;
  // }

  if (error) {
    <Redirect to="/code" />;
  }

  console.log(data);

  const post_count = 20;

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
        <CodePostOptions />
      </div>
      <div className="blog-post-content-container">
        <div className="blog-post-content">
          <div className="blog-post-content-items">
            <PostContent
              code_content={data[0]}
              all_posts={data}
              next_post_link={next_post_link}
              previous_post_link={previous_post_link}
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
