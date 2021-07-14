import React from "react";
import { Link } from "react-router-dom";
import Options from "./Options";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="app-nav">
      <div className="nav-tabs">
        <Link to={"/"}>
          <a>stephensanwo.dev</a>
        </Link>
      </div>

      <div className="nav-actions">
        <div className="nav-action-1">
          <Options data={{ name: "Home", link: "/" }} />
        </div>
        <div className="nav-action-2">
          <Options data={{ name: "Blog", link: "/blog" }} />
        </div>
        <div className="nav-action-3">
          <Options data={{ name: "Apps", link: "/apps" }} />
        </div>
        <div className="nav-action-3">
          <Options
            data={{ name: "Github", link: "https://github.com/stephensanwo" }}
          />
        </div>
      </div>
      <div className="div"></div>
    </div>
  );
};

export default Navbar;
