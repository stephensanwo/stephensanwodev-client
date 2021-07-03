import React from "react";
import { featured_article } from "../../data/tmp_blog";
import { Launch16, Share16, ArrowRight16 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";

const FeaturedArticle = () => {
  return (
    <div className="blog-home-featured-container">
      <div className="blog-home-featured-image">
        <img src={featured_article.image_url} width="100%"></img>
      </div>
      <div className="blog-home-featured-description">
        <h4
          style={{
            fontFamily: "display-text-bold",
            fontSize: "0.8em",
            color: "#539bf5",
            marginBottom: "0.4em",
          }}
        >
          # Featured Article
        </h4>
        <h2
          style={{
            color: "#adbac7",
            fontFamily: "display-text-bold",
            fontSize: "1.2em",
            marginBottom: "0.4em",
            lineHeight: 1.5,
          }}
        >
          {featured_article.title}
        </h2>
        <p
          style={{
            fontFamily: "display-text",
            fontWeight: "400",
            fontSize: "1em",
            color: "#768390",
            lineHeight: 1.4,
          }}
        >
          {featured_article.description}
        </p>
        <div className="blog-content-featured-tags">
          <Tags type="blog" title={"Python"} color={"generic"} />
          <Tags type="blog" title={"Software Developement"} color={"green"} />
          <Tags type={"app"} title={"Python"} />
        </div>
        <div className="blog-content-featured-logo">
          <div
            style={{
              width: "15%",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Launch16 color="#539bf5" />
            <p
              style={{
                fontFamily: "display-text-semibold",
                fontSize: "0.8em",
                color: "#539bf5",
                marginLeft: "0.5rem",
              }}
            >
              Read More
            </p>
          </div>
          <div
            style={{
              width: "15%",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <Share16 color="#539bf5" />
            <p
              style={{
                fontFamily: "display-text-semibold",
                fontSize: "0.8em",
                color: "#539bf5",
                marginLeft: "0.5rem",
              }}
            >
              Share
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
