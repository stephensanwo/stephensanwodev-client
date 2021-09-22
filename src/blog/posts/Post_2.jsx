import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";

const Post_1 = () => {
  return (
    <Fragment>
      <SubHeading>Setting up</SubHeading>
      <Paragraph>
        When developing software with python, a simplistic approach is to
        install python on your machine, install all your required libraries via
        the terminal, write all your code in a single .py file or jupyter
        notebook, and run your python program. This is a common approach for a
        lot of newbies and many people that work with python for analytics.
        While this works, in complex software development projects, which could
        involve building a python library or an API, or software development
        kit, often times, you will be working with multiple files and multiple
        packages and dependencies. As a result of this, you will need to isolate
        your python development for that particular software. Consider this
        scenario, you are working on app A, using your system installed python
        and you pip install packageX version 1.0 to your global python program.
        Then you switch to another project B on your local machine, and you
        install the same packageX but version 2.0, which has some breaking
        changes between version 1.0 and 2.0. All of a sudden when you go back to
        run your project A, you get all sorts of errors, and your app does not
        run. How can you avoid this? Well you guessed... Virtual Environments.
        What is a virtual environment? The python official documentation
        describes a virtual environment as: **"*A virtual environment is a
        Python environment such that the Python interpreter, libraries and
        scripts installed into it are isolated from those installed in other
        virtual environments, and (by default) any libraries installed in a
        “system” Python, i.e., one which is installed as part of your operating
        system"*** What does this mean? When you activate a virtual environment
        for your project, your project essentially becomes its own self
        contained application, independent of the system installed python and
        its modules. Your new virtual environment has its own pip to install
        libraries, its own library folder, where new libraries are added, its
        own python interpreter for the python version you used to activate the
        environment.
      </Paragraph>
      <SubHeading>Setting up</SubHeading>
      <Paragraph>
        When developing software with python, a simplistic approach is to
        install python on your machine, install all your required libraries via
        the terminal, write all your code in a single .py file or jupyter
        notebook, and run your python program. This is a common approach for a
        lot of newbies and many people that work with python for analytics.
        While this works, in complex software development projects, which could
        involve building a python library or an API, or software development
        kit, often times, you will be working with multiple files and multiple
        packages and dependencies. As a result of this, you will need to isolate
        your python development for that particular software. Consider this
        scenario, you are working on app A, using your system installed python
        and you pip install packageX version 1.0 to your global python program.
        Then you switch to another project B on your local machine, and you
        install the same packageX but version 2.0, which has some breaking
        changes between version 1.0 and 2.0. All of a sudden when you go back to
        run your project A, you get all sorts of errors, and your app does not
        run. How can you avoid this? Well you guessed... Virtual Environments.
        What is a virtual environment? The python official documentation
        describes a virtual environment as: **"*A virtual environment is a
        Python environment such that the Python interpreter, libraries and
        scripts installed into it are isolated from those installed in other
        virtual environments, and (by default) any libraries installed in a
        “system” Python, i.e., one which is installed as part of your operating
        system"*** What does this mean? When you activate a virtual environment
        for your project, your project essentially becomes its own self
        contained application, independent of the system installed python and
        its modules. Your new virtual environment has its own pip to install
        libraries, its own library folder, where new libraries are added, its
        own python interpreter for the python version you used to activate the
        environment.
      </Paragraph>
      <SubHeading>Setting up</SubHeading>
      <Paragraph>
        When developing software with python, a simplistic approach is to
        install python on your machine, install all your required libraries via
        the terminal, write all your code in a single .py file or jupyter
        notebook, and run your python program. This is a common approach for a
        lot of newbies and many people that work with python for analytics.
        While this works, in complex software development projects, which could
        involve building a python library or an API, or software development
        kit, often times, you will be working with multiple files and multiple
        packages and dependencies. As a result of this, you will need to isolate
        your python development for that particular software. Consider this
        scenario, you are working on app A, using your system installed python
        and you pip install packageX version 1.0 to your global python program.
        Then you switch to another project B on your local machine, and you
        install the same packageX but version 2.0, which has some breaking
        changes between version 1.0 and 2.0. All of a sudden when you go back to
        run your project A, you get all sorts of errors, and your app does not
        run. How can you avoid this? Well you guessed... Virtual Environments.
        What is a virtual environment? The python official documentation
        describes a virtual environment as: **"*A virtual environment is a
        Python environment such that the Python interpreter, libraries and
        scripts installed into it are isolated from those installed in other
        virtual environments, and (by default) any libraries installed in a
        “system” Python, i.e., one which is installed as part of your operating
        system"*** What does this mean? When you activate a virtual environment
        for your project, your project essentially becomes its own self
        contained application, independent of the system installed python and
        its modules. Your new virtual environment has its own pip to install
        libraries, its own library folder, where new libraries are added, its
        own python interpreter for the python version you used to activate the
        environment.
      </Paragraph>
    </Fragment>
  );
};

export default Post_1;
