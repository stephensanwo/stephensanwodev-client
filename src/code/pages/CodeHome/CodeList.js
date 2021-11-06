import React from "react";
import { code_data } from "../../../data/code";
import { ArrowRight24 } from "@carbon/icons-react";
import Card from "../../components/Card";

const CodeList = () => {
  return (
    <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      {code_data.map((code_item, index) => (
        <div key={index} className="app-home-articles-container">
          <Card code_item={code_item} />
        </div>
      ))}

      <div className="see-all-blog">
        <a
          style={{
            fontSize: "1em",
            fontWeight: 800,
            color: "#986ee2",
            marginRight: "0.5rem",
          }}
        >
          More Posts
        </a>
        <ArrowRight24 fill="#986ee2" />
      </div>
    </div>
  );
};

export default CodeList;
