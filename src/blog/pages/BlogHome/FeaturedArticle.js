import React, { useContext } from "react";
import { Launch16 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import { Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { PostContext } from "../..";
import moment from "moment";

const FeaturedArticle = () => {
  const { path } = useRouteMatch();
  const data = useContext(PostContext);
  const featured_post = data.data.data.featured_posts;

  return (
    <Fragment>
      {featured_post.length === 0 ? (
        <Fragment></Fragment>
      ) : (
        <div className="blog-home-featured-container">
          <div className="blog-home-featured-image">
            <img src={featured_post[0].image_url} width="100%"></img>
          </div>
          <div className="blog-home-featured-description">
            <h4
              style={{
                fontSize: "1em",
                color: "#539bf5",
                marginBottom: "0.4em",
              }}
            >
              Featured Series
            </h4>
            <Link to={`${path}${featured_post[0].post_url}`}>
              <h4
                style={{
                  fontSize: "1.8em",
                  marginBottom: "0.4em",
                }}
                className="header-link-highlight"
              >
                {`${featured_post[0].series_title}`.slice(0, 80)}
                {featured_post[0].series_title.length > 80 ? "..." : ""}
              </h4>
            </Link>
            <div
              style={{
                display: "flex",
                marginBottom: "1em",
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
                Written By: {featured_post[0].author},{" "}
                {moment(featured_post[0].creation_date, "YYYYMMDD").fromNow()}
              </p>
            </div>

            <p>
              {`${featured_post[0].description}`.slice(0, 200)}
              {featured_post[0].description.length > 200 ? "..." : ""}
            </p>
            <div className="blog-content-featured-tags">
              {featured_post[0].tags.map((tag_item, index) => (
                <Tags
                  key={index}
                  type="blog"
                  title={tag_item}
                  color={"generic"}
                />
              ))}
            </div>
            <div className="blog-content-featured-logo">
              <div
                style={{
                  width: "200px",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Launch16 color="#539bf5" />
                <Link to={`/blog/${featured_post[0].post_url}`}>
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
      )}
    </Fragment>
  );
};

export default FeaturedArticle;
