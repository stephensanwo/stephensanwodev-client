import React, { Fragment } from "react";

const SubHeading4 = (props) => {
  return (
    <Fragment>
      <h4
        style={{
          color: "#adbac7",
          fontSize: "1.1em",
          marginBottom: "1rem",
          lineHeight: 1.5,
        }}
        id={props.id}
      >
        {props.children}
      </h4>
    </Fragment>
  );
};

export default SubHeading4;
