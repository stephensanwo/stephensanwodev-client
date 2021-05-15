import React, { useState } from "react";
import { motion } from "framer-motion";
import SearchBox from "../../shared/components/SearchBox";

const BlogNavbar = ({ selectedTab, setSelectedTab }) => {
  const [searchData, setSearchData] = useState("");

  const handleTabChange = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    setSelectedTab(e.target.id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };
  return (
    <div className="blog-nav">
      <div className="nav-tabs">
        <div className="nav-tabs-content">
          <div
            id="tab_0"
            onClick={(e) => handleTabChange(e)}
            className={`nav-tab-0 ${
              selectedTab === "tab_0" ? "nav-tab-clicked" : ""
            }`}
          >
            <h4
              id="tab_0"
              style={{ textAlign: "center", paddingBottom: "1rem" }}
            >
              All <br /> Categories
            </h4>
          </div>
          <div
            id="tab_1"
            onClick={handleTabChange}
            className={`nav-tab-1 ${
              selectedTab === "tab_1" ? "nav-tab-clicked" : ""
            }`}
          >
            <h4
              id="tab_1"
              style={{ textAlign: "center", paddingBottom: "1rem" }}
            >
              API & <br /> Microservices
            </h4>
          </div>
          <div
            id="tab_2"
            onClick={handleTabChange}
            className={`nav-tab-2 ${
              selectedTab === "tab_2" ? "nav-tab-clicked" : ""
            }`}
          >
            <h4
              id="tab_2"
              style={{ textAlign: "center", paddingBottom: "1rem" }}
            >
              Frontend <br />
              Development
            </h4>
          </div>
          <div
            id="tab_3"
            onClick={handleTabChange}
            className={`nav-tab-3 ${
              selectedTab === "tab_3" ? "nav-tab-clicked" : ""
            }`}
          >
            <h4
              id="tab_3"
              style={{ textAlign: "center", paddingBottom: "1rem" }}
            >
              Deep Learning <br /> & AI
            </h4>
          </div>
          <div
            id="tab_4"
            onClick={handleTabChange}
            className={`nav-tab-4 ${
              selectedTab === "tab_4" ? "nav-tab-clicked" : ""
            }`}
          >
            <h4
              id="tab_4"
              style={{ textAlign: "center", paddingBottom: "1rem" }}
            >
              Software <br />
              Development
            </h4>
          </div>
        </div>
      </div>
      <div className="nav-search">
        <SearchBox
          size="small"
          placeholder={"Find Article"}
          searchData={searchData}
          setSearchData={setSearchData}
          onInput={handleSearch}
        />
      </div>
      <div className="nav-actions">Actions</div>
    </div>
  );
};

export default BlogNavbar;
