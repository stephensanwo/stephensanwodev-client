import React, { useState, useContext } from "react";
import SideNavOptions from "./SideNavOptions";
import "./style.scss";
import AppList from "./AppList";
import Options from "./Options";
import Footer from "../../../shared/components/Footer";
import { Ideate } from "@carbon/pictograms-react";
import { apps_data } from "../../../data/apps";

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
      <div className="app-home-container">
        <div className="app-home-sidenav">
          <SideNavOptions />
        </div>
        <div className="app-home-content-container">
          <div className="app-home-content">
            <div className="app-home-content-items">
              <div style={{ display: "flex", alignItems: "center" }}>
                <Ideate fill="#05aa82" />
                <div>
                  <h4
                    style={{
                      fontSize: "2rem",
                      fontWeight: 600,
                      color: "#05aa82",
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
