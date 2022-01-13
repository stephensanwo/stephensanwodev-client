import React, { useState } from "react";
import {
  Launch16,
  Copy16,
  ArrowRight24,
  ArrowRight16,
} from "@carbon/icons-react";
import { blog_categories } from "../../../data/blog";
import { Devops } from "@carbon/pictograms-react";
import Tags from "../../components/Tags";
import { Link } from "react-router-dom";

const featured_articles = [
  {
    id: 1,
    category: "Python",
    title:
      "Build a full stack AI Chatbot with GPT, React, FastAPI, Redis & AWS",
    description:
      "One of the best ways to learn how to develop full stack applications is to build projects that cover the end to end development process, from designing the solution architecture, to building the API, developing the user interface, and finally deploying your application. This tutorial will take your through each step using a project based example.",
    image_url: "https://ddxzec2p5v0iq.cloudfront.net/article.svg",
    tags: [
      "Python",
      "GPT",
      "WebSockets",
      "React",
      "FastAPI",
      "Redis",
      "AWS",
      "API",
    ],
    url: "https://www.stephensanwo.dev/blog/build-a-full-stack-ai-chatbot-part-i-introduction",
  },
  {
    id: 2,
    category: "Python",
    title: "Build a full stack AI Chatbot Part II - GPT-J-6B Wrapper",
    description:
      "In this section, we will focus on building a wrapper to communicate with the GPT-J-6B API, send prompts from a user to the API in a conversational format, and receive and transform responses for our chat application",
    image_url: "https://ddxzec2p5v0iq.cloudfront.net/image2.jpg",
    tags: ["Python", "Software Development"],
    url: "https://www.stephensanwo.dev/blog/build-a-full-stack-ai-chatbot-part-ii-gpt-j-6b-wrapper",
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
                      fontSize: "0.8rem",
                      color: "#539bf5",
                      marginBottom: "0.6em",
                    }}
                  >
                    {article.category}
                  </h4>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4
                      style={{
                        marginBottom: "0.8em",
                      }}
                      className="header-link-highlight"
                    >
                      {article.title}
                    </h4>
                  </a>
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
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h4
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 400,
                            color: "#539bf5",
                            marginLeft: "0.5rem",
                          }}
                        >
                          Read More
                        </h4>
                      </a>
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
