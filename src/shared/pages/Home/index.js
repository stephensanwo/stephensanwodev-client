import React from "react";
import Navbar from "../../components/Navbar";
import Landing from "./Landing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Landing />
      </div>
    </div>
  );
};

export default Home;
