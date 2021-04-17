import React, { Fragment } from "react";
import Image from "../../assets/img/jorge-ramirez-skq_PBbs1P8-unsplash.jpg";
import SliderMenu from "./SliderMenu";

const Banner = ({ isNavOpen }) => {
  return (
    <Fragment>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "hsl(222,20%,8%)",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <h1>Banner rdgrdgfg gfgrf</h1>
      </div>
      {isNavOpen === "open" ? (
        <SliderMenu isNavOpen={isNavOpen} />
      ) : isNavOpen === "closed" ? (
        <SliderMenu isNavOpen={isNavOpen} />
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

export default Banner;
