import React, { Fragment } from "react";
import { featured_apps_data } from "../../../data/apps";
import { Launch16, ArrowRight16, LogoGithub16 } from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";

const FeaturedApps = () => {
  return (
    <Fragment>
      {featured_apps_data.map((featured_app, index) => (
        <div className="app-home-featured-container">
          <div className="app-home-featured-image">
            <img src={featured_app.image_url} width="100%"></img>
          </div>
          <div className="app-home-featured-description">
            <h4
              style={{
                fontFamily: "display-text-bold",
                fontSize: "0.8em",
                color: "#539bf5",
                marginBottom: "0.4em",
              }}
            >
              {featured_app.title}
            </h4>
            <h2
              style={{
                color: "#adbac7",
                fontFamily: "display-text-bold",
                fontSize: "1.2em",
                marginBottom: "0.4em",
                lineHeight: 1.5,
              }}
            >
              {featured_app.name}
            </h2>
            <p
              style={{
                fontFamily: "display-text-medium",
                fontWeight: "400",
                fontSize: "1em",
                color: "#768390",
                lineHeight: 1.4,
              }}
            >
              {featured_app.desc}
            </p>
            <div className="app-content-featured-tags">
              {featured_app.built_with.slice(0, 3).map((tag, index) => (
                <Tags key={index} type="app" title={tag} />
              ))}
            </div>
            <div className="blog-content-featured-logo">
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <Launch16 color="#539bf5" />
                <p
                  style={{
                    fontFamily: "display-text-semibold",
                    fontSize: "0.8em",
                    color: "#539bf5",
                    marginLeft: "0.5rem",
                  }}
                >
                  Launch App
                </p>
              </div>
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                }}
              >
                <LogoGithub16 color="#539bf5" />
                <p
                  style={{
                    fontFamily: "display-text-semibold",
                    fontSize: "0.8em",
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
    </Fragment>
  );
};

export default FeaturedApps;
