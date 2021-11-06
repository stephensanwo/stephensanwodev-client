import React, { Fragment } from "react";
import { apps_data } from "../../../data/apps";
import Card from "../../../shared/components/Card";

const FeaturedApps = () => {
  return (
    <Fragment>
      {apps_data.slice(0, 1).map((featured_app, index) => (
        <div className="app-home-featured-container">
          <Card app_data={featured_app} featured={true} />
        </div>
      ))}
    </Fragment>
  );
};

export default FeaturedApps;
