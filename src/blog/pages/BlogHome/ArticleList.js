import React from "react";
import { all } from "../../../data/tmp_blog";
import { Launch16, Share16, ArrowRight24 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import { Link } from "react-router-dom";

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
                fontFamily: "display-text-medium",
                fontSize: "0.8rem",
                color: "#539bf5",
                marginBottom: "0.6em",
              }}
            >
              {article.category}
            </h4>
            <Link to={`/blog/${article.post_id}`}>
              <h4
                style={{
                  marginBottom: "0.8em",
                }}
                className="header-link-highlight"
              >
                {`${article.title}`.slice(0, 80)}
                {article.title.length > 80 ? "..." : ""}
              </h4>
            </Link>
            <p
              style={{
                marginBottom: "0.4em",
              }}
            >
              {`${article.description}`.slice(0, 120)}
              {article.description.length > 120 ? "..." : ""}
            </p>
            <div className="blog-content-featured-tags">
              {article.tags.map((tag, index) => (
                <Tags key={index} type="blog" title={tag} color={"green"} />
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
              </div>
              <div
                style={{
                  width: "40%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Share16 color="#539bf5" />
                <h4
                  style={{
                    fontFamily: "display-text-medium",
                    fontSize: "0.8rem",
                    color: "#539bf5",
                    marginLeft: "0.5rem",
                  }}
                >
                  Copy Link
                </h4>
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
