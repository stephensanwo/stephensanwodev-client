import React from "react";
import { featured_article } from "../../../data/tmp_blog";
import { Launch16, Copy16 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import { Link, useRouteMatch } from "react-router-dom";

const FeaturedArticle = () => {
  const { path } = useRouteMatch();
  return (
    <div className="blog-home-featured-container">
      <div className="blog-home-featured-image">
        <img src={featured_article.image_url} width="100%"></img>
      </div>
      <div className="blog-home-featured-description">
        <h4
          style={{
            fontFamily: "display-text-bold",
            fontSize: "1em",
            color: "#539bf5",
            marginBottom: "0.4em",
          }}
        >
          Featured Article
        </h4>
        <Link to={`${path}${featured_article.id}`}>
          <h4
            style={{
              fontSize: "1.8em",
              marginBottom: "0.4em",
            }}
            className="header-link-highlight"
          >
            {`${featured_article.title}`.slice(0, 80)}
            {featured_article.title.length > 80 ? "..." : ""}
          </h4>
        </Link>

        <p>
          {`${featured_article.description}`.slice(0, 200)}
          {featured_article.description.length > 200 ? "..." : ""}
        </p>
        <div className="blog-content-featured-tags">
          {featured_article.tags.map((tag_item, index) => (
            <Tags type="blog" title={tag_item} color={"generic"} />
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
            <Link to={`/blog/${featured_article.id}`}>
              <h4
                style={{
                  fontFamily: "display-text-medium",
                  fontSize: "0.8rem",
                  color: "#539bf5",
                  marginLeft: "0.5rem",
                }}
              >
                Read More
              </h4>
            </Link>
          </div>
          <div
            style={{
              width: "200px",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Copy16 color="#539bf5" />
            <h4
              style={{
                fontFamily: "display-text-medium",
                fontSize: "0.8rem",
                color: "#539bf5",
                marginLeft: "0.8rem",
              }}
            >
              Copy Link
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
