import React from "react";
import { Launch16, Share16, ArrowRight16 } from "@carbon/icons-react";
import { featured_apps_data, apps_data } from "../../../data/apps";

const Apps = () => {
  return (
    <div className="section-container">
      <div className="section-divider">
        <div className="section-title">
          <h4>Projects</h4>
        </div>
        <div className="section-divider-line"></div>
      </div>

      <div className="app-content">
        <div className="app-content-featured">
          <div className="app-content-featured-title">
            <h4
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5",
                color: "#444c56",
              }}
            >
              Top Projects
            </h4>
          </div>
          <div className="app-content-featured-container">
            {featured_apps_data.map((app_data, index) => (
              <div className="app-content-featured-container-item">
                <div className="app-content-featured-image">
                  <div className="app-content-image-cover">
                    <div>
                      <h4>Read More</h4>
                    </div>
                  </div>
                  <img src={app_data.image_url} width="100%"></img>
                </div>
                <div className="app-content-featured-description">
                  <h4
                    style={{
                      fontFamily: "display-text-medium",
                      fontSize: "0.7rem",
                      color: "#539bf5",
                      marginBottom: "1rem",
                    }}
                  >
                    {app_data.title}
                  </h4>
                  <h2
                    style={{
                      color: "#ffffff",
                      fontFamily: "display-text-semibold",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      lineHeight: 1.2,
                    }}
                  >
                    {app_data.name}
                  </h2>
                  <p
                    style={{
                      fontFamily: "display-text",
                      fontWeight: "400",
                      fontSize: "0.8rem",
                      color: "#768390",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {app_data.desc}
                  </p>

                  <div className="blog-content-featured-logo">
                    <div
                      style={{
                        width: "15%",
                        display: "flex",

                        alignItems: "center",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "display-text-medium",
                          fontSize: "0.7rem",
                          color: "#768390",
                        }}
                      >
                        Built With:
                      </h4>
                    </div>
                    <div
                      style={{
                        width: "85%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {app_data.built_with.map((build_with, index) => (
                        <small
                          style={{
                            fontFamily: "display-text-medium",
                            fontSize: "0.6rem",
                            color: "#768390",
                            marginRight: "0.2rem",
                          }}
                          key={index}
                        >
                          {" "}
                          {build_with}
                        </small>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="see-all-container">
              <h4>Discover All Apps</h4>
              <ArrowRight16 fill="#539bf5" />
            </div>
          </div>
        </div>
        <div className="app-categories">
          <div className="app-categories-title">
            <h4
              style={{
                fontSize: "0.8rem",
                lineHeight: "1.5",
                color: "#444c56",
              }}
            >
              Discover Apps
            </h4>
          </div>
          <div className="app-others-container">
            {apps_data.map((app_item, index) => (
              <div key={index} className="app-others-item-container">
                <div className="app-others-item">
                  {app_item.logo}
                  <div>
                    <h2
                      style={{
                        color: "#ffffff",
                        fontFamily: "display-text-semibold",
                        fontSize: "0.8rem",
                        marginLeft: "1.5rem",
                      }}
                    >
                      {app_item.name}
                    </h2>
                    <h4
                      style={{
                        color: "#ffffff",
                        fontFamily: "display-text",
                        fontSize: "0.7rem",
                        marginLeft: "1.5rem",
                        marginTop: "0.5rem",
                        color: "#adbac7",
                      }}
                    >
                      {app_item.title}
                    </h4>
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
