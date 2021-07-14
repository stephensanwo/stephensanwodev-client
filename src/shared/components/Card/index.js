import React from "react";
import "./style.scss";
import { CloudComputing } from "@carbon/pictograms-react";
import { Launch16, LogoGithub16 } from "@carbon/icons-react";
import Tags from "../Tags";

const Card = ({ app_data, featured }) => {
  return (
    <div className={`card-container ${featured ? `card-links-featured` : ``}`}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h4
            style={{
              fontFamily: "display-text",
              fontSize: "0.8em",
              color: "#986ee2",
              marginBottom: "0.6em",
            }}
          >
            {app_data.title}
          </h4>
          <h2
            style={{
              color: "#adbac7",
              fontFamily: "display-text-bold",
              fontSize: "1.5em",
              marginBottom: "0.5em",
              lineHeight: 1.2,
            }}
          >
            {app_data.name}
          </h2>
        </div>
        <div>
          <CloudComputing fill="#986ee2" />
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <p
          style={{
            fontFamily: "display-text",
            fontWeight: "400",
            fontSize: "1em",
            color: "#768390",
            marginBottom: "0.4em",
            lineHeight: "1.4",
          }}
        >
          {app_data.desc}
        </p>
      </div>
      <div className="card-links">
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Launch16 color="#986ee2" />
          <a>Launch App</a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoGithub16 color="#986ee2" />
          <a>View Repo</a>
        </div>
      </div>
      <div style={{ marginTop: "2em", display: "flex" }}>
        {app_data.built_with.map((item, index) => (
          <Tags type="app" title={item} />
        ))}
      </div>
    </div>
  );
};

export default Card;
