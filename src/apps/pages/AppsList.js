import React, { Fragment, useState } from "react";
import SideNav from "../../shared/components/SideNav";
import "../styles/app-list.scss";
// import BlogGrid from "../components/BlogGrid";
import FeaturedApp from "../components/FeaturedApp";
import AppNavbar from "../components/AppNavbar";
import AppGrid from "../components/AppGrid";

const AppsList = () => {
  const [isNavOpen, setIsNavOpen] = useState("");

  return (
    <Fragment>
      <div className="applist-container">
        <div className="applist-grid-1">
          <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
        <div className="applist-grid-2">
          <FeaturedApp isNavOpen={isNavOpen} />
          <AppNavbar />
          <AppGrid />
        </div>
      </div>
    </Fragment>
  );
};

export default AppsList;
