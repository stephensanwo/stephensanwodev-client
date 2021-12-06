import React, { Fragment, useContext } from "react";
import { ArrowLeft24 } from "@carbon/icons-react";
import {
  blog_categories_small,
  blog_filters,
  blog_sort,
} from "../../../data/blog";
import Tags from "../../../shared/components/Tags";
import { Link } from "react-router-dom";
import { PostContext } from "../..";

const SideNavOptions = () => {
  const data = useContext(PostContext);

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
                color: "#539bf5",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowLeft24 fill="#539bf5" style={{ marginRight: "0.5em" }} />{" "}
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
              {blog_categories_small.map((blog_item, index) => (
                <div
                  className="blog-sidenav-category-item"
                  onClick={(e) => data.setFilter(e.target.innerText)}
                  key={index}
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
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNavOptions;
