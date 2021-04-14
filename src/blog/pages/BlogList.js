import React, { Fragment, useState } from "react";
import SideNav from "../../shared/components/SideNav";
import "../styles/blog-list.scss";
import Image from "../assets/img/derek-thomson-NqJYQ3m_rVA-unsplash.jpg";
import BlogItem from "../components/BlogItem";
import { motion } from "framer-motion";
import { NextFilled32 } from "@carbon/icons-react";
import { Tag } from "carbon-components-react";
const BlogList = () => {
  const [selectedTab, setSelectedTab] = useState({
    tab_0: true,
    tab_1: false,
    tab_2: false,
    tab_3: false,
    tab_4: false,
  });

  const handleTabChange = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setSelectedTab({ [e.target.id]: true, [selectedTab]: false });
  };

  console.log(selectedTab);

  return (
    <Fragment>
      <div className="home-container">
        <div className="home-grid-1">
          <SideNav />
        </div>
        <div className="home-grid-2">
          <div className="home-grid-2-content">
            <div className="featured-article">
              <div className="featured-article-image">
                <div className="home-grid-2-content-header">
                  <div className="logo-content">
                    <h4 style={{ color: "#ffffff" }}>
                      ~/stephensanwo.dev/blog
                    </h4>
                  </div>
                </div>
                <img
                  src={Image}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="featured-article-description">
                <h4>Featured Article</h4>
                <motion.h3>
                  Structuring Python Software Development Projects
                </motion.h3>
                <h4 style={{ marginTop: "2rem" }}>
                  Python Development - From Scripting to Software
                </h4>
                <h4>Stephen Sanwo | July-20-2020</h4>
                <div
                  style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}
                >
                  <Tag type="cyan" title="Clear Filter">
                    Python
                  </Tag>
                  <Tag type="cyan" title="Clear Filter">
                    Software Development
                  </Tag>
                  <Tag type="cyan" title="Clear Filter">
                    API & Microservices
                  </Tag>
                  <Tag type="cyan" title="Clear Filter">
                    Software Architecture
                  </Tag>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                  }}
                >
                  <h4>Read More</h4>
                  <NextFilled32 fill="#f7dc6f" />
                </div>
              </div>
            </div>
            <div className="blog-nav">
              <div className="nav-tabs">
                <div className="nav-tabs-content">
                  <div
                    id="tab_0"
                    onClick={(e) => handleTabChange(e)}
                    className="nav-tab-0"
                  >
                    <h4
                      id="tab_0"
                      style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                      All
                    </h4>
                  </div>
                  <div
                    id="tab_1"
                    onClick={(e) => handleTabChange(e)}
                    className="nav-tab-1"
                  >
                    <h4
                      id="tab_1"
                      style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                      Python
                    </h4>
                  </div>
                  <div
                    id="tab_2"
                    onClick={handleTabChange}
                    className="nav-tab-2"
                  >
                    <h4
                      id="tab_2"
                      style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                      API & Microservices
                    </h4>
                  </div>
                  <div
                    id="tab_3"
                    onClick={handleTabChange}
                    className="nav-tab-3"
                  >
                    <h4
                      id="tab_3"
                      style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                      Client Development
                    </h4>
                  </div>
                  <div
                    id="tab_4"
                    onClick={handleTabChange}
                    className="nav-tab-4"
                  >
                    <h4
                      id="tab_4"
                      style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                      Machine Learning & AI
                    </h4>
                  </div>
                </div>
              </div>
              <div className="nav-search">Search</div>
              <div className="nav-actions">Actions</div>
            </div>
            <div className={`blog-grid ${selectedTab.tab_0 ? "selected" : ""}`}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <div className={`blog-grid ${selectedTab.tab_1 ? "selected" : ""}`}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <div className={`blog-grid ${selectedTab.tab_2 ? "selected" : ""}`}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <div className={`blog-grid ${selectedTab.tab_3 ? "selected" : ""}`}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
            <div className={`blog-grid ${selectedTab.tab_4 ? "selected" : ""}`}>
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
              <BlogItem />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogList;
