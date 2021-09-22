import React, { lazy, Fragment, useEffect } from "react";

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

const PostContent = ({ post_data }) => {
  const importPost = (id) =>
    lazy(() =>
      import(`../../posts/Post_${id}.jsx`).catch(() =>
        import(`../../posts/Not_Found`)
      )
    );
  const Post = importPost(post_data.post_id);
  const content_id = post_data.content.map((content_data) =>
    content_data.replaceAll(/\s/g, "")
  );

  return (
    <div className="blog-post-container">
      <h4
        style={{
          fontFamily: "display-text-bold",
          fontSize: "0.8em",
          color: "#539bf5",
          marginBottom: "1em",
        }}
      >
        {post_data.category} - {post_data.sub_category}
      </h4>
      <h4
        style={{
          fontSize: "2rem",
          fontFamily: "display-text-bold",
          color: "#ffffff",
          marginBottom: "1rem",
          marginTop: "1rem",
          lineHeight: 1.3,
        }}
      >
        {post_data.title}
      </h4>
      <div
        className="blog-content-featured-tags"
        style={{ marginBottom: "1rem" }}
      >
        {post_data.tags.map((tag, index) => (
          <Tags type="blog" title={tag} color={"green"} />
        ))}
      </div>
      <div style={{ display: "flex", marginBottom: "1rem" }}>
        <h4
          style={{
            fontFamily: "display-text-medium",
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "0.5rem",
          }}
        >
          {post_data.author}
        </h4>
        <h4
          style={{
            fontFamily: "display-text-medium",
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
            fontFamily: "display-text-medium",
            fontSize: "0.85em",
            color: "#adbac7",
            marginBottom: "1.5rem",
          }}
        >
          {post_data.date}
        </h4>
      </div>

      <div className="blog-post-image">
        <img src={post_data.image_url} width="100%"></img>
      </div>
      <div className="blog-post-detail">
        <h2
          style={{
            color: "#05aa82",
            fontFamily: "display-text-bold",
            fontSize: "1.2em",
            marginBottom: "0.4em",
            lineHeight: 1.5,
          }}
        >
          TL;DR
        </h2>

        <p
          style={{
            fontFamily: "display-text-medium-italic",
            fontWeight: "400",
            fontSize: "1em",
            color: "#05aa82",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          {post_data.description}
        </p>
        <div
          className="section-divider-line"
          style={{ marginTop: "1rem", marginBottom: "2rem" }}
        ></div>

        {/* JSX will be inserted here */}
        <React.Suspense fallback={<ArrowDown24 fill="#ffffff" />}>
          <Post content={content_id} />
        </React.Suspense>
      </div>
      <div
        className="section-divider-line"
        style={{ marginTop: "4rem", marginBottom: "2rem" }}
      ></div>

      <div className="next-previous-post">
        <div className="next-previous-item">
          <ArrowLeft24 fill="#539bf5" />
          <a
            style={{
              fontFamily: "display-text-bold",
              fontSize: "1em",
              color: "#539bf5",
              marginLeft: "0.5rem",
            }}
          >
            Previous Post
          </a>
        </div>
        <div className="next-previous-item">
          <a
            style={{
              fontFamily: "display-text-bold",
              fontSize: "1em",
              color: "#539bf5",
              marginRight: "0.5rem",
            }}
          >
            Next Post
          </a>
          <ArrowRight24 fill="#539bf5" />
        </div>
      </div>
    </div>
  );
};

export default PostContent;
