import React, { Fragment } from "react";

const Paragraph = (props) => {
  return (
    <Fragment>
      <p
        style={{
          fontWeight: 400,
          fontSize: "1.1em",
          lineHeight: 1.8,
          marginBottom: "2rem",
        }}
      >
        {props.children}
      </p>
    </Fragment>
  );
};

export default Paragraph;
