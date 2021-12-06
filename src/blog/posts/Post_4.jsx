import React, { Fragment } from "react";
import SubHeading from "../components/SubHeading";
import Paragraph from "../components/Paragraph";


const Post_4 = ({content}) => {
  return (
    <Fragment>
      <SubHeading id={content[0]}>Introduction</SubHeading>
      <Paragraph>
      Yes!, there is a coding tutorial purgatory, and many devs and data science enthusiasts are caught up in that cycle, a cycle of learning how to code but not being able to do anything tangible with what you have learnt.
      </Paragraph>
      <Paragraph>
      This is one of the reasons I started my blog, because I noticed that there are a lot of tutorials out there that focus on the basics, of programming, but not a lot of information on how to get you from those basics to building actual real life projects and solving real problems. 
      </Paragraph>
      


      <SubHeading id={content[1]}>The Problem</SubHeading>
      <Paragraph>
      First let’s understand what the tutorial purgatory is with an example some people may be familiar with.
      </Paragraph>
      <Paragraph>
      What does this mean? When you activate a virtual environment for your project, your project essentially becomes its own self contained application, independent of the system installed python and its modules. Your new virtual environment has its own pip to install libraries, its own library folder, where new libraries are added, its own python interpreter for the python version you used to activate the environment.
      </Paragraph>

      <Paragraph>
      You have made up your mind to learn to code, perhaps you plan to use this for some advanced analytics, build ML models to create intelligent solutions to problems within a space or industry, or you want to dive into software development, and build software, web apps, or even a website or blog. (If you have not properly articulated why you want to learn to code, you need to do that)
      </Paragraph>

    <Paragraph>
    One of the first things you do is to go online to do some research on BASIC Python or attend a beginners bootcamp or perhaps you get someone to teach you some BASICS, the emphasis here is on basics.
    </Paragraph>

    <Paragraph>
    Let’s assume you go with the online learning option on YouTube of coursera, you find a basic Python tutorial that has high ratings, and you start it, you learn basic stuff like defining a variable, learn how to define a function, printing your code results, etc. it seems cool, but not fun, and most importantly can get really boring very quickly for beginners, and you still can’t build an app or an ML model, then along the line, you take a break from learning, and after a couple of weeks, you come back to your basics, and find out you have forgotten how to define a function, then you watch the video again to re learn the basic steps and this cycle continues, without you actually achieving anything, and your resumee keeps saying “ML Enthusiast”.
    </Paragraph>

    <Paragraph>
    Now, this is the first hurdle most people will face, a lot of people get stuck in learning the basics over and over again, without using that basics to work on real projects, the problem with this is that you will easily forget what you’ve learnt and keep having to re watch your basics tutorial over and over again. Some people jump from one basics tutorial to the other without actually trying to build projects, the key issue here is that the basics can only teach you the fundamentals of the language and will not likely cover all the details needed to build real world projects.
    </Paragraph>

      <SubHeading id={content[2]}>Building Projects</SubHeading>
      <Paragraph>
      Now how can you overcome this? Pretty simple, what I found that works for me when learning a language or framework is to not spend too much time learning the basics, find a very good course on the basics ensure that you have covered the fundamentals of the language and move on to building projects, you can search project based tutorials where you actually build sample projects and follow through the steps, this is a very good way to instill the fundamentals you just learnt.</Paragraph> 
      
      <Paragraph>You will forget some basic stuff you learnt, and that’s okay, but the fact that you’ve covered it and you know where to easily go for reference when you need to remember something about the basics. There are a lot of times I Google how to do basic things in Python or JavaScript, while working on projects, and that’s okay. Understanding how the language works and the syntax will help you understand the results suggested by Google or Stackoverflow, and you can easily use those results in your projects.
      </Paragraph>

    <Paragraph>
    Developers sometimes make jokes about how they just copy and paste code from Stackoverflow, but the real truth is that they somehow know what to copy and where to paste it within their projects, because they understand the syntax and other key factors which we will cover shortly.  
      </Paragraph>

      <SubHeading id={content[3]}>Going Beyond Language Syntax</SubHeading>
      <Paragraph>
      One critical pitfall that gets people frustrated is the assumption that after learning the basics of a language you should be able to just build stuff. This is wrong in most cases except you are learning html and css. For a language like Python or Go there is a lot more studying you will need to do beyond the basics. 
      </Paragraph>

      <Paragraph>
      If you want to build  application backend in Python for example, you will have to read the documentation on a library like flask, understand how to implement it, understand the basics about APIs, databases etc and the various components required to build an api, many of this will take you outside just the basic language syntax, into several topics around web development or the specific area you are working on. It is important to note that understanding the basics of a language alone will not get you to a point where you can build complex projects.
      </Paragraph>

  
      <SubHeading id={content[4]}>Information Overload</SubHeading>
      <Paragraph>
      So now, you want to build an app, the next billion dollar unicorn 🌚, or you want to build a machine learning model to rival GPT-3 🌚. You search for a tutorial on how to build an app, then you find a million and one resources and you get overwhelmed. This is another issue people face when trying to advance from the basics. 
</Paragraph>



<Paragraph>
With the basics, it’s easy to find one good tutorial and stick to it, but when trying to build actual real world projects, you will soon find out that there Is an overwhelming number of options to choose from and it can get confusing really fast.
</Paragraph>

<Paragraph>
Take for example, you have learnt the basics of JavaScript and you have built simple projects and are ready to build more complex projects,  you will soon find out that there is a ton of JavaScript frameworks, there is now a confusion on whether to use React or Vue or Angular or Svelte or the million other frameworks, or you have been learning Python and you are stuck between learning flask or django or fastapi. 
</Paragraph>

<Paragraph>
There is really no easy way out of information overload, because as long as you are connected to the internet, you will keep getting that new tutorial newsletter, or youtube recommendation etc. What is required is a commitment to focus on one project at a time and get as much information as you need to complete that project, and resist the urge to just check out every new tutorial that is recommended to you.
</Paragraph>

<SubHeading id={content[5]}>Focus on Problem Solving</SubHeading>


<Paragraph>
My advice really is that beginners should focus more on the problem solving than on syntax or frameworks, you will never know every syntax of a language, and as long as you understand the basic concepts, you can always google stuff. For Frameworks, my advice is really to pick up an easy one for a start, i.e. Vue with JavaScript for Frontend Development, or FastAPI with Python for Backend Development, and as you progress, you will soon realise what works for you and what doesn't, and you can always switch to some other framework along the line.</Paragraph>

    </Fragment>
  );
};

export default Post_4;
