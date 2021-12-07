import React, { useContext } from "react";
import { Launch16, ArrowRight24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import { Link } from "react-router-dom";
import { PostContext } from "../..";
import { InlineLoading } from "carbon-components-react";
import moment from "moment";

const ArticleList = () => {
  const data = useContext(PostContext);

  const fetchData = () => {
    data.setLimit(data.limit + 5);
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      {data.data.data.blog_posts.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h4 style={{ textAlign: "center" }}>
            {data.isFetching
              ? ""
              : `No posts available for the current filter - ${data.filter}`}
          </h4>
        </div>
      ) : (
        data.data.data.blog_posts.map((article, index) => (
          <div className="blog-home-articles-container" key={index}>
            <div className="blog-home-articles-image">
              <img src={article.image_url} width="100%"></img>
            </div>
            <div className="blog-home-articles-description">
              <h4
                style={{
                  fontSize: "0.8rem",
                  color: "#539bf5",
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
                  {`${article.title}`.slice(0, 180)}
                  {article.title.length > 180 ? "..." : ""}
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
                  By: {article.author},{" "}
                  {moment(article.creation_date, "YYYYMMDD").fromNow()}
                </p>
              </div>
              <p
                style={{
                  marginBottom: "0.4em",
                }}
              >
                {`${article.description}`.slice(0, 60)}
                {article.description.length > 60 ? "..." : ""}
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
                  <Launch16 color="#539bf5" />
                  <Link to={`/blog/${article.post_url}`}>
                    <h4
                      style={{
                        fontWeight: 400,
                        fontSize: "0.8rem",
                        color: "#539bf5",
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
            color: "#539bf5",
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
          <ArrowRight24 fill="#539bf5" />
        )}
      </div>
    </div>
  );
};

export default ArticleList;
