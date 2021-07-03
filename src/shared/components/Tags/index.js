import React, { Fragment } from "react";
import "./styles.scss";

const Tags = ({ title, color, type, app_title }) => {
  const tag_width = title.length * 6 + 15;
  return (
    <Fragment>
      {type === "blog" ? (
        <div className="tags-container" style={{ width: `${tag_width}px` }}>
          <a
            className={`tag-color-${color}`}
            style={{
              fontFamily: "display-text",
              fontSize: "0.8em",
            }}
          >
            {title}
          </a>
        </div>
      ) : (
        <div className="app-tag-container">
          <div className={`app-dot app-color-${title}`}></div>
          <a
            style={{
              fontFamily: "display-text-medium",
              fontSize: "0.8em",
              color: "#768390",
            }}
          >
            {title}
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default Tags;
