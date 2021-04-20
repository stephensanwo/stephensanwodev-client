import React, { Fragment, useState } from "react";
import Banner from "../components/Banner";
import Discover from "../components/Discover";
import SideNav from "../components/SideNav";
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
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
