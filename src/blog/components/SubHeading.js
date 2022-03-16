import React, { Fragment } from "react";

const SubHeading = (props) => {
  return (
    <Fragment>
      <h2
        style={{
          color: "#fff",
          fontSize: "1.8em",
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
