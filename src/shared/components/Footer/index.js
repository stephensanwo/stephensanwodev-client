import React from "react";
import {
  LogoGithub16,
  LogoLinkedin16,
  LogoTwitter16,
  Email16,
} from "@carbon/icons-react";
import "./style.scss";
import { blog_categories_small } from "../../../data/blog";
import { code_categories_small } from "../../../data/code";
import { app_categories_small } from "../../../data/apps";
import { apps_data } from "../../../data/apps";
import Loader from "../Loader";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = ({
  data_type,
  blogData,
  blogDataLoading,
  setBlogFilter,
  setCodeFilter,
  setAppFilter,
}) => {
  const { pathname } = useLocation();

  const Refocus = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer-component-container">
      {data_type === "app" ? (
        <div className="footer-category-content">
          <div
            style={{
              borderBottom: "0.1px solid #addec9",
              marginBottom: "1.5em",
            }}
          >
            <h4
              style={{
                fontSize: "1em",
                color: "#fff",
                marginBottom: "1em",
              }}
            >
              App Categories
            </h4>
          </div>
          {app_categories_small.map((app_item) => (
            <div
              className="blog-sidenav-category-item"
              onClick={(e) => {
                setAppFilter(e.target.innerText);
                Refocus();
              }}
            >
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
          <div
            style={{ borderBottom: "0.1px solid #addec9", marginTop: "4em" }}
          >
            <h4
              style={{
                color: "#fff",
                marginBottom: "1em",
              }}
            >
              Top Apps
            </h4>
          </div>
          {apps_data.map((apps, index) => (
            <div style={{ marginTop: "1.5rem" }}>
              <a href={apps.app_url} target="_blank" rel="noopener noreferrer">
                <h4
                  style={{
                    fontSize: "0.8em",
                    marginBottom: "0.4em",
                  }}
                  className="header-link-highlight"
                >
                  {apps.title}
                </h4>
              </a>
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
      ) : data_type === "code" ? (
        <div className="footer-category-content">
          <div
            style={{
              borderBottom: "0.1px solid #addec9",
              marginBottom: "1.5em",
            }}
          >
            <h4
              style={{
                fontSize: "1em",
                color: "#fff",
                marginBottom: "1em",
              }}
            >
              Topics
            </h4>
          </div>
          {code_categories_small.map((app_item) => (
            <div
              className="blog-sidenav-category-item"
              onClick={(e) => {
                setCodeFilter(e.target.innerText);
                Refocus();
              }}
            >
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
        </div>
      ) : (
        <div className="footer-category-content">
          <div
            style={{
              borderBottom: "0.1px solid #addec9",
              marginBottom: "1.5em",
            }}
          >
            <h4
              style={{
                color: "#fff",
                marginBottom: "1em",
              }}
            >
              Topics
            </h4>
          </div>
          {blog_categories_small.map((blog_item) => (
            <div
              className="blog-sidenav-category-item"
              onClick={(e) => {
                setBlogFilter(e.target.innerText);
                Refocus();
              }}
            >
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
          <div
            style={{ borderBottom: "0.1px solid #addec9", marginTop: "4em" }}
          >
            <h4
              style={{
                color: "#fff",
                marginBottom: "1em",
              }}
            >
              Suggested Next Reads{" "}
            </h4>
          </div>
          {blogDataLoading ? (
            <div style={{ marginTop: "2rem" }}>
              <Loader height="30px" />
              <Loader height="60px" />
            </div>
          ) : (
            blogData.map((article, index) => (
              <div style={{ marginTop: "1.5rem" }} key={index}>
                <Link to={`/blog/${article.post_url}`}>
                  <h4
                    style={{
                      marginBottom: "0.4em",
                      fontSize: "0.8em",
                    }}
                    className="header-link-highlight"
                  >
                    {article.title}
                  </h4>
                </Link>
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
            ))
          )}
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
