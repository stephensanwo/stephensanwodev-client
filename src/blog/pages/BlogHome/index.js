import React, { useEffect } from "react";
import "./style.scss";
import { Devops } from "@carbon/pictograms-react";
import FeaturedArticle from "./FeaturedArticle";
import ArticleList from "./ArticleList";
import Options from "./Options";
import SideNavOptions from "./SideNavOptions";
import Footer from "../../../shared/components/Footer";
import { useLocation } from "react-router-dom";

const BlogHome = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="blog-home-container">
      <div className="blog-home-sidenav">
        <SideNavOptions />
      </div>
      <div className="blog-home-content-container">
        <div className="blog-home-content">
          <div className="blog-home-content-items">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Devops fill="#539bf5" />
              <h4
                style={{
                  fontSize: "2rem",
                  color: "#539bf5",
                  fontWeight: 600,
                  marginLeft: "2rem",
                }}
              >
                Blog
              </h4>
            </div>

            <FeaturedArticle />
            <div
              className="section-divider-line"
              style={{ marginTop: "4rem", marginBottom: "6rem" }}
            ></div>
            <ArticleList />
            <Footer />
          </div>
        </div>
        <div className="blog-home-options">
          <Options />
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
