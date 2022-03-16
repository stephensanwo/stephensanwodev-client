import React, { Fragment } from "react";

const SubHeading4 = (props) => {
  return (
    <Fragment>
      <h4
        style={{
          color: "#fff",
          fontSize: "1.2em",
          marginBottom: "1rem",
          lineHeight: 1.5,
        }}
      >
        {props.children}
      </h4>
    </Fragment>
  );
};

export default SubHeading4;
