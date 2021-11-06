import React, { Fragment } from "react";
import SubHeading4 from "../components/SubHeading4";
import Paragraph from "../components/Paragraph";
import Code from "../components/Code";


const Post_1 = () => {

  return (
    <Fragment>
     
      <Code language = "py">
        {`def SignUp():
    response = {"errors": {}, "data": {}, "token": {}}

    req = request.get_json()
    email = req["email"]
    password = req["password"]

    errors, valid = validateLoginInput(
        email, password)

    if not valid:
        response["errors"] = errors
        return make_response(jsonify(response), 400)

    return make_response(jsonify(response), 200)`}

      </Code>
     

    </Fragment>
  );
};

export default Post_1;
