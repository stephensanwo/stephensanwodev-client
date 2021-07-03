import React, { Fragment } from "react";
import {
  blog_categories_small,
  blog_filters,
  blog_sort,
} from "../../../data/blog";
import Tags from "../../../shared/components/Tags";

const SideNavOptions = () => {
  return (
    <Fragment>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              Topics
            </h4>
            <div>
              {blog_categories_small.map((blog_item) => (
                <div className="blog-sidenav-category-item">
                  {blog_item.logo}
                  <a
                    style={{
                      fontFamily: "display-text-medium",
                      fontSize: "0.85em",
                    }}
                  >
                    {blog_item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              Filters
            </h4>
            <div>
              <div className="blog-sidenav-filters">
                {blog_filters.map((tag, index) => (
                  <div style={{ marginBottom: "0.5rem" }}>
                    <Tags key={index} type="blog" title={tag} color={"green"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-home-sidenav-container blog-last">
        <div className="blog-home-sidenav-content">
          <div>
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              Query Options
            </h4>
            <div>
              <div className="blog-sidenav-filters">
                {blog_sort.map((tag, index) => (
                  <div style={{ marginBottom: "0.5rem" }}>
                    <Tags
                      key={index}
                      type="blog"
                      title={tag}
                      color={"purple"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNavOptions;
