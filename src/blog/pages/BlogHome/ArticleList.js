import React, { useContext } from "react";
import { Launch16, ArrowRight24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import { Link } from "react-router-dom";
import { PostContext } from "../..";
import { InlineLoading } from "carbon-components-react";
import moment from "moment";
import { Fragment } from "react/cjs/react.production.min";

const ArticleList = () => {
  const data = useContext(PostContext);

  const fetchData = () => {
    data.setLimit(data.limit + 5);
  };

  return (
    <Fragment>
      {data.data.data.blog_posts.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "4rem",
            marginBottom: "4rem",
          }}
        >
          <h4 style={{ textAlign: "center" }}>
            {data.isFetching
              ? ""
              : `No posts available for the current filter - ${data.filter}`}
          </h4>
        </div>
      ) : (
        data.data.data.blog_posts.map((article, index) => (
          <div key={index} className="blog-home-featured-container">
            <div className="blog-home-featured-image">
              <img
                alt={article.title}
                src={article.image_url}
                width="100%"
              ></img>
            </div>
            <div className="blog-home-featured-description">
              <h4
                style={{
                  fontSize: "0.8rem",
                  color: "#fff",
                  marginBottom: "0.6em",
                }}
              >
                {article.category}
              </h4>
              <Link to={`/blog/${article.post_url}`}>
                <h4
                  style={{
                    marginBottom: "0.5em",
                  }}
                  className="header-link-highlight"
                >
                  {article.title}
                  {/* {`${article.title}`.slice(0, 180)}
                  {article.title.length > 180 ? "..." : ""} */}
                </h4>
              </Link>
              <div
                style={{
                  display: "flex",
                  marginBottom: "0.6em",
                }}
              >
                <p
                  style={{
                    fontFamily: "IBM Plex Sans",
                    fontWeight: 500,
                    fontSize: "0.8em",
                    color: "#768390",
                  }}
                >
                  By: {article.author}
                </p>
              </div>
              <p
                style={{
                  marginBottom: "0.4em",
                }}
              >
                {article.description}
                {/* {`${article.description}`.slice(0, 400)}
                {article.description.length > 400 ? "..." : ""} */}
              </p>
              <div className="blog-content-featured-tags">
                {article.tags.map((tag, index) => (
                  <Tags key={index} type="blog" title={tag} color={"generic"} />
                ))}
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "40%",
                    display: "flex",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <Launch16 color="#addec9" />
                  <Link to={`/blog/${article.post_url}`}>
                    <h4
                      style={{
                        fontWeight: 400,
                        fontSize: "0.8rem",
                        color: "#addec9",
                        marginLeft: "0.5rem",
                      }}
                    >
                      Read More
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="see-all-blog" onClick={fetchData}>
        <a
          style={{
            fontSize: "1em",
            fontWeight: 800,
            color: "#addec9",
            marginRight: "0.5rem",
          }}
        >
          More Posts
        </a>
        {data.isFetching ? (
          <span>
            <InlineLoading width="24px" height="24px" />
          </span>
        ) : (
          <ArrowRight24 fill="#addec9" />
        )}
      </div>
    </Fragment>
  );
};

export default ArticleList;
