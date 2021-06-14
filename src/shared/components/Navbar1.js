import React from "react";
import { Switcher24 } from "@carbon/icons-react";

const Navbar = ({ transparent }) => {
  return (
    <nav
      style={{
        padding: "1rem",
      }}
      className={transparent ? "transparent-nav" : ""}
    >
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1" }}>
          <h4>~/stephensanwo.dev</h4>
        </div>
        <div>
          <Switcher24 />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
