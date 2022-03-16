import React, { Fragment } from "react";

const Image = (props) => {
  return (
    <Fragment>
      <div
        className="blog-post-image-item"
        style={{
          marginBottom: "2rem",
        }}
      >
        <img id={props.id} src={props.children} width="100%"></img>
      </div>
    </Fragment>
  );
};

export default Image;
