import React, { Fragment } from "react";
import { ArrowLeft24 } from "@carbon/icons-react";
import {
  app_categories_small,
  app_filters,
  app_sort,
} from "../../../data/apps";
import Tags from "../../../shared/components/Tags";
import { useRouteMatch, Link } from "react-router-dom";

const SideNavOptions = () => {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <div className="app-home-sidenav-container">
        <div className="app-home-sidenav-content">
          <div>
            <Link
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#539bf5",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
              to={`/`}
            >
              <ArrowLeft24 fill="#539bf5" style={{ marginRight: "0.5em" }} />{" "}
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="app-home-sidenav-container">
        <div className="app-home-sidenav-content">
          <div>
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              App Categories
            </h4>
            <div>
              {app_categories_small.map((app_item) => (
                <div className="app-sidenav-category-item">
                  {app_item.logo}
                  <h4
                    style={{
                      marginLeft: "1rem",
                    }}
                    className="header-link-highlight"
                  >
                    {app_item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="app-home-sidenav-container">
        <div className="app-home-sidenav-content">
          <div>
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              Built With
            </h4>
            <div>
              <div className="app-sidenav-filters">
                {app_filters.map((tag, index) => (
                  <div style={{ marginBottom: "0.5rem" }}>
                    <Tags key={index} type="blog" title={tag} color={"green"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-home-sidenav-container app-last">
        <div className="app-home-sidenav-content">
          <div>
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "1em",
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              Sort By
            </h4>
            <div>
              <div className="app-sidenav-filters">
                {app_sort.map((tag, index) => (
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
