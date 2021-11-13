import React, { Fragment } from "react";

const InlineLink = (props) => {
  return (
    <Fragment>
      <a
        style={{
          fontWeight: 400,
          fontSize: "1em",
          color: "#539bf5",
          lineHeight: 2,
        }}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        {props.children}{" "}
      </a>
    </Fragment>
  );
};

export default InlineLink;
