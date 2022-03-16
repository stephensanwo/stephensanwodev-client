import { ArrowLeft24 } from "@carbon/icons-react";
import React, { Fragment, useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { code_categories_small } from "../../../data/code";
import { PostContext } from "../..";

const CodePostOptions = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const data = useContext(PostContext);

  const clickTopic = (e) => {
    data.setFilter(e.target.innerText);
    history.push("/code");
  };

  return (
    <Fragment>
      <div className="blog-home-sidenav-container">
        <div className="blog-home-sidenav-content">
          <div>
            <a
              style={{
                fontWeight: 800,
                color: "#addec9",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
              href={`${path}/code`}
            >
              <ArrowLeft24 fill="#addec9" style={{ marginRight: "0.5em" }} />{" "}
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
                color: "#fff",
                marginBottom: "2em",
              }}
            >
              Topics
            </h4>
            <div>
              {code_categories_small.map((blog_item, index) => (
                <div
                  className="blog-sidenav-category-item"
                  onClick={(e) => clickTopic(e)}
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

export default CodePostOptions;
