import React, { Fragment } from "react";
import SliderMenu from "../../shared/components/SliderMenu";
import { motion } from "framer-motion";
import "../styles/app-list.scss";
import { Tag } from "carbon-components-react";
import Image from "../../assets/svg/article.svg";

const FeaturedApp = ({ isNavOpen }) => {
  return (
    <Fragment>
      <section className="applist-featured-app">
        <div className="applist-featured-content">
          <div className="applist-header-container">
            <div className="applist-header">
              <h4
                style={{
                  fontSize: "1rem",
                  color: "#A2FACF",
                }}
              >
                stephensanwo.dev
              </h4>
              <h4
                style={{
                  fontSize: "0.8rem",
                  color: "#ffffff",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                }}
              >
                {">"}
              </h4>

              <h4 style={{ fontSize: "0.7rem", color: "#ffffff" }}>Apps</h4>
            </div>
          </div>

          {/* <img src={Image} alt="" width="100%" height="100%" /> */}
        </div>
      </section>
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

export default FeaturedApp;
