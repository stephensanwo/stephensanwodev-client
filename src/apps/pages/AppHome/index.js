import React from "react";
import SideNavOptions from "./SideNavOptions";
import "./style.scss";
import FeaturedApps from "./FeaturedApps";
import AppList from "./AppList";
import Options from "./Options";
import Footer from "../../../shared/components/Footer";
import { Ideate } from "@carbon/pictograms-react";

const AppHome = () => {
  return (
    <div className="app-home-container">
      <div className="app-home-sidenav">
        <SideNavOptions />
      </div>
      <div className="app-home-content-container">
        <div className="app-home-content">
          <div className="app-home-content-items">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Ideate fill="#986ee2" />
              <h4
                style={{
                  fontSize: "2rem",
                  fontFamily: "display-text-medium",
                  color: "#986ee2",
                  marginLeft: "2rem",
                }}
              >
                Apps
              </h4>
            </div>
            <FeaturedApps />

            <div
              className="section-divider-line"
              style={{ marginTop: "4rem", marginBottom: "4rem" }}
            ></div>
            <AppList />
            <Footer data_type={"app"} />
          </div>
        </div>
        <div className="app-home-options">
          <Options />
        </div>
      </div>
    </div>
  );
};

export default AppHome;
