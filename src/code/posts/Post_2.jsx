import React, { Fragment } from "react";
import SubHeading4 from "../components/SubHeading4";
import Paragraph from "../components/Paragraph";
import Code from "../components/Code";


const Post_1 = () => {

  return (
    <Fragment>
     
      <Code language = "js">
        {`  if (post_data) {
    const importPost = (id) =>
      lazy(() =>
        import("../../posts/Post.jsx").catch(() =>
          import("../../posts/Not_Found")
        )
      );
    const Post = importPost(post_data.post_id);
    const content_id = post_data.content.map((content_data) =>
      content_data.replaceAll(/\s/g, "")
    );`}

      </Code>
     

    </Fragment>
  );
};

export default Post_1;
