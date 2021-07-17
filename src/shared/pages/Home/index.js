import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Landing from "./Landing";
import About from "./About";
import Blog from "./Blog";
import Apps from "./Apps";
import Footer from "./Footer";

const Home = ({ isNavOpen, setIsNavOpen }) => {
  // console.log(props);
  return (
    <div>
      <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <div className="home-container">
        <div className="home-content">
          <div className="home-sections">
            <Landing />
            <About />
            <Blog />
            <Apps />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
