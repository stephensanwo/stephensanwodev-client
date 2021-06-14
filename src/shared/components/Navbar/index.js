import React from "react";
import Options from "./Options";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="app-nav">
      <div className="nav-tabs">
        <h4>stephensanwo.dev</h4>
      </div>

      <div className="nav-actions">
        <div className="nav-action-1">
          <Options data={{ name: "Home" }} />
        </div>
        <div className="nav-action-2">
          <Options data={{ name: "Blog" }} />
        </div>
        <div className="nav-action-3">
          <Options data={{ name: "Apps" }} />
        </div>
      </div>
      <div className="div"></div>
    </div>
  );
};

export default Navbar;
