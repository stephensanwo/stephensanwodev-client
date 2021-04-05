import React, { Fragment } from "react";
import Image from "../../assets/img/jorge-ramirez-skq_PBbs1P8-unsplash.jpg";

const Banner = () => {
  return (
    <Fragment>
      <div
        style={{
          height: "50vh",
          width: "100vw",
          backgroundColor: "black",
        }}
      ></div>
      <div
        style={{ height: "50vh", width: "100vw", backgroundColor: "red" }}
      ></div>
    </Fragment>
  );
};

export default Banner;
