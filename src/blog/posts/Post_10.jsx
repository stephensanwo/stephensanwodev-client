import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";
import ListItem from "../components/ListItem";
import CodeInline from "../components/CodeInline"
import Code from "../components/Code";
import InlineLink from "../components/InlineLink";


const Post_10 = ({content}) => {
  return (
    <Fragment>
      <SubHeading id={content[0]}>Introduction</SubHeading>
      <Paragraph>
      Environment variables in python or any other programming language help you define and securely use and re-use variables at run time across your code base. In this article I’ll share some of the techniques and tools available in Python to work with environment variables.
      </Paragraph>
      <Paragraph>
      Environment variables are important when configuring your application and in adhering to code best practices. Typical use cases for environment variables include:
      </Paragraph>
      <Paragraph>
      <ListItem>
      Isolating secret variables from your code, and keeping them safe. For example while working with database connections within your code, it is neither advisable nor safe to explicitly define the password, username and other connection credentials within your connection object, especially considering that you may later upload your code on a public repo like Github. Instead, you want to keep these secret variables safe, and away from your code. Later in this post, I will show a practical example of how you can securely use environment variables to get around an example like this. 
      </ListItem>
      <ListItem>

Other examples of common configuration items that are often passed to the application through environment variables include third-party API keys, network ports, connection strings and urls, etc.
</ListItem>
      <ListItem>
      Defining variables that are re-used in several areas of your code, eliminating the need to define the variable each time you need it, because you define them once, and call then whenever you need them. This improves efficiency, limits errors and ensures you do not repeat yourself.
      </ListItem>
      </Paragraph>
   
      <SubHeading id={content[1]}>How to Define Environment Variables</SubHeading>
      <Paragraph>
      You can think of environment variables as a dictionary, where the key is the variable name and the value is the variable value. Setting the variables vary between operating systems. For example:
      </Paragraph>
      <Paragraph>
      On Mac terminal Bash:
      </Paragraph>
      <Paragraph>
      <CodeInline language = "bash">
        {` ~ export DB_PASSWORD=password123`}
      </CodeInline>   
      </Paragraph>
      <Paragraph>
      On Windows CMD:
      </Paragraph>
      <Paragraph>
      <CodeInline language = "bash">
        {` ~ set DB_PASSWORD=password123`}
      </CodeInline>   
      </Paragraph>
      <Paragraph>
      In your python program, you can set environment variables like so. (Note that you really should not do this, as it defeats the purpose of keeping the environment variables secure)
      </Paragraph>

      <Code language = "py">
        {`import os
os.environ[DB_PASSWORD] = password123`}
      </Code>   


      <SubHeading id={content[2]}>Using the Environment Variables</SubHeading>
      <Paragraph>
      To set and use the environment variables within your python code, we can use the os module. We can call the environ property to get the value of a particular variable, provided we know the name of the variable.</Paragraph> 
      
      <Code language = "py">
        {`import os

# This will print out a dictionary of all variables and their values
print(os.environ)

# This will print out the value of the specific variable passed
password =os.environ['DB_PASSWORD']

# The method above will lead to a breaking error (KeyError) at run time if the environment variable is not present. If you want to avoid that,and get a None value returned if the variable does not exist, you can use the get method shown below

password = os.environ.get('DB_PASSWORD')

# You can also use the getenv method to achieve the same thing.
password = os.getenv('DB_PASSWORD')
        `}
      </Code>   


      <SubHeading id={content[3]}>Using .env files</SubHeading>
      <Paragraph>
      The most efficient way and perhaps the best practice for when working with python is to use a .env file. A .env file is a text file that stores all your environment variables in one place and makes it easy for you to retrieve them any time. Using a .env file also helps you avoid the differences between the different platforms in handling environment variables. 
      </Paragraph>

      <Paragraph>
      To create a .env file, create a new file in your code editor and name it .env, without any extension. This is the same approach and format across all operating systems. You can then define a variable per line as show below:
      </Paragraph>

      <Code language = "py">
        {`DB_PASSWORD=password123
DB_URL=sqlite:///mydb.sqlite`}
      </Code>   

      <Paragraph>
      To use these variables within your python code, you will need to install a library called python-dotenv. In your terminal run the code below:
      </Paragraph>

      <Paragraph>
      <CodeInline language = "bash">
        {` ~ pip install python-dotenv`}
      </CodeInline>   
      </Paragraph>

      <Paragraph>
      Within your python main file in your project root, you can then call a load_dotenv function that will load the .env file automatically if the .env file is within the root too. Note that you would have to provide the path to the .env file if it is not within the root of your project.
      </Paragraph>
      <Paragraph>
      To call the environment variables, you have to initialize the load_dotenv method from the dotenv library. Then you can access the variables you created in the .env file using the os module as shown below.
      </Paragraph>

      <Code language = "py">
        {`import os
from dotenv import load_dotenv
load_dotenv()
password = os.environ.get('DB_PASSWORD')`}
      </Code>  

      <Paragraph>
      While working with .env files, you would typically store secret variables such as database credentials, API Keys and Secrets, etc. It is important that the .env file is not shared with the public, or with your version control (git, github). To avoid mistakenly sharing the .env file on a public git repository, the standard practice is to have a .gitignore file in your project root, and add .env within the .gitignore file, which will then be ignored by version control.
      </Paragraph>
      <SubHeading id={content[4]}>Conclusion</SubHeading>
      <Paragraph>
      In this article, we have walked through what an environment variable is, why it is important when developing modular python projects, and how to create and consume them. We have also walked through the best practice in handling environment variables by using a .env file and python-dotenv library.
</Paragraph>
<Paragraph>
  Edit this article on <InlineLink link = {"https://github.com/stephensanwo/stephensanwodev-client/blob/master/src/blog/posts/Post_10.jsx"}>Github</InlineLink>
</Paragraph>

    </Fragment>
  );
};

export default Post_10;
