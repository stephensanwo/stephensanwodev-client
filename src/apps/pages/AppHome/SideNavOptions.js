import React, { Fragment, useContext } from "react";
import { ArrowLeft24 } from "@carbon/icons-react";
import {
  app_categories_small,
  app_filters,
  app_sort,
} from "../../../data/apps";
import Tags from "../../../shared/components/Tags";
import { useRouteMatch, Link } from "react-router-dom";
import { AppContext } from ".";

const SideNavOptions = () => {
  const { path } = useRouteMatch();
  const data = useContext(AppContext);
  return (
    <Fragment>
      <div className="app-home-sidenav-container">
        <div className="app-home-sidenav-content">
          <div>
            <Link
              style={{
                fontSize: "1em",
                fontWeight: 800,
                color: "#addec9",
                marginBottom: "2em",
                display: "flex",
                alignItems: "center",
              }}
              to={`/`}
            >
              <ArrowLeft24 fill="#addec9" style={{ marginRight: "0.5em" }} />{" "}
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
                color: "#adbac7",
                marginBottom: "2em",
              }}
            >
              App Categories
            </h4>
            <div>
              {app_categories_small.map((app_item) => (
                <div
                  className="app-sidenav-category-item"
                  onClick={(e) => data.setFilter(e.target.innerText)}
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNavOptions;
