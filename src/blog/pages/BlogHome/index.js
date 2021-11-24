import React, { Fragment, useEffect, useContext } from "react";
import "./style.scss";
import { Devops } from "@carbon/pictograms-react";
import FeaturedArticle from "./FeaturedArticle";
import ArticleList from "./ArticleList";
import Options from "./Options";
import SideNavOptions from "./SideNavOptions";
import Footer from "../../../shared/components/Footer";
import { useLocation, Redirect } from "react-router-dom";
import { PostContext } from "../..";
import Loader from "../../../shared/components/Loader";

const BlogHome = () => {
  const { pathname } = useLocation();

  const data = useContext(PostContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (data.error) {
    return <Redirect to="/error" />;
  }

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
            {data.isLoading ? (
              <div style={{ marginTop: "4rem" }}>
                <Loader height="300px" />
                <Loader height="30px" />
                <Loader height="30px" />
              </div>
            ) : (
              <FeaturedArticle data={data.data.data.featured_posts[0]} />
            )}
            <div
              className="section-divider-line"
              style={{ marginTop: "4rem", marginBottom: "6rem" }}
            ></div>
            {data.isLoading ? (
              <div style={{ marginTop: "4rem" }}>
                <Loader height="150px" />
                <Loader height="30px" />
                <Loader height="30px" />
              </div>
            ) : (
              <ArticleList data={data.data.data} />
            )}

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
