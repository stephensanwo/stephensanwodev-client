import React from "react";
import { apps_data } from "../../../data/apps";
import { ArrowRight24 } from "@carbon/icons-react";
import Card from "../../../shared/components/Card";

const AppList = () => {
  return (
    <div>
      {apps_data.map((app_item, index) => (
        <div className="app-home-articles-container">
          <Card app_data={app_item} />
        </div>
      ))}

      <div className="see-all-apps">
        <a
          style={{
            fontSize: "1em",
            fontWeight: 800,
            color: "#539bf5",
            marginRight: "0.5rem",
          }}
        >
          More Apps
        </a>
        <ArrowRight24 fill="#539bf5" />
      </div>
    </div>
  );
};

export default AppList;
