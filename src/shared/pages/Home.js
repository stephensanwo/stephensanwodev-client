import React, { Fragment, useState } from "react";
import Banner from "./Banner";
import Discover from "./Discover";
import SideNav from "../components/SideNav";
import Blog from "./Blog";

import "../styles/home.scss";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState("");
  console.log(isNavOpen);

  return (
    <Fragment>
      <div className="home-container">
        <div className="home-grid-1">
          <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="home-grid-2">
          <Banner isNavOpen={isNavOpen} />
          <Discover />
          <Blog />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
