import React, { Fragment } from "react";
import { all, beta, projects } from "../data/tmp_apps";
import AppItem from "./AppItem";
import "../styles/app-list.scss";

const AppGrid = ({ selectedTab }) => {
  return (
    <Fragment>
      <div className={`app-grid`}>
        <div className="app-container">
          {all.map((data, index) => (
            <AppItem data={data} key={index} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default AppGrid;
