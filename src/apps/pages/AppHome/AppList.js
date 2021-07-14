import React from "react";
import { apps_data } from "../../../data/apps";
import {
  Launch16,
  Share16,
  ArrowRight24,
  LogoGithub16,
} from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import featured_image from "../../../assets/img/Jun21_16_1249103806.jpg";
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
            fontFamily: "display-text-bold",
            fontSize: "1em",
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
