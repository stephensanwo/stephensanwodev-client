import { ArrowLeft24, ArrowUpRight16 } from "@carbon/icons-react";
import React, { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import { code_categories_small } from "../../../data/code";

const CodePostOptions = () => {
  const { path } = useRouteMatch();

  return (
    <Fragment>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <a
              style={{
                fontWeight: 800,
                color: "#986ee2",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
              href={`${path}/code`}
            >
              <ArrowLeft24 fill="#986ee2" style={{ marginRight: "0.5em" }} />{" "}
              Code
            </a>
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

export default CodePostOptions;
