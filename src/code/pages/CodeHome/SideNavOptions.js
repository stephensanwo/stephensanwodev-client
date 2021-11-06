import React, { Fragment } from "react";
import { ArrowLeft24 } from "@carbon/icons-react";
import { code_categories_small } from "../../../data/code";
import Tags from "../../../shared/components/Tags";
import { Link } from "react-router-dom";

const SideNavOptions = () => {
  return (
    <Fragment>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <Link
              to="/"
              style={{
                fontSize: "1em",
                fontWeight: 800,
                color: "#986ee2",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowLeft24 fill="#986ee2" style={{ marginRight: "0.5em" }} />{" "}
              Home
            </Link>
          </div>
        </div>
      </div>

      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <h4
              style={{
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              Topics
            </h4>
            <div>
              {code_categories_small.map((blog_item) => (
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNavOptions;
