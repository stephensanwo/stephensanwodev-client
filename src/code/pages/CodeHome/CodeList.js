import React, { useContext } from "react";
import { PostContext } from "../..";
import { ArrowRight24 } from "@carbon/icons-react";
import Card from "../../components/Card";
import { InlineLoading } from "carbon-components-react";

const CodeList = () => {
  const data = useContext(PostContext);

  const fetchData = () => {
    data.setLimit(data.limit + 2);
  };

  return (
    <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
      {data.data.code_posts.length === 0 ? (
        <div className="app-home-articles-container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h4 style={{ textAlign: "center" }}>
              {data.isFetching
                ? ""
                : `No posts available for the current filter - ${data.filter}`}
            </h4>
          </div>
        </div>
      ) : (
        data.data.code_posts.map((code_item, index) => (
          <div key={index} className="app-home-articles-container">
            <Card code_item={code_item} />
          </div>
        ))
      )}

      <div className="see-all-blog" onClick={fetchData}>
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
        {data.isFetching ? (
          <span>
            <InlineLoading width="24px" height="24px" />
          </span>
        ) : (
          <ArrowRight24 fill="#986ee2" />
        )}
      </div>
    </div>
  );
};

export default CodeList;
