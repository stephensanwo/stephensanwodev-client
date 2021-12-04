import React, { Fragment } from "react";

const Video = (props) => {
  return (
    <Fragment>
      <div
        className="blog-post-image"
        style={{
          marginBottom: "2rem",
        }}
      >
        <video
          controls
          id={props.id}
          src={props.children}
          width="100%"
          autoplay="autoplay"
        ></video>
      </div>
    </Fragment>
  );
};

export default Video;
