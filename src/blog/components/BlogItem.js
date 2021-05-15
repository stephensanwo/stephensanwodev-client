import React, { Fragment } from "react";
import { LogoPython24, NextFilled24, CopyLink24 } from "@carbon/icons-react";
import { motion } from "framer-motion";
const BlogItem = ({ data }) => {
  return (
    <Fragment>
      <motion.div
        className="blog-item"
        whileHover={{ y: -10, backgroundColor: "#f5f5f7" }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <div
          style={{
            display: "flex",
            padding: "2rem 2rem 1rem 2rem",
            height: "150px",
          }}
        >
          <div style={{ flexBasis: "20%" }}>
            <div style={{ display: "flex" }}>
              <div style={{ flexBasis: "20%" }}>
                <LogoPython24 color="#0f62fe" />
              </div>
              <div style={{ flexBasis: "80%" }}>
                <small>{data.category}</small> <br />
                <small>{data.sub_category}</small>
              </div>
            </div>
          </div>
          <div
            style={{
              flexBasis: "70%",
              paddingRight: "2rem",
              paddingLeft: "2rem",
            }}
          >
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
          <div
            style={{
              flexBasis: "10%",
              display: "flex",
              justifyContent: "right",
              alignItems: "flex-end",
              gap: "1rem",
            }}
          >
            <CopyLink24 fill="#0f62fe" />
            <NextFilled24 fill="#0f62fe" />
          </div>
        </div>
      </motion.div>
    </Fragment>
  );
};

export default BlogItem;
