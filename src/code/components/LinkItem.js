import React, { Fragment } from "react";

const LinkItem = (props) => {
  return (
    <Fragment>
      <p
        style={{
          fontWeight: 400,
          fontSize: "1em",
          color: "#adbac7",
          lineHeight: 2,
          marginBottom: "1rem",
        }}
      >
        {props.children}
      </p>
    </Fragment>
  );
};

export default LinkItem;
