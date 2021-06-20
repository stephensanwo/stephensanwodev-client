import React, { Fragment } from "react";
import { Launch16, Share16, MachineLearningModel24 } from "@carbon/icons-react";

import BlogImage from "../../../assets/svg/article.svg";
import { blog_categories } from "../../../data/blog";

const featured_articles = [
  {
    id: 1,
    category: "Python",
    title: "Structuring your python software development projects",
    description:
      "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics engine without having to write code.",
    image_url:
      "https://hbr.org/resources/images/article_assets/2021/06/Jun21_16_1249103806.jpg",
  },
  {
    id: 2,
    category: "Go",
    title: "Introduction to APIs and Microservices with Go Lang",
    description:
      "From predicting user growth to revenue forecasts, Non-technical users across several functions can now leverage the powerful facebook prophet analytics engine without having to write code.",
    image_url: BlogImage,
  },
];

const Blog = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <h4>Blog</h4>
        </div>
        <div className="section-divider-line"></div>
      </div>
      <div className="blog-content">
        <div className="blog-content-featured">
          <div className="blog-content-featured-title">
            <h4
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5",
                color: "#444c56",
              }}
            >
              Featured Articles & Tutorials
            </h4>
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
                      fontSize: "0.7rem",
                      color: "#a2facf",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {article.category}
                  </h4>
                  <h2
                    style={{
                      color: "#ffffff",
                      fontFamily: "display-text-medium",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "display-text",
                      fontSize: "0.8rem",
                      color: "#adbac7",
                      marginBottom: "0.5rem",
                    }}
                  >
                    From predicting user growth to revenue forecasts,
                    Non-technical users across several functions can now
                    leverage the powerful facebook prophet analytics
                  </p>
                  <div className="blog-content-featured-logo">
                    <div
                      style={{
                        width: "30%",
                        display: "flex",
                        cursor: "pointer",
                      }}
                    >
                      <Launch16 color="#A2FACF" />
                      <h4
                        style={{
                          fontFamily: "display-text-medium",
                          fontSize: "0.7rem",
                          color: "#a2facf",
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
                      }}
                    >
                      <Share16 color="#A2FACF" />
                      <h4
                        style={{
                          fontFamily: "display-text-medium",
                          fontSize: "0.7rem",
                          color: "#a2facf",
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
          <div className="blog-categories-featured-title">
            <h4
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5",
                color: "#444c56",
              }}
            >
              Topics
            </h4>
          </div>
          <div className="blog-categories-featured-container">
            {blog_categories.map((blog_item) => (
              <div className="blog-category-item">
                {blog_item.logo}
                <h2>{blog_item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <img
        width="230px"
        height="230px"
        style={{ marginRight: "0.2rem" }}
        border="0"
        src="https://tpc.googlesyndication.com/simgad/11207024840964040035?"
      ></img>
      <img
        width="230px"
        height="230px"
        border="0"
        src="https://tpc.googlesyndication.com/simgad/11701369496399836607?"
      ></img>
      <img
        width="230px"
        height="230px"
        border="0"
        style={{ marginRight: "0.2rem" }}
        src="https://tpc.googlesyndication.com/simgad/11207024840964040035?"
      ></img>
    </div>
  );
};

export default Blog;
