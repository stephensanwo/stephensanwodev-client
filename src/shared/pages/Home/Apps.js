import React from "react";
import { ArrowRight24, Code24 } from "@carbon/icons-react";
import { apps_data, app_categories_small } from "../../../data/apps";
import { Ideate } from "@carbon/pictograms-react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Apps = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Ideate fill="#05aa82" />
            <h4 style={{ color: "#05aa82" }}>Projects</h4>
          </div>
          <div className="see-all-container">
            <Link
              style={{
                color: "#05aa82",
              }}
              to="/apps"
            >
              Discover
            </Link>

            <ArrowRight24 fill="#05aa82" />
          </div>
        </div>
        <div className="section-divider-line"></div>
      </div>

      <div className="app-content">
        <div className="app-content-featured">
          <div className="app-content-featured-title">
            <h4>Top Projects</h4>
          </div>
          <div className="app-content-featured-container">
            {apps_data.map((app_data, index) => (
              <div className="app-content-featured-container-item">
                <Card app_data={app_data} key={index} featured={true} />
              </div>
            ))}
          </div>
        </div>
        <div className="app-categories">
          <div className="app-categories-title">
            <h4>Discover Apps</h4>
          </div>
          <div className="blog-categories-container">
            {app_categories_small.map((app_item) => (
              <div className="blog-category-item">
                <div>{app_item.logo}</div>
                <h4>{app_item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
