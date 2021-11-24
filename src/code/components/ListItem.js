import React, { Fragment } from "react";

const ListItem = (props) => {
  return (
    <Fragment>
      <p
        style={{
          fontWeight: 400,
          fontSize: "1em",
          color: "#adbac7",
          lineHeight: 2,
          marginBottom: "0.5rem",
        }}
      >
        ▶︎ {"    "}
        {props.children}
      </p>
    </Fragment>
  );
};

export default ListItem;
