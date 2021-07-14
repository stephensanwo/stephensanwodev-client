import React, { Fragment } from "react";
import { Launch16, Share16, ArrowRight24 } from "@carbon/icons-react";

import BlogImage from "../../../assets/svg/article.svg";
import { blog_categories } from "../../../data/blog";
import { Devops, Javascript } from "@carbon/pictograms-react";
import Tags from "../../components/Tags";

const featured_articles = [
  {
    id: 1,
    category: "Python",
    title: "Structuring your python software development projects",
    description:
      "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics engine without having to write code.",
    image_url: "https://ddxzec2p5v0iq.cloudfront.net/image2.jpg",
    tags: ["Python", "API", "Javascript"],
  },
  {
    id: 2,
    category: "Go",
    title: "Introduction to APIs and Microservices with Go Lang",
    description:
      "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics engine without having to write code.",
    image_url: BlogImage,
    tags: ["Python", "API"],
  },
];

const Blog = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Devops fill="#539bf5" />
            <h4 style={{ color: "#539bf5" }}>Blog</h4>
          </div>

          <div className="see-all-container">
            <a
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#539bf5",
                marginRight: "0.5rem",
              }}
            >
              Read All Posts
            </a>
            <ArrowRight24 fill="#539bf5" />
          </div>
        </div>
        <div className="section-divider-line"></div>
      </div>
      <div className="blog-content">
        <div className="blog-content-featured">
          <div className="blog-content-featured-title">
            <h4>Featured Articles & Tutorials</h4>
          </div>
          <div className="blog-content-featured-container">
            {featured_articles.map((article, index) => (
              <div className="blog-content-featured-container-item">
                <div className="blog-content-featured-image">
                  <img src={article.image_url} width="100%"></img>
                </div>
                <div className="blog-content-featured-description">
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
                      lineHeight: 1.2,
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "display-text",
                      fontWeight: "400",
                      fontSize: "1em",
                      color: "#768390",
                      marginBottom: "0.4em",
                      lineHeight: "1.4",
                    }}
                  >
                    {article.description}
                  </p>
                  <div className="blog-content-featured-tags">
                    {article.tags.map((tag, index) => (
                      <Tags
                        key={index}
                        type="blog"
                        title={tag}
                        color={"generic"}
                      />
                    ))}
                  </div>
                  <div className="blog-content-featured-logo">
                    <div
                      style={{
                        width: "30%",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <Launch16 color="#539bf5" />
                      <h4
                        style={{
                          fontFamily: "display-text-medium",
                          fontSize: "0.7rem",
                          color: "#539bf5",
                          marginLeft: "0.5rem",
                        }}
                      >
                        Read More
                      </h4>
                    </div>
                    <div
                      style={{
                        width: "30%",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <Share16 color="#539bf5" />
                      <h4
                        style={{
                          fontFamily: "display-text-medium",
                          fontSize: "0.7rem",
                          color: "#539bf5",
                          marginLeft: "0.5rem",
                        }}
                      >
                        Share
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="blog-categories">
          <div className="blog-categories-title">
            <h4>Topics</h4>
          </div>
          <div className="blog-categories-container">
            {blog_categories.map((blog_item) => (
              <div className="blog-category-item">
                {blog_item.logo}
                <h2>{blog_item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
