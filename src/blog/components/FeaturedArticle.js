import React, { Fragment } from "react";
import SliderMenu from "../../shared/components/SliderMenu";
import { motion } from "framer-motion";
import BlogImage from "../../assets/svg/article.svg";
import "../styles/blog-list.scss";
import { Tag } from "carbon-components-react";
import Image from "../../assets/svg/article.svg";

const FeaturedArticle = ({ isNavOpen }) => {
  return (
    <Fragment>
      <section className="bloglist-featured-article">
        <div className="bloglist-featured-content">
          <div className="bloglist-header-container">
            <div className="blog-header">
              <h4
                style={{
                  fontSize: "1rem",
                  color: "#A2FACF",
                }}
              >
                stephensanwo.dev
              </h4>
              <h4
                style={{
                  fontSize: "0.8rem",
                  color: "#ffffff",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                {">"}
              </h4>

              <h4 style={{ fontSize: "0.7rem", color: "#ffffff" }}>Blog</h4>
            </div>
          </div>
          <img src={Image} alt="" width="100%" height="100%" />
          {/* <div className="featured-article-content">
              <div className="bloglist-featured-article-banner">
                <div className="bloglist-featured-article-image">
                  <motion.img
                    src={BlogImage}
                    alt=""
                    width="100%"
                    height="100%"
                    whileHover={{ scale: 1.05, filter: "brightness(50%)" }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                  />
                </div>
                <div className="bloglist-featured-article-text">
                  <h4>Featured Article</h4>
                  <h4
                    style={{
                      fontSize: "2.2rem",
                      textAlign: "left",
                      color: "#0d1116",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                      lineHeight: 1.2,
                    }}
                  >
                    Structuring your python software development projects
                  </h4>
                  <p style={{ marginBottom: "1rem" }}>
                    From predicting user growth to revenue forecasts,
                    Non-technical users across several functions can now
                    leverage the powerful facebook prophet analytics engine
                    without having to write code.
                  </p>
                  <a href="">Read More</a>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "left",
                      width: "100%",
                      marginTop: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Tag type="cyan" title="Python">
                      Python
                    </Tag>
                    <Tag type="green" title="Javascript">
                      Javascript
                    </Tag>
                    <Tag type="red" title="Python">
                      Redis
                    </Tag>
                    <Tag type="grey" title="Python">
                      React
                    </Tag>
                    <Tag type="teal" title="Python">
                      FastAPI
                    </Tag>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </section>
      {isNavOpen === "open" ? (
        <SliderMenu isNavOpen={isNavOpen} />
      ) : isNavOpen === "closed" ? (
        <SliderMenu isNavOpen={isNavOpen} />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default FeaturedArticle;
