import React from "react";
import "./style.scss";

const Loader = (props) => {
  return (
    <div
      className="loader"
      style={{ height: props.height, width: "100%" }}
    ></div>
  );
};

export default Loader;
