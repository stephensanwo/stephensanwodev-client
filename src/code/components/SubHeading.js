import React, { Fragment } from "react";

const SubHeading = (props) => {
  console.log(props.id);
  return (
    <Fragment>
      <h2
        style={{
          color: "#539bf5",
          fontSize: "1.4em",
          marginBottom: "0.4em",
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
