import React, { Fragment } from "react";
import {
  Launch16,
  Copy16,
  ArrowRight24,
  ArrowRight16,
} from "@carbon/icons-react";

import BlogImage from "../../../assets/svg/article.svg";
import { blog_categories } from "../../../data/blog";
import { Devops, Javascript } from "@carbon/pictograms-react";
import Tags from "../../components/Tags";
import { Link } from "react-router-dom";

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
            <Link
              style={{
                color: "#539bf5",
              }}
              to="/blog"
            >
              Read All Posts
            </Link>
            <ArrowRight24
              fill="#539bf5"
              className="see-all-container-logo-large"
            />
            <ArrowRight16
              fill="#539bf5"
              className="see-all-container-logo-small"
            />
          </div>
        </div>
        <div className="section-divider-line"></div>
      </div>
      <div className="blog-content">
        <div className="blog-content-featured">
          <div className="blog-content-featured-title">
            <h4>Articles & Tutorials</h4>
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
                      fontFamily: "display-text-medium",
                      fontSize: "0.8rem",
                      color: "#539bf5",
                      marginBottom: "0.6em",
                    }}
                  >
                    {article.category}
                  </h4>
                  <Link to={`/blog/${article.id}`}>
                    <h4
                      style={{
                        marginBottom: "0.8em",
                      }}
                      className="header-link-highlight"
                    >
                      {article.title}
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
                        width: "40%",
                        display: "flex",
                        cursor: "pointer",
                        alignItems: "center",
                      }}
                    >
                      <Launch16 color="#539bf5" />
                      <Link to={`/blog/${article.id}`}>
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
                        width: "40%",
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
                <div>{blog_item.logo}</div>

                <h4>{blog_item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
