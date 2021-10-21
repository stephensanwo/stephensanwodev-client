import {
  Close24,
  Menu24,
  ArrowRight24,
  ArrowRight16,
} from "@carbon/icons-react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Options from "./Options";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";
import Logo from "../../../assets/svg/logo.svg";

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const handleClick = () => {
    if (isNavOpen === "open") {
      setIsNavOpen("closed");
    } else {
      setIsNavOpen("open");
    }
  };
  return (
    <Fragment>
      <div className="app-nav">
        <div className="nav-tabs">
          <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
            <a>stephensanwo.dev</a>
          </Link>
        </div>

        <div className="nav-actions">
          <div className="nav-action-1">
            <Options data={{ name: "Home", link: "/" }} />
          </div>
          <div className="nav-action-2">
            <Options data={{ name: "Blog", link: "/blog" }} />
          </div>
          <div className="nav-action-3">
            <Options data={{ name: "Apps", link: "/apps" }} />
          </div>
          <div className="nav-action-3">
            <a
              href="https://github.com/stephensanwo"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.div
                className="options-container"
                whileHover={{ borderBottom: "2px solid #05aa82" }}
                transition={{ ease: "easeIn", duration: 0.2 }}
              >
                <div className="options-text">
                  <a>Github</a>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
        <div className="nav-switcher">
          <motion.div onClick={handleClick}>
            {isNavOpen === "open" ? (
              <Close24 style={{ color: "#ffffff" }} />
            ) : isNavOpen === "closed" ? (
              <Menu24 style={{ color: "#ffffff" }} />
            ) : (
              <Menu24 style={{ color: "#ffffff" }} />
            )}
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
        {isNavOpen === "open" && (
          <motion.div
            initial={{ height: "0%" }}
            animate={{ height: "100%", speed: "100ms" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            exit={{ height: "0%", speed: "100ms" }}
            className="slider-menu"
          >
            <div className="slider-menu-container">
              <motion.div
                initial={{ x: "-100px" }}
                animate={{ x: "0", speed: "100ms" }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                exit={{ display: "none", speed: "1000ms" }}
                className="slider-item"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => setIsNavOpen("closed")}
                >
                  <Link to={"/blog"}>Blog</Link>
                </div>

                <div className="see-all-container">
                  <ArrowRight16 fill="#539bf5" />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-100px" }}
                animate={{ x: "0", speed: "100ms" }}
                transition={{ ease: "easeInOut", duration: 0.6 }}
                exit={{ display: "none", speed: "10000ms" }}
                className="slider-item"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => setIsNavOpen("closed")}
                >
                  <Link to={"/apps"}>Apps</Link>
                </div>
                <div className="see-all-container">
                  <ArrowRight16 fill="#539bf5" />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: "-100px" }}
                animate={{ x: "0", speed: "100ms" }}
                transition={{ ease: "easeInOut", duration: 0.7 }}
                exit={{ display: "none", speed: "10000ms" }}
                className="slider-item"
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => setIsNavOpen("closed")}
                >
                  <a
                    href="https://github.com/stephensanwo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>

                <div className="see-all-container">
                  <ArrowRight16 fill="#539bf5" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
