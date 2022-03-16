import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import ListItem from "../components/ListItem";

import CodeInline from "../../code/components/CodeInline";
import InlineLink from "../components/InlineLink";


const Post_3 = ({content}) => {
  return (
    <Fragment>
      <SubHeading id={content[0]}>Introduction</SubHeading>
      <Paragraph>
      When developing software with python, a simplistic approach is to install python on your machine, install all your required libraries via the terminal, write all your code in a single .py file or jupyter notebook, and run your python program in the terminal. This is a common approach for a lot of newbies and many people transitioning from working with python for data analytics.
      </Paragraph>
      <Paragraph>
      While this works fine for simple python scripting projects, in complex software development projects, which could involve building a python library, an API, or software development kit, often times, you will be working with multiple files and multiple packages and dependencies. As a result of this, you will need to isolate your python development environment for that particular project. 
      </Paragraph>
      <Paragraph>
      Consider this scenario, you are working on app A, using your system installed python and you pip install packageX version 1.0 to your global python library. Then you switch to another project B on your local machine, and you install the same packageX but version 2.0, which has some breaking changes between version 1.0 and 2.0. All of a sudden when you go back to run your project A, you get all sorts of errors, and your app does not run. This is a practical scenario you can run into when building software with python, and to get around this, we use Virtual Environments. 
      </Paragraph>
      <Paragraph>
      This tutorial will cover everything you need to know about virtual environments and how to set it up.
      </Paragraph>


      <SubHeading id={content[1]}>What is a Virtual Environment</SubHeading>
      <Paragraph>
      What is a virtual environment? LEts take a look at what the python official documentation says: "A virtual environment is a Python environment such that the Python interpreter, libraries and scripts installed into it are isolated from those installed in other virtual environments, and (by default) any libraries installed in a “system” Python, i.e., one which is installed as part of your operating system"
      </Paragraph>
      <Paragraph>
      What does this mean? When you activate a virtual environment for your project, your project essentially becomes its own self contained application, independent of the system installed python and its modules. Your new virtual environment has its own pip to install libraries, its own library folder, where new libraries are added, its own python interpreter for the python version you used to activate the environment.
      </Paragraph>

      <Paragraph>
      With this new environment, your application becomes self-contained and you get some benefits such as:
      <ListItem>
      Your development environment is contained within your project, becomes isolated, and does not interfere with your system installed python or other virtual environments
      </ListItem>
      <ListItem>
      You can create a new virtual environment for multiple python versions
      </ListItem>
      <ListItem>
      You are able to download packages into your project without admin privileges
      </ListItem>
      <ListItem>
      You can easily package your application and share with other developers to replicate or upload to PyPi
     </ListItem>
     <ListItem>
     You can easily create a list of dependencies and sub dependencies in a requirements.txt file, for your project, which makes it easy for other developers to replicate your development environment
     </ListItem>
      </Paragraph>

    <Paragraph>
    Using virtual environments is recommended for software development projects that generally grow out of a single python script, and python provides multiple ways of creating and using a virtual environment. In the section below, I will show you how to set up your virtual environment, using venv, which gives you a lot more low level control of your environment. Another common way to set up your virtual environment is to use pipenv, which is a more high level approach (I will talk about using pipenv in a later article).
    </Paragraph>

      <SubHeading id={content[2]}>Installing Virtual environments using Venv</SubHeading>
      <Paragraph>
      virtualenv is a tool to set up your Python environments. Since Python 3.3, a subset of it has been integrated into the standard library under the venv module. You can install venv to your host python by running this command in your terminal
      </Paragraph>

    <Paragraph>
      <CodeInline language = "bash">
        {` ~ pip install virtualenv`}
      </CodeInline>   
      </Paragraph>

      <Paragraph>
      To use venv in your project, in your terminal, create a new project folder, cd to the project folder in your terminal and  run the following command 
      </Paragraph>
      <Paragraph>
      <CodeInline language = "bash">
        {` python<version> -m venv <virtual-environment-name>`}
      </CodeInline>   
      </Paragraph>

      <Paragraph>
        Like so
      <CodeInline language = "bash">
        {` ~ mkdir projectA
 ~ cd projectA
 ~ python3.8 -m venv env`}
      </CodeInline>   
      </Paragraph>
      <Paragraph>
      When you check the new projectA folder, you will notice that a new folder called env has been created. env is the name of our virtual environment, it can however be named anything you want.
      </Paragraph>
      <Paragraph>
      If we check the contents of env for a bit, on a mac, you will see a bin folder, you will see scripts that are typically used to control your virtual environment, such as activate, pip; to install libraries, and the python interpreter for the python version you installed, etc. (This folder will be called Scripts on windows). The lib folder will contain a list of libraries that you have installed. If you take a look at it, you will see a list of the libraries that come default with the virtual environmet.
      </Paragraph>



      <SubHeading id={content[3]}>Activating the virtual environment</SubHeading>
      <Paragraph>
      Now that you have created the virtual environment, you will need to activate it before you can use it in your project. On a mac, to activate your virtual environment, cd to env in the terminal and run the code below
      </Paragraph>

      <Paragraph>
      <CodeInline language = "bash">
        {` ~ source env/bin/activate`}
      </CodeInline>   
      </Paragraph>

    <Paragraph>
    This will activate your virtual environment, and immediately, you will notice that your terminal path has included env signifying an activated virtual environment. Note that to activate your virtual environment on widows, you will need to run the following code below (See this <InlineLink link = {"https://docs.python.org/3/library/venv.html"}>link</InlineLink> to fully understand the differences between platforms)
    </Paragraph>

    <Paragraph>
      <CodeInline language = "bash">
        {` env\Scripts\activate.bat # In CMD
 env\Scripts\Activate.ps1 # In Powershell`}
      </CodeInline>   
      </Paragraph>

      <SubHeading id={content[4]}>Is it working?</SubHeading>
      <Paragraph>
      So we have activated our virtual environment, the next logical question is...is it working? how do we confirm that our project is in fact isolated from our host python. We can do a couple of things. 
</Paragraph>



<Paragraph>

<ListItem>
First we check the list of packages installed in our virtual environment by running the code below in the activated virtual environment. You will notice only two packages pip and setuptools.
</ListItem>
<Paragraph>
      <CodeInline language = "bash">
        {` ~ pip list`}
      </CodeInline>   
      </Paragraph>

      <ListItem>
      Next you can run the same code above in a new terminal, that you haven't activated the virtual environment, and you will notice a lot more libraries in your host python that you may have installed in the past. These libraries are not part of your python virtual environment untill you install them
</ListItem>
</Paragraph>


<SubHeading id={content[5]}>
Installing Libraries</SubHeading>


<Paragraph>
To install new libraries, you can easily just pip install the libraries. the virtual environment will make use of its own pip, so you don't need to use pip3. If you like you can also use easy_install library.</Paragraph>

<Paragraph>
After installing your required libraries, you can view all installed libraries by using pip list or generate a text file listing all your project dependencies by running the code below
</Paragraph>

<Paragraph>
      <CodeInline language = "bash">
        {` ~ pip freeze > requirements.txt`}
      </CodeInline>   
      </Paragraph>

  <Paragraph>
  Note that you can name this requirements.txt file whatever you want.
  </Paragraph>



<SubHeading id={content[6]}>
Requirements File
</SubHeading>
<Paragraph>
Why is a requirements file important to add to your project? Consider that you package your project in a zip file (without the env folder*) and you send to your developer friend. To recreate your development environment, your friend will just need to follow the above steps to activate a new virtual environment, and instead of having to install each dependency one by one, they could just run the code below, to install all your dependencies within their own copy of the project
      </Paragraph>



      <Paragraph>
      <CodeInline language = "bash">
        {` ~ pip install -r requirements.txt`}
      </CodeInline>   
      </Paragraph>

  <Paragraph>
  *Note that it is generally not advisable to share your env folder, and it should be easily replicated in any new environment. Typically your env directory will be included in a .gitignore file, when using version control platforms like github. to ensure that the environment file is not pushed to the project repository.
  </Paragraph>

  <SubHeading id={content[7]}>Deactivating your virtual environment</SubHeading>
  <Paragraph>
  To deactivate your virtual environment simply run the following code in the terminal
  </Paragraph>
  <Paragraph>
      <CodeInline language = "bash">
        {` ~ deactivate`}
      </CodeInline>   
      </Paragraph>


<SubHeading id={content[8]}>Conclusion</SubHeading>

<Paragraph>
In conclusion, python virtual environments gives you the ability to isolate your python development projects from your system installed Python and other python environments, giving you full control of your project and making it easily reproducible. When developing applications that would generally grow out of a simple .py script or a Jupyter notebook it is generally advisable to use a virtual environment, and you should start using it too. 
</Paragraph>
    </Fragment>
  );
};

export default Post_3;
