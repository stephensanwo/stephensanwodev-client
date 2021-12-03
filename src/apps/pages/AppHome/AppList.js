import React, { useContext } from "react";
import { ArrowRight24 } from "@carbon/icons-react";
import Card from "../../../shared/components/Card";
import { AppContext } from ".";

const AppList = () => {
  const data = useContext(AppContext);

  console.log(data.data.length);
  return (
    <div style={{ marginTop: "4rem" }}>
      {data.data.length === 0 ? (
        <div className="app-home-articles-container">
          <h4 style={{ textAlign: "center" }}>
            {`No Apps available for the current filter - ${data.filter}`}
          </h4>
        </div>
      ) : (
        data.data.map((app_item, index) => (
          <div className="app-home-articles-container">
            <Card app_data={app_item} />
          </div>
        ))
      )}

      <div className="see-all-apps"></div>
    </div>
  );
};

export default AppList;
