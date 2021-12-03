import React from "react";
import "./style.scss";

import { Launch16, LogoGithub16 } from "@carbon/icons-react";
import Tags from "../Tags";
import { Link } from "react-router-dom";

const Card = ({ app_data, featured }) => {
  return (
    <div className={`card-container ${featured ? `card-links-featured` : ``}`}>
      <div className="card-container-header">
        <div className="card-container-header-text">
          <h4
            style={{
              fontFamily: "IBM Plex Sans",
              fontWeight: "600",
              fontSize: "0.8em",
              color: "#05aa82",
              marginBottom: "0.6em",
            }}
          >
            {app_data.title}
          </h4>
          <a
            className="header-link-highlight"
            href={app_data.app_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {app_data.name}
          </a>
        </div>
        <div>{app_data.logo}</div>
      </div>
      <div style={{ width: "80%" }}>
        <p
          style={{
            marginBottom: "0.4em",
          }}
        >
          {`${app_data.desc}`.slice(0, 100)}
          {app_data.desc.length > 100 ? "..." : ""}
        </p>
      </div>
      <div className="card-links card-links-all">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "40%",
          }}
        >
          <Launch16 color="#05aa82" />
          <a href={app_data.app_url} target="_blank" rel="noopener noreferrer">
            <h4
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: "0.8rem",
                color: "#05aa82",
                marginTop: 0,
                marginBottom: 0,
                marginLeft: "0.5rem",
              }}
            >
              Launch
            </h4>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoGithub16 color="#05aa82" />
          <a href={app_data.repo_url} target="_blank" rel="noopener noreferrer">
            <h4
              style={{
                fontFamily: "IBM Plex Sans",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "#05aa82",
                marginTop: 0,
                marginBottom: 0,
                marginLeft: "0.5rem",
              }}
            >
              View Repo
            </h4>
          </a>
        </div>
      </div>
      <div style={{ marginTop: "2em", display: "flex", flexWrap: "wrap" }}>
        {app_data.built_with.map((item, index) => (
          <Tags type="app" title={item} />
        ))}
      </div>
    </div>
  );
};

export default Card;
