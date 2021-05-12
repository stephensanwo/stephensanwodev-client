import React from "react";
import { Tag } from "carbon-components-react";
import { Launch24 } from "@carbon/icons-react";
import "../styles/home.scss";
import { motion } from "framer-motion";
import BlogImage from "../../assets/img/derek-thomson-NqJYQ3m_rVA-unsplash.jpg";
import { blog_categories } from "../../data/blog_categories";
import Tile from "../components/Tile";

const Blog = () => {
  return (
    <section className="home-grid-2-blog">
      <div className="home-blog-content">
        <div className="home-blog-content-1">
          <h4
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: "#19646E",
            }}
          >
            Blog
          </h4>
          <a href="">See Blog Posts</a>
        </div>
        <div className="home-blog-content-2">
          <div className="blog-featured-article-image">
            <motion.img
              src={BlogImage}
              alt=""
              width="100%"
              height="100%"
              whileHover={{ scale: 1.05 }}
              transition={{ ease: "easeOut", duration: 0.5 }}
            />
          </div>
          <div className="blog-featured-article-text">
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
              From predicting user growth to revenue forecasts, Non-technical
              users across several functions can now leverage the powerful
              facebook prophet analytics engine without having to write code.
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
        <div className="home-blog-content-3">
          {blog_categories.map((data, index) => {
            return <Tile data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
