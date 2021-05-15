import React, { Fragment } from "react";
import BlogItem from "./BlogItem";
import {
  frontend_dev,
  api_microservice,
  deeplearning_ai,
  all,
  software_dev,
} from "../data/tmp_blog";
import BlogFooter from "./BlogFooter";

const BlogGrid = ({ selectedTab }) => {
  return (
    <Fragment>
      <div className={`blog-grid ${selectedTab === "tab_0" ? "selected" : ""}`}>
        {all.map((data_0, index_0) => {
          return <BlogItem data={data_0} key={index_0} />;
        })}
      </div>
      <div className={`blog-grid ${selectedTab === "tab_1" ? "selected" : ""}`}>
        {api_microservice.map((data_1, index_1) => {
          return <BlogItem data={data_1} key={index_1} />;
        })}
      </div>
      <div className={`blog-grid ${selectedTab === "tab_2" ? "selected" : ""}`}>
        {frontend_dev.map((data, index) => {
          return <BlogItem data={data} key={index} />;
        })}
      </div>
      <div className={`blog-grid ${selectedTab === "tab_3" ? "selected" : ""}`}>
        {deeplearning_ai.map((data, index) => {
          return <BlogItem data={data} key={index} />;
        })}
      </div>
      <div className={`blog-grid ${selectedTab === "tab_4" ? "selected" : ""}`}>
        {software_dev.map((data, index) => {
          return <BlogItem data={data} key={index} />;
        })}
      </div>
      <BlogFooter />
    </Fragment>
  );
};

export default BlogGrid;
