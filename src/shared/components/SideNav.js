import React from "react";
import { useRouteMatch } from "react-router-dom";
import "../styles/sidenav.scss";
import {
  Dashboard24,
  ToolBox24,
  CrossTab24,
  CertificateCheck24,
  Settings24,
} from "@carbon/icons-react";
import { Switcher32 } from "@carbon/icons-react";

const SideNav = () => {
  const { path } = useRouteMatch();

  return (
    <div className="side-nav">
      <div className="bx--row" style={{ margin: "0rem", padding: "0rem" }}>
        <div className="bx--col side-nav-content">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Switcher32 style={{ color: "#ffffff" }} />
          </div>
          <a style={{ marginTop: "2rem" }}>
            <div className="side-nav-item">Discover</div>
          </a>
          <div
            style={{
              borderBottom: "0.5px solid #ffffff",
              marginLeft: "2.5rem",
              marginRight: "2.5rem",
            }}
          ></div>
          <a>
            <div className="side-nav-item">Blog</div>
          </a>
          <div
            style={{
              borderBottom: "0.5px solid #ffffff",
              marginLeft: "2.5rem",
              marginRight: "2.5rem",
            }}
          ></div>
          <a>
            <div className="side-nav-item">About </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
