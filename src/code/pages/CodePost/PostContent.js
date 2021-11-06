import React, { lazy, Fragment } from "react";
import {
  Launch16,
  Share16,
  ArrowRight16,
  ArrowDown24,
  ArrowRight24,
  ArrowLeft24,
} from "@carbon/icons-react";
import Tags from "../../../shared/components/Tags";
import "./style.scss";
import SubHeading from "../../components/SubHeading";
import Paragraph from "../../components/Paragraph";
import Loader from "../../../shared/components/Loader";

const PostContent = ({ code_content }) => {
  const importPost = (id) =>
    lazy(() =>
      import(`../../posts/Post_${id}.jsx`).catch(() =>
        import(`../../posts/Not_Found`)
      )
    );

  const Post = importPost(code_content.code_id);

  return (
    <div className="blog-post-container">
      <h4
        style={{
          fontSize: "0.8em",
          color: "#986ee2",
          marginBottom: "1em",
        }}
      >
        {code_content.category}
      </h4>
      <h4
        style={{
          fontSize: "2rem",
          color: "#adbac7",
          marginBottom: "1rem",
          marginTop: "1rem",
          lineHeight: 1.3,
        }}
      >
        {code_content.title}
      </h4>
      <div
        className="blog-content-featured-tags"
        style={{ marginBottom: "1rem" }}
      >
        {code_content.tags.map((tag, index) => (
          <Tags type="blog" title={tag} color={"generic"} />
        ))}
      </div>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <h4
          style={{
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "0.5rem",
          }}
        >
          {code_content.author}
        </h4>
        <h4
          style={{
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "1.5rem",
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
          }}
        >
          |
        </h4>
        <h4
          style={{
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "1.5rem",
          }}
        >
          {code_content.date}
        </h4>
      </div>

      <div className="blog-post-detail">
        <h2
          style={{
            color: "#adbac7",
            fontSize: "1.2em",
            marginBottom: "0.4em",
            lineHeight: 1.5,
          }}
        >
          Description
        </h2>

        <p
          style={{
            fontWeight: 600,
            fontSize: "1em",
            color: "#adbac7",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          {code_content.desc}
        </p>
        <div
          className="section-divider-line"
          style={{ marginTop: "1rem", marginBottom: "2rem" }}
        ></div>

        {/* JSX will be inserted here */}
        <React.Suspense fallback={<Loader height="450px" />}>
          <Post />
        </React.Suspense>
      </div>
      <div
        className="section-divider-line"
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
      ></div>

      <div className="next-previous-post">
        <div className="next-previous-item">
          <ArrowLeft24 fill="#986ee2" />
          <a
            style={{
              fontSize: "1em",
              fontWeight: 800,
              color: "#986ee2",
              marginLeft: "0.5rem",
            }}
          >
            Previous Post
          </a>
        </div>
        <div className="next-previous-item">
          <a
            style={{
              fontSize: "1em",
              fontWeight: 800,
              color: "#986ee2",
              marginRight: "0.5rem",
            }}
          >
            Next Post
          </a>
          <ArrowRight24 fill="#986ee2" />
        </div>
      </div>
    </div>
  );
};

export default PostContent;
