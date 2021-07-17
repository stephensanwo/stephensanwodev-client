import React from "react";
import { all } from "../../../data/tmp_blog";
import { Launch16, Share16, ArrowRight24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";

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
                fontFamily: "display-text",
                fontSize: "0.8em",
                color: "#539bf5",
                marginBottom: "0.6em",
              }}
            >
              {article.category}
            </h4>
            <h2
              style={{
                color: "#adbac7",
                fontFamily: "display-text-bold",
                fontSize: "1em",
                marginBottom: "0.5em",
                lineHeight: 1.4,
              }}
            >
              {`${article.title}`.slice(0, 80)}
              {article.title.length > 80 ? "..." : ""}
            </h2>
            <p
              style={{
                fontFamily: "display-text",
                fontSize: "1em",
                color: "#768390",
                marginBottom: "0.4em",
                lineHeight: 1.4,
              }}
            >
              {`${article.description}`.slice(0, 200)}
              {article.description.length > 200 ? "..." : ""}
            </p>
            <div className="blog-content-featured-tags">
              {article.tags.map((tag, index) => (
                <Tags key={index} type="blog" title={tag} color={"green"} />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "120px",
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

      <div className="see-all-blog">
        <a
          style={{
            fontFamily: "display-text-bold",
            fontSize: "1em",
            color: "#539bf5",
            marginRight: "0.5rem",
          }}
        >
          More Posts
        </a>
        <ArrowRight24 fill="#539bf5" />
      </div>
    </div>
  );
};

export default ArticleList;
