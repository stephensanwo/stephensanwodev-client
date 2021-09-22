import React, { Fragment } from "react";

const Paragraph = (props) => {
  return (
    <Fragment>
      <p
        style={{
          fontFamily: "display-text-medium",
          fontWeight: "400",
          fontSize: "1em",
          color: "#adbac7",
          lineHeight: 2,
          marginBottom: "2rem",
        }}
      >
        {props.children}
      </p>
    </Fragment>
  );
};

export default Paragraph;
