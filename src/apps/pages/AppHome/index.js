import React, { useState } from "react";
import SideNavOptions from "./SideNavOptions";
import "./style.scss";
import AppList from "./AppList";
import Options from "./Options";
import Footer from "../../../shared/components/Footer";
import { Ideate } from "@carbon/pictograms-react";
import { apps_data } from "../../../data/apps";
import { Helmet } from "react-helmet";

export const AppContext = React.createContext();

const AppHome = () => {
  const [filter, setFilter] = useState("All Apps");

  let data;

  if (filter == "All Apps") {
    data = apps_data;
  } else {
    data = apps_data.filter((item) => item.category.includes(filter));
  }

  return (
    <AppContext.Provider
      value={{
        setFilter,
        filter,
        data,
      }}
    >
      <Helmet>
        <title>Stephen Sanwo Apps</title>
        <meta
          name="description"
          content="Welcome to my Apps and Project Portfolio."
        />
        <meta
          name="keywords"
          content="OpenFlow, Software, API, AI Playground, Microservices"
        />
      </Helmet>
      <div className="app-home-container">
        <div className="app-home-sidenav">
          <SideNavOptions />
        </div>
        <div className="app-home-content-container">
          <div className="app-home-content">
            <div className="app-home-content-items">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Ideate fill="#addec9" />
                <div>
                  <h4
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "#addec9",
                      marginLeft: "2rem",
                    }}
                  >
                    Apps
                  </h4>
                  <small
                    style={{
                      fontSize: "0.5rem",
                      fontWeight: 600,
                      marginLeft: "2rem",
                    }}
                  >
                    {filter}
                  </small>
                </div>
              </div>

              <AppList />
              <Footer data_type={"app"} setAppFilter={setFilter} />
            </div>
          </div>
          <div className="app-home-options">
            <Options />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default AppHome;
