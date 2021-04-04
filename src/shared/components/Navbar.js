import React from "react";
import { Switcher24 } from "@carbon/icons-react";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "1rem",
      }}
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
