import React from "react";
import "./styles.scss";

const Tags = ({ title, color, type, app_title, style, icon }) => {
  const tag_width = title.length * 6 + 15;
  return (
    <div style={style}>
      {type === "blog" ? (
        <div className="tags-container" style={{ width: `${tag_width}px` }}>
          <a
            className={`tag-color-${color}`}
            style={{
              fontFamily: "IBM Plex Sans",
              fontWeight: 500,
              fontSize: "0.8em",
              color: "#addec9",
            }}
          >
            {title}
          </a>
        </div>
      ) : (
        <div className="app-tag-container">
          {icon === "false" ? (
            ""
          ) : (
            <div className={`app-dot app-color-${title}`}></div>
          )}
          <a
            style={{
              fontFamily: "IBM Plex Sans",
              fontWeight: 500,
              fontSize: "0.8em",
              color: "#addec9",
            }}
          >
            {title}
          </a>
        </div>
      )}
    </div>
  );
};

export default Tags;
