import React from "react";
import "./style.scss";
import {
  Code32,
  Launch16,
  LogoGithub16,
  LogoPython32,
} from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import { Link } from "react-router-dom";

const Card = ({ code_item, featured }) => {
  return (
    <div className={`card-container ${featured ? `card-links-featured` : ``}`}>
      <div className="card-container-header">
        <div className="card-container-header-text">
          <h4
            style={{
              fontFamily: "IBM Plex Sans",
              fontWeight: "600",
              fontSize: "0.8em",
              color: "#986ee2",
              marginBottom: "0.6em",
            }}
          >
            {code_item.category}
          </h4>
          <Link
            className="header-link-highlight"
            to={`/code/${code_item.code_id}`}
          >
            {code_item.title}
          </Link>
        </div>
        <div>
          {code_item.category === "Python" ? (
            <LogoPython32 fill="#986ee2" width="48px" height="48px" />
          ) : (
            <Code32 fill="#986ee2" width="48px" height="48px" />
          )}
        </div>
      </div>
      <div style={{ width: "80%" }}>
        <p
          style={{
            marginBottom: "0.4em",
          }}
        >
          {`${code_item.desc}`.slice(0, 100)}
          {code_item.desc.length > 100 ? "..." : ""}
        </p>
      </div>
      <div className="card-links">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "40%",
          }}
        >
          <Launch16 color="#986ee2" />
          <Link to={`/code/${code_item.code_id}`}>
            <h4
              style={{
                fontFamily: "IBM Plex Sans",
                fontWeight: 400,
                fontSize: "0.8rem",
                color: "#986ee2",
                marginTop: 0,
                marginBottom: 0,
                marginLeft: "0.5rem",
              }}
            >
              Explore
            </h4>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "2em", display: "flex", flexWrap: "wrap" }}>
        {code_item.tags.map((item, index) => (
          <Tags type="blog" title={item} />
        ))}
      </div>
    </div>
  );
};

export default Card;
