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

const AppList = () => {
  return (
    <div>
      {apps_data.map((app_item, index) => (
        <div className="app-home-articles-container">
          <div className="app-home-articles-image">
            <img src={featured_image} width="100%"></img>
          </div>
          <div className="app-home-articles-description">
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "0.8em",
                color: "#539bf5",
                marginBottom: "0.4em",
              }}
            >
              {app_item.title}
            </h4>
            <h2
              style={{
                color: "#adbac7",
                fontFamily: "display-text-bold",
                fontSize: "1.2em",
                marginBottom: "0.4em",
                lineHeight: 1.4,
              }}
            >
              {`${app_item.name}`.slice(0, 80)}
              {app_item.name.length > 80 ? "..." : ""}
            </h2>
            <p
              style={{
                fontFamily: "display-text-medium",
                fontSize: "1em",
                color: "#768390",
                marginBottom: "0.4em",
                lineHeight: 1.4,
              }}
            >
              {`${app_item.desc}`.slice(0, 200)}
              {app_item.desc.length > 200 ? "..." : ""}
            </p>
            <div className="blog-content-featured-tags">
              {app_item.built_with.slice(0, 3).map((tag, index) => (
                <Tags key={index} type="app" title={tag} color={"green"} />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Launch16 color="#539bf5" />
                <p
                  style={{
                    fontFamily: "display-text-semibold",
                    fontSize: "0.6rem",
                    color: "#539bf5",
                    marginLeft: "0.5rem",
                  }}
                >
                  Launch App
                </p>
              </div>
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <LogoGithub16 color="#539bf5" />
                <p
                  style={{
                    fontFamily: "display-text-semibold",
                    fontSize: "0.6rem",
                    color: "#539bf5",
                    marginLeft: "0.5rem",
                  }}
                >
                  View Repo
                </p>
              </div>
            </div>
          </div>
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
