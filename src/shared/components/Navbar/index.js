import {
  Close24,
  Switcher24,
  ArrowRight24,
  ArrowRight16,
} from "@carbon/icons-react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Options from "./Options";
import { motion, AnimatePresence } from "framer-motion";
import "./style.scss";

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
          <Link to={"/"}>
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
            <Options
              data={{ name: "Github", link: "https://github.com/stephensanwo" }}
            />
          </div>
        </div>
        <div className="nav-switcher">
          <motion.div onClick={handleClick}>
            {isNavOpen === "open" ? (
              <Close24 style={{ color: "#ffffff" }} />
            ) : isNavOpen === "closed" ? (
              <Switcher24 style={{ color: "#ffffff" }} />
            ) : (
              <Switcher24 style={{ color: "#ffffff" }} />
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
              <div className="slider-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a>Blog</a>
                </div>

                <div className="see-all-container">
                  <ArrowRight16 fill="#539bf5" />
                </div>
              </div>
              <div className="slider-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a>Apps</a>
                </div>
                <div className="see-all-container">
                  <ArrowRight16 fill="#539bf5" />
                </div>
              </div>
              <div className="slider-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <a>Github</a>
                </div>

                <div className="see-all-container">
                  <ArrowRight16 fill="#539bf5" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navbar;
