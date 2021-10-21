import React from "react";
import { Launch16, Share16, ArrowRight24, Code24 } from "@carbon/icons-react";
import { featured_apps_data, apps_data } from "../../../data/apps";
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
            {featured_apps_data.map((app_data, index) => (
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
          <div className="app-others-container">
            {apps_data.map((app_item, index) => (
              <div key={index} className="app-others-item-container">
                <div className="app-others-item">
                  <div>
                    <Code24 fill="#05aa82" />
                  </div>
                  <div>
                    <h4
                      style={{
                        marginLeft: "1.5rem",
                      }}
                    >
                      {app_item.name}
                    </h4>
                    <small
                      style={{
                        marginLeft: "1.5rem",
                        marginTop: "0.5em",
                        color: "#768390",
                      }}
                    >
                      {app_item.title}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
