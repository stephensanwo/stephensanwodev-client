import React, { Fragment } from "react";
import { LogoPython24, NextFilled24, CopyLink24 } from "@carbon/icons-react";

const BlogItem = () => {
  return (
    <Fragment>
      <div className="blog-item">
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
                <small>Python Development - From Scripting to Software </small>
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
            <h4>The Import Module, Python's Import System</h4>
            <p>
              BLog Item Many people get introduced to Python firstly as a
              scripting language, I first started out doing analytics with
              python, and the nature of those projects involved writing single
              file scripts, or using jupyter notebooks perform analysis in
              python.
            </p>
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
      </div>
    </Fragment>
  );
};

export default BlogItem;
