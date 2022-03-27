import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import Image from "../components/Image";
import SubHeading4 from "../components/SubHeading4";
import ListItem from "../components/ListItem";
import InlineLink from "../components/InlineLink";




const PostDetail = ({data}) => {

  return (
    <Fragment>
      {data.map((item) => (
        item.details.subheading?  <SubHeading id={item.details.subheading.id}>{item.details.subheading.detail}</SubHeading> : item.details.paragraph? <Paragraph>
        {item.detail.paragraph}
       </Paragraph>: <Fragment></Fragment>
      ))}
      

    </Fragment>
  );
};

export default PostDetail;
