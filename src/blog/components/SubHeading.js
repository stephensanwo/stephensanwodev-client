import React, { Fragment } from "react";

const SubHeading = (props) => {
  return (
    <Fragment>
      <h2
        style={{
          color: "#adbac7",
          fontSize: "1.4em",
          marginBottom: "1rem",
          lineHeight: 1.5,
        }}
        id={props.id}
      >
        {props.children}
      </h2>
    </Fragment>
  );
};

export default SubHeading;
