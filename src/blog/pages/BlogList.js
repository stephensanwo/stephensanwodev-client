import React, { Fragment, useState } from "react";
import SideNav from "../../shared/components/SideNav";
import "../styles/blog-list.scss";
import BlogGrid from "../components/BlogGrid";
import FeaturedArticle from "../components/FeaturedArticle";
import BlogNavbar from "../components/BlogNavbar";

const BlogList = () => {
  const [selectedTab, setSelectedTab] = useState("tab_0");
  const [isNavOpen, setIsNavOpen] = useState("");

  return (
    <Fragment>
      <div className="bloglist-container">
        <div className="bloglist-grid-1">
          <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="bloglist-grid-2">
          <FeaturedArticle isNavOpen={isNavOpen} />
          <BlogNavbar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          <BlogGrid selectedTab={selectedTab} />
        </div>
      </div>
    </Fragment>
  );
};

export default BlogList;
