import React, { Fragment } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import "../styles/home.scss";

const Home = () => {
  return (
    <Fragment>
      <div className="home-container">
        <div className="home-grid-1">
          <SideNav />
        </div>
        <div className="home-grid-2">
          {" "}
          <Banner />
        </div>
      </div>
      {/* <SideNav /> */}
    </Fragment>
  );
};

export default Home;
