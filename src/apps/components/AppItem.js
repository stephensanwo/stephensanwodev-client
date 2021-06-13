import React, { Fragment, useState } from "react";
import { ArrowRight24 } from "@carbon/icons-react";
import { motion } from "framer-motion";
import { Tag } from "carbon-components-react";
import Python from "../../assets/logos/python-ar21.svg";
import Javascript from "../../assets/logos/javascript-logo-svgrepo-com.svg";
import ReactLogo from "../../assets/logos/reactjs-ar21.svg";
import Tensorflow from "../../assets/logos/tensorflow-ar21.svg";
import Lottie from "react-lottie";
import analyticsLottie from "../assets/lottie/analytics-lottie.json";
import readingLottie from "../assets/lottie/reading-lottie.json";

const AppItem = ({ data }) => {
  const [lottieState, setLottieState] = useState(true);
  let lottieData;

  if (data.image === "analyticsLottie") {
    lottieData = analyticsLottie;
  } else if (data.image === "readingLottie") {
    lottieData = readingLottie;
  } else {
    lottieData = analyticsLottie;
  }

  console.log(lottieState);
  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: lottieData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let blog_item_image;

  if (data.id === "python") {
    blog_item_image = Python;
  } else if (data.id === "javascript") {
    blog_item_image = Javascript;
  } else if (data.id === "react") {
    blog_item_image = ReactLogo;
  } else if (data.id == "tensorflow") {
    blog_item_image = Tensorflow;
  }

  return (
    <Fragment>
      <motion.div
        className="app-item"
        whileHover={{ z: 10, backgroundColor: "#f5f5f7" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div
          className="app-item-content"
          onMouseEnter={() => setLottieState(false)}
          onMouseLeave={() => setLottieState(true)}
        >
          <div className="app-item-image">
            <Lottie
              options={defaultOptions}
              height={300}
              width={300}
              isStopped={lottieState}
              isPaused={lottieState}
            />
          </div>
          <div className="app-item-body">
            <div className="app-item-text">
              <h4
                style={{
                  color: "#0f62fe",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {data.name}
              </h4>
              <h4
                style={{
                  color: "#999999",
                }}
              >
                {data.short_desc}
              </h4>
              <p
                style={{
                  color: "#0f62fe",
                  fontSize: "0.8rem",
                  marginTop: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                {data.desc}
              </p>
              {data.tags.map((tag, index) => {
                return (
                  <Tag
                    size="sm"
                    key={index}
                    type={
                      tag === "analytics"
                        ? "cyan"
                        : tag === "javasctipt"
                        ? "red"
                        : tag === "react"
                        ? "magenta"
                        : tag === "tensorflow"
                        ? "teal"
                        : "gray"
                    }
                    title={tag}
                  >
                    {tag}
                  </Tag>
                );
              })}
            </div>
            <div className="app-item-footer">
              <div className="app-item-go">
                <ArrowRight24 fill="#0f62fe" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default AppItem;
