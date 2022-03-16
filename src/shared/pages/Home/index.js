import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Landing from "./Landing";
import About from "./About";
import Blog from "./Blog";
import Apps from "./Apps";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = ({ isNavOpen, setIsNavOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <Helmet>
        <title>Stephen Sanwo</title>
        <meta
          name="description"
          content="I am a Fullstack Software, and ML/AI Solutions Developer. I
          focus on architecting data-driven software that solve domain
          specific problems in complex data-oriented environments"
        />
        <meta
          name="keywords"
          content="Artificial Intelligence, AI, Machine Learning, ML, Software, Full Stack, Developer, Python, React, JavaScript, MongoDB, AWS, Docker, React Native, HTML, CSS, API, Software Development, Microservices, Deep Learning, Mobile Development, Data Structures, Algorithms, Blockchain, Python, React, JavaScript, AWS, Redis, Go, TypeScript, NodeJS"
        />
      </Helmet>
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
