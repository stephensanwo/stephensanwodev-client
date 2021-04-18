import React, { Fragment } from "react";
import { useRouteMatch } from "react-router-dom";
import "../styles/sidenav.scss";
import { motion, AnimatePresence } from "framer-motion";

import { Close32, Switcher32 } from "@carbon/icons-react";

const SideNav = ({ isNavOpen, setIsNavOpen }) => {
  const { path } = useRouteMatch();
  const handleClick = () => {
    if (isNavOpen === "") {
      setIsNavOpen("open");
    } else if (isNavOpen === "open") {
      setIsNavOpen("closed");
    } else if (isNavOpen === "closed") {
      setIsNavOpen("open");
    }
  };

  return (
    <Fragment>
      <div className="mobile-nav">
        <div className="bx--row" style={{ margin: "0rem", padding: "0rem" }}>
          <div className="mobile-nav-content">
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              {isNavOpen === "open" ? (
                <Close32 style={{ color: "#ffffff" }} />
              ) : isNavOpen === "closed" ? (
                <Switcher32 style={{ color: "#ffffff" }} />
              ) : (
                <Switcher32 style={{ color: "#ffffff" }} />
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="side-nav">
        <div className="bx--row" style={{ margin: "0rem", padding: "0rem" }}>
          <div className="side-nav-content">
            <motion.div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              {isNavOpen === "open" ? (
                <Close32 style={{ color: "#ffffff" }} />
              ) : isNavOpen === "closed" ? (
                <Switcher32 style={{ color: "#ffffff" }} />
              ) : (
                <Switcher32 style={{ color: "#ffffff" }} />
              )}
            </motion.div>
            {isNavOpen === "open" ? (
              <Fragment></Fragment>
            ) : isNavOpen === "closed" ? (
              <Fragment>
                <a style={{ marginTop: "2rem" }}>
                  <div className="side-nav-item">Discover</div>
                </a>
                <hr
                  style={{
                    width: "25px",
                    height: "0.5px",
                    color: "white",
                  }}
                />

                <a>
                  <div className="side-nav-item">Blog</div>
                </a>
                <hr
                  style={{
                    width: "25px",
                    height: "0.5px",
                    color: "white",
                  }}
                />

                <a>
                  <div className="side-nav-item">About</div>
                </a>
              </Fragment>
            ) : (
              <Fragment>
                <a style={{ marginTop: "2rem" }}>
                  <div className="side-nav-item">Discover</div>
                </a>
                <hr
                  style={{
                    width: "25px",
                    height: "0.5px",
                    color: "white",
                  }}
                />
                <a>
                  <div className="side-nav-item">Blog</div>
                </a>
                <hr
                  style={{
                    width: "25px",
                    height: "0.5px",
                    color: "white",
                  }}
                />
                <a>
                  <div className="side-nav-item">About </div>
                </a>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
