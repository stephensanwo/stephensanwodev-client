import React from "react";
import { FaceDissatisfied32 } from "@carbon/icons-react";
import { Link } from "react-router-dom";
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
          <h4>Error 404 - Not Found</h4>
          <p style={{ textAlign: "center" }}>
            This means that the content you are trying to view does not exist,
            or has been deleted
          </p>{" "}
          <div style={{ marginTop: "2rem" }}>
            <Link style={{ fontSize: "1em", fontWeight: 800 }} to="/blog">
              Go Back to Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
