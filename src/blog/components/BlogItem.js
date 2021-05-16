import React, { Fragment } from "react";
import { LogoPython24, ArrowRight24, CopyLink24 } from "@carbon/icons-react";
import { motion } from "framer-motion";
import { Tag } from "carbon-components-react";
import "../styles/blog-list.scss";
import Python from "../../assets/logos/python-ar21.svg";
import Javascript from "../../assets/logos/javascript-logo-svgrepo-com.svg";
import ReactLogo from "../../assets/logos/reactjs-ar21.svg";
import Tensorflow from "../../assets/logos/tensorflow-ar21.svg";
const BlogItem = ({ data }) => {
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
        className="blog-item"
        whileHover={{ y: -10, backgroundColor: "#f5f5f7" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div className="blog-item-content">
          <div
            style={{
              flexBasis: "15%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                paddingLeft: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <div>
                <img src={blog_item_image} alt="" width="80px" height="40px" />
              </div>
              <small style={{ color: "#0f62fe" }}>{data.category}</small>
              <small style={{ color: "#0f62fe" }}>{data.sub_category}</small>
            </div>
          </div>
          <div
            style={{
              flexBasis: "80%",
              paddingTop: "0.5rem",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            <h4 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
              {data.title}
            </h4>
            <p style={{ fontSize: "0.8rem" }}>{data.description}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                width: "100%",
                marginTop: "0.5rem",
                alignItems: "center",
              }}
            >
              {data.tags.map((tag, index) => {
                return (
                  <Tag key={index} type={"cyan"} title={data.id}>
                    {tag}
                  </Tag>
                );
              })}
            </div>
          </div>
          <div
            style={{
              flexBasis: "5%",
              display: "flex",
              justifyContent: "right",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <div className="blog-item-go">
              <ArrowRight24 fill="#0f62fe" />
            </div>
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default BlogItem;
