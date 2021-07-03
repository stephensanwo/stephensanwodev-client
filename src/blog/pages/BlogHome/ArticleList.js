import React from "react";
import { all } from "../../data/tmp_blog";
import { Launch16, Share16, ArrowRight16 } from "@carbon/icons-react";

const ArticleList = () => {
  return (
    <div>
      {all.map((article, index) => (
        <div className="blog-home-articles-container">
          <div className="blog-home-articles-image">
            <img src={article.image_url} width="100%"></img>
          </div>
          <div className="blog-home-articles-description">
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "0.8em",
                color: "#539bf5",
                marginBottom: "0.4em",
              }}
            >
              {article.category}
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
              {article.title}
            </h2>
            <p
              style={{
                fontFamily: "display-text",
                fontSize: "1em",
                color: "#768390",
                marginBottom: "0.5rem",
                lineHeight: 1.4,
              }}
            >
              {article.description}
            </p>
            <div className="blog-content-featured-logo">
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Launch16 color="#539bf5" />
                <p
                  style={{
                    fontFamily: "display-text-semibold",
                    fontSize: "0.6rem",
                    color: "#539bf5",
                    marginLeft: "0.5rem",
                  }}
                >
                  Read More
                </p>
              </div>
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Share16 color="#539bf5" />
                <p
                  style={{
                    fontFamily: "display-text-semibold",
                    fontSize: "0.6rem",
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
      ))}
    </div>
  );
};

export default ArticleList;
