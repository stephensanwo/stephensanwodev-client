import React from "react";
import { FaceDissatisfied32 } from "@carbon/icons-react";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "4rem",
        padding: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "250px",
        }}
      >
        <FaceDissatisfied32 width="120px" height="120px" fill="#e5534b" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Server Unavailable</h4>
          <p style={{ textAlign: "center" }}>
            Unfortunately this means that the content you are trying to view is
            offline at thie moment.
          </p>{" "}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a style={{ fontSize: "1em", fontWeight: 800 }} href="/">
              Go Back Home
            </a>
            <a style={{ fontSize: "1em", fontWeight: 800 }} href="/blog">
              Go to Blog
            </a>

            <a style={{ fontSize: "1em", fontWeight: 800 }} href="/apps">
              Go to Apps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
