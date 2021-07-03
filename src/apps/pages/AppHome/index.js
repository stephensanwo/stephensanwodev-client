import React from "react";
import SideNavOptions from "./SideNavOptions";
import "./style.scss";
import FeaturedApps from "./FeaturedApps";
import AppList from "./AppList";
import Options from "./Options";
import Footer from "../../../shared/components/Footer";

const AppHome = () => {
  return (
    <div className="app-home-container">
      <div className="app-home-sidenav">
        <SideNavOptions />
      </div>
      <div className="app-home-content-container">
        <div className="app-home-content">
          <div className="app-home-content-items">
            <h4
              style={{
                fontSize: "2rem",
                fontFamily: "display-text-medium",
                color: "#adbac7",
              }}
            >
              Apps
            </h4>
            <FeaturedApps />

            <div
              className="section-divider-line"
              style={{ marginTop: "4rem", marginBottom: "6rem" }}
            >
              <AppList />
            </div>
            <Footer />
          </div>
        </div>
        <div className="blog-home-options">
          <Options />
        </div>
      </div>
    </div>
  );
};

export default AppHome;
