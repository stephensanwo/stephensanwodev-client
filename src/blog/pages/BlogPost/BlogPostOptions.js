import { ArrowLeft24, ArrowUpRight16 } from "@carbon/icons-react";
import React, { Fragment } from "react";
import { Link } from "react-scroll";
import { useRouteMatch } from "react-router-dom";

const BlogPostOptions = ({ post_data }) => {
  const content_id = post_data.content.map((content_data) =>
    content_data.replaceAll(/\s/g, "")
  );

  const { path } = useRouteMatch();

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
              href={`${path}/blog`}
            >
              <ArrowLeft24 fill="#539bf5" style={{ marginRight: "0.5em" }} />{" "}
              Blog
            </a>
          </div>
        </div>
      </div>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <h4
              style={{
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
                    <h4 className="header-link-highlight">
                      {`${blog_item}`.slice(0, 35)}
                      {blog_item.length > 35 ? "..." : ""}
                    </h4>
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
