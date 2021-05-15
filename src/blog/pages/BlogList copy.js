import React, { Fragment, useState } from "react";
import SideNav from "../../shared/components/SideNav";
import "../styles/blog-list.scss";
import Image from "../assets/img/derek-thomson-NqJYQ3m_rVA-unsplash.jpg";
import BlogItem from "../components/BlogItem";
import { motion } from "framer-motion";
import { NextFilled32 } from "@carbon/icons-react";
import { Tag } from "carbon-components-react";
const BlogList = () => {
  const [selectedTab, setSelectedTab] = useState("tab_0");
  const [isNavOpen, setIsNavOpen] = useState("");

  const handleTabChange = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setSelectedTab(e.target.id);
  };

  console.log(selectedTab);

  return (
    <Fragment>
      <div className="home-container">
        <div className="home-grid-1">
          <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="home-grid-2">
          <div className="home-grid-header">
            {" "}
            <div className="logo-content">
              <h4 style={{ color: "#ffffff", fontSize: "1rem" }}>
                stephensanwo.dev
              </h4>
              <h4
                style={{
                  color: "#ffffff",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                |
              </h4>
              <h4 style={{ color: "#ffffff" }}> blog</h4>
            </div>
          </div>
          <div className="home-grid-2-content">
            <div className="featured-article">
              <div className="featured-article-image">
                <div className="home-grid-2-content-header"></div>
                {/* <img
                  src={Image}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                /> */}
              </div>
              <div className="featured-article-description">
                <h4 style={{ marginBottom: "1rem", color: "#0BBBA9" }}>
                  Featured Article
                </h4>
                <motion.h1 style={{ color: "#A7E8E0" }}>
                  Structuring Python Software Development Projects
                </motion.h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "2rem",
                  }}
                >
                  <small style={{ color: "#A7E8E0" }}>
                    Python Development - From Scripting to Software
                  </small>
                  <small style={{ marginTop: "0.5rem", color: "#A7E8E0" }}>
                    Stephen Sanwo | July-20-2020
                  </small>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "0.5rem",
                    marginTop: "1rem",
                  }}
                >
                  <Tag type="cyan" title="Clear Filter">
                    Python
                  </Tag>
                  <Tag type="cyan" title="Clear Filter">
                    Software Development
                  </Tag>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ marginRight: "0.5rem" }}>Read More</h4>
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
                    id="tab_2"
                    onClick={handleTabChange}
                    className="nav-tab-2"
                  >
                    <h4
                      id="tab_2"
                      style={{ textAlign: "center", paddingBottom: "1rem" }}
                    >
                      API & <br /> Microservices
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
                      Client <br />
                      Development
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
                      Deep Learning <br /> & AI
                    </h4>
                  </div>
                </div>
              </div>
              <div className="nav-search">Search</div>
              <div className="nav-actions">Actions</div>
            </div>
            <div
              className={`blog-grid ${
                selectedTab === "tab_0" ? "selected" : ""
              }`}
            >
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
            <div
              className={`blog-grid ${
                selectedTab === "tab_1" ? "selected" : ""
              }`}
            >
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
            <div
              className={`blog-grid ${
                selectedTab === "tab_2" ? "selected" : ""
              }`}
            >
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
            <div
              className={`blog-grid ${
                selectedTab === "tab_3" ? "selected" : ""
              }`}
            >
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
            <div
              className={`blog-grid ${
                selectedTab === "tab_4" ? "selected" : ""
              }`}
            >
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
