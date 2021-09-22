import {
  ArrowDownRight16,
  ArrowLeft24,
  ArrowUpRight16,
  Code16,
} from "@carbon/icons-react";
import React, { Fragment } from "react";
import { Link } from "react-scroll";
import {
  blog_categories_small,
  blog_filters,
  blog_sort,
} from "../../../data/blog";
import Tags from "../../../shared/components/Tags";

const BlogPostOptions = ({ post_data }) => {
  const content_id = post_data.content.map((content_data) =>
    content_data.replaceAll(/\s/g, "")
  );
  return (
    <Fragment>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <a
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#539bf5",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowLeft24 fill="#539bf5" style={{ marginRight: "0.5em" }} />{" "}
              Back
            </a>
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
              Contents
            </h4>
            <div>
              {post_data.content.map((blog_item, index) => (
                <div key={index} className="blog-sidenav-category-item">
                  <ArrowUpRight16 fill="#539bf5" />

                  <Link
                    to={content_id[index]}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <a
                      style={{
                        fontFamily: "display-text-medium",
                        fontSize: "0.85em",
                        lineHeight: 1.5,
                      }}
                    >
                      {`${blog_item}`.slice(0, 35)}
                      {blog_item.length > 35 ? "..." : ""}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPostOptions;
