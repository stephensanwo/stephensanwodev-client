import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import Code from "../components/Code";


const Post_1 = ({content}) => {

  return (
    <Fragment>
      <SubHeading id={content[0]}>The Import Module/System</SubHeading>
      <Paragraph>
        "Many people get introduced to Python firstly as a scripting language, I
        first started out doing analytics with python, and the nature of those
        projects involved writing single file scripts, or using jupyter
        notebooks perform analysis in python. While this served its purpose,
        moving into software development, is completely different area,although
        the programming language has stayed the same, there a number of things
        that need to be covered in order to have a good python software or API
        development project, many of which are poorly covered on the internet,
        and one key area is how to structure your python projects.
      </Paragraph>
      <Paragraph>
        Tutorials typically write code in a single file, which is not
        necessarily true of actual software development projects, and developers
        get confused on selecting the best way to structure projects. This
        article however, hopes to simplify the concepts behind structuring your
        projects, and it especially targets developers who want to move from
        writing basic scripts to building complex multi-module softwares, or
        even building reusable python packages for the PyPi index. Many people
        get introduced to Python firstly as a scripting language, I first
        started out doing analytics with python, and the nature of those
        projects involved writing single file scripts, or using jupyter
        notebooks perform analysis in python. While this served its purpose,
        moving into software development, is completely different area,although
        the programming language has stayed the same, there a number of things
        that need to be covered in order to have a good python software or API
        development project, many of which are poorly covered on the internet,
        and one key area is how to structure your python projects.
      </Paragraph>
      <Paragraph>
        Tutorials typically write code in a single file, which is not
        necessarily true of actual software development projects, and developers
        get confused on selecting the best way to structure projects. This
        article however, hopes to simplify the concepts behind structuring your
        projects, and it especially targets developers who want to move from
        writing basic scripts to building complex multi-module softwares, or
        even building reusable python packages for the PyPi index."
      </Paragraph>
      <Code>
        {`def login():
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
      <Paragraph>
        "Many people get introduced to Python firstly as a scripting language, I
        first started out doing analytics with python, and the nature of those
        projects involved writing single file scripts, or using jupyter
        notebooks perform analysis in python. While this served its purpose,
        moving into software development, is completely different area,although
        the programming language has stayed the same, there a number of things
        that need to be covered in order to have a good python software or API
        development project, many of which are poorly covered on the internet,
        and one key area is how to structure your python projects. Tutorials
        typically write code in a single file, which is not necessarily true of
        actual software development projects, and developers get confused on
        selecting the best way to structure projects. This article however,
        hopes to simplify the concepts behind structuring your projects, and it
        especially targets developers who want to move from writing basic
        scripts to building complex multi-module softwares, or even building
        reusable python packages for the PyPi index. Many people get introduced
        to Python firstly as a scripting language, I first started out doing
        analytics with python, and the nature of those projects involved writing
        single file scripts, or using jupyter notebooks perform analysis in
        python. While this served its purpose, moving into software development,
        is completely different area,although the programming language has
        stayed the same, there a number of things that need to be covered in
        order to have a good python software or API development project, many of
        which are poorly covered on the internet, and one key area is how to
        structure your python projects. Tutorials typically write code in a
        single file, which is not necessarily true of actual software
        development projects, and developers get confused on selecting the best
        way to structure projects. This article however, hopes to simplify the
        concepts behind structuring your projects, and it especially targets
        developers who want to move from writing basic scripts to building
        complex multi-module softwares, or even building reusable python
        packages for the PyPi index."
      </Paragraph>
      <SubHeading id = {content[1]}>Virtual environments using Venv</SubHeading>

      <Paragraph>
        "Many people get introduced to Python firstly as a scripting language, I
        first started out doing analytics with python, and the nature of those
        projects involved writing single file scripts, or using jupyter
        notebooks perform analysis in python. While this served its purpose,
        moving into software development, is completely different area,although
        the programming language has stayed the same, there a number of things
        that need to be covered in order to have a good python software or API
        development project, many of which are poorly covered on the internet,
        and one key area is how to structure your python projects. Tutorials
        typically write code in a single file, which is not necessarily true of
        actual software development projects, and developers get confused on
        selecting the best way to structure projects. This article however,
        hopes to simplify the concepts behind structuring your projects, and it
        especially targets developers who want to move from writing basic
        scripts to building complex multi-module softwares, or even building
        reusable python packages for the PyPi index. Many people get introduced
        to Python firstly as a scripting language, I first started out doing
        analytics with python, and the nature of those projects involved writing
        single file scripts, or using jupyter notebooks perform analysis in
        python. While this served its purpose, moving into software development,
        is completely different area,although the programming language has
        stayed the same, there a number of things that need to be covered in
        order to have a good python software or API development project, many of
        which are poorly covered on the internet, and one key area is how to
        structure your python projects. Tutorials typically write code in a
        single file, which is not necessarily true of actual software
        development projects, and developers get confused on selecting the best
        way to structure projects. This article however, hopes to simplify the
        concepts behind structuring your projects, and it especially targets
        developers who want to move from writing basic scripts to building
        complex multi-module softwares, or even building reusable python
        packages for the PyPi index."
      </Paragraph>
      <SubHeading id = {content[2]}>The Import Module/System 2</SubHeading>

<Paragraph>
  "Many people get introduced to Python firstly as a scripting language, I
  first started out doing analytics with python, and the nature of those
  projects involved writing single file scripts, or using jupyter
  notebooks perform analysis in python. While this served its purpose,
  moving into software development, is completely different area,although
  the programming language has stayed the same, there a number of things
  that need to be covered in order to have a good python software or API
  development project, many of which are poorly covered on the internet,
  and one key area is how to structure your python projects. Tutorials
  typically write code in a single file, which is not necessarily true of
  actual software development projects, and developers get confused on
  selecting the best way to structure projects. This article however,
  hopes to simplify the concepts behind structuring your projects, and it
  especially targets developers who want to move from writing basic
  scripts to building complex multi-module softwares, or even building
  reusable python packages for the PyPi index. Many people get introduced
  to Python firstly as a scripting language, I first started out doing
  analytics with python, and the nature of those projects involved writing
  single file scripts, or using jupyter notebooks perform analysis in
  python. While this served its purpose, moving into software development,
  is completely different area,although the programming language has
  stayed the same, there a number of things that need to be covered in
  order to have a good python software or API development project, many of
  which are poorly covered on the internet, and one key area is how to
  structure your python projects. Tutorials typically write code in a
  single file, which is not necessarily true of actual software
  development projects, and developers get confused on selecting the best
  way to structure projects. This article however, hopes to simplify the
  concepts behind structuring your projects, and it especially targets
  developers who want to move from writing basic scripts to building
  complex multi-module softwares, or even building reusable python
  packages for the PyPi index."
</Paragraph>
<SubHeading id = {content[3]}>Virtual environments using Venv 2</SubHeading>

<Paragraph>
  "Many people get introduced to Python firstly as a scripting language, I
  first started out doing analytics with python, and the nature of those
  projects involved writing single file scripts, or using jupyter
  notebooks perform analysis in python. While this served its purpose,
  moving into software development, is completely different area,although
  the programming language has stayed the same, there a number of things
  that need to be covered in order to have a good python software or API
  development project, many of which are poorly covered on the internet,
  and one key area is how to structure your python projects. Tutorials
  typically write code in a single file, which is not necessarily true of
  actual software development projects, and developers get confused on
  selecting the best way to structure projects. 
  </Paragraph>
  <Paragraph>
  This article however,
  hopes to simplify the concepts behind structuring your projects, and it
  especially targets developers who want to move from writing basic
  scripts to building complex multi-module softwares, or even building
  reusable python packages for the PyPi index. Many people get introduced
  to Python firstly as a scripting language, I first started out doing
  analytics with python, and the nature of those projects involved writing
  single file scripts, or using jupyter notebooks perform analysis in
  python. While this served its purpose, moving into software development,
  is completely different area,although the programming language has
  stayed the same, there a number of things that need to be covered in
  order to have a good python software or API development project, many of
  which are poorly covered on the internet, and one key area is how to
  structure your python projects. Tutorials typically write code in a
  single file, which is not necessarily true of actual software
  development projects, and developers get confused on selecting the best
  way to structure projects. This article however, hopes to simplify the
  concepts behind structuring your projects, and it especially targets
  developers who want to move from writing basic scripts to building
  complex multi-module softwares, or even building reusable python
  packages for the PyPi index."
</Paragraph>

    </Fragment>
  );
};

export default Post_1;
