import React from "react";
import {
  LogoGithub16,
  LogoLinkedin16,
  LogoTwitter16,
  Email16,
} from "@carbon/icons-react";
import "./style.scss";
import { blog_categories_small } from "../../../data/blog";
import { top_articles } from "../../../data/tmp_blog";
import { app_categories_small } from "../../../data/apps";
import { featured_apps_data } from "../../../data/apps";

const Footer = ({ data_type }) => {
  return (
    <div className="footer-component-container">
      {data_type === "app" ? (
        <div className="footer-category-content">
          <div
            style={{ borderBottom: "1px solid #444c56", marginBottom: "1.5em" }}
          >
            <h4
              style={{
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "1em",
              }}
            >
              App Categories
            </h4>
          </div>
          {app_categories_small.map((app_item) => (
            <div className="blog-sidenav-category-item">
              {app_item.logo}
              <h4
                style={{
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                }}
                className="header-link-highlight"
              >
                {app_item.title}
              </h4>
            </div>
          ))}
          <div style={{ borderBottom: "1px solid #444c56", marginTop: "4em" }}>
            <h4
              style={{
                color: "#adbac7",
                marginBottom: "1em",
              }}
            >
              Top Apps
            </h4>
          </div>
          {featured_apps_data.map((apps, index) => (
            <div style={{ marginTop: "1.5rem" }}>
              <h4
                style={{
                  fontSize: "0.8em",
                  marginBottom: "0.4em",
                }}
                className="header-link-highlight"
              >
                {apps.title}
              </h4>
              <p
                style={{
                  fontSize: "0.8em",
                  marginBottom: "0.4em",
                  width: "100%",
                }}
              >
                {`${apps.desc}`.slice(0, 160)}
                {apps.desc.length > 160 ? "..." : ""}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="footer-category-content">
          <div
            style={{ borderBottom: "1px solid #444c56", marginBottom: "1.5em" }}
          >
            <h4
              style={{
                color: "#adbac7",
                marginBottom: "1em",
              }}
            >
              Topics
            </h4>
          </div>
          {blog_categories_small.map((blog_item) => (
            <div className="blog-sidenav-category-item">
              {blog_item.logo}
              <h4
                style={{
                  marginLeft: "1rem",
                  fontSize: "0.8rem",
                }}
                className="header-link-highlight"
              >
                {blog_item.title}
              </h4>
            </div>
          ))}
          <div style={{ borderBottom: "1px solid #444c56", marginTop: "4em" }}>
            <h4
              style={{
                color: "#adbac7",
                marginBottom: "1em",
              }}
            >
              Top Blog Posts
            </h4>
          </div>
          {top_articles.map((article, index) => (
            <div style={{ marginTop: "1.5rem" }}>
              <h4
                style={{
                  marginBottom: "0.4em",
                  fontSize: "0.8em",
                }}
                className="header-link-highlight"
              >
                {article.title}
              </h4>
              <p
                style={{
                  fontSize: "0.8em",
                  marginBottom: "0.4em",
                  width: "100%",
                }}
              >
                {`${article.description}`.slice(0, 160)}
                {article.description.length > 160 ? "..." : ""}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="footer-component-content">
        <div className="footer-component-contact-section">
          <div className="footer-component-contact-section-logo">
            <div
              className="footer-section-contact"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <Email16 color="#768390" />
              <small
                style={{
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                stephen.sanwo@icloud.com
              </small>
            </div>
            <div
              className="footer-section-contact"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <LogoGithub16 color="#768390" />
              <small
                style={{
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                github.com/stephensanwo
              </small>
            </div>
            <div
              className="footer-section-contact"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <LogoLinkedin16 color="#768390" />
              <small
                style={{
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                stephensanwo
              </small>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <LogoTwitter16 color="#768390" />
              <small
                style={{
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                @stephensanwo
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
