import React, { Fragment } from "react";

const Paragraph = (props) => {
  return (
    <Fragment>
      <p
        style={{
          fontFamily: "display-text-medium",
          fontWeight: "400",
          fontSize: "1em",
          color: "#768390",
          lineHeight: 1.6,
          marginBottom: "2rem",
        }}
      >
        {props.children}
      </p>
    </Fragment>
  );
};

export default Paragraph;
