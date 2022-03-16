import { LogoPython16, Code16, Sql16, DataBase16 } from "@carbon/icons-react";

export const code_categories_small = [
  {
    id: 0,
    title: "All Code Snippets",
    logo: <Code16 fill="#addec9" />,
  },
  {
    id: 1,
    title: "Python",
    logo: <LogoPython16 fill="#addec9" />,
  },
  {
    id: 2,
    title: "JavaScript",
    logo: <Code16 fill="#addec9" />,
  },
  { id: 3, title: "Tensorflow", logo: <Code16 fill="#addec9" /> },
  {
    id: 4,
    title: "Redis",
    logo: <Code16 fill="#addec9" />,
  },
  {
    id: 5,
    title: "Go",
    logo: <Code16 fill="#addec9" />,
  },
  { id: 6, title: "MongoDB", logo: <DataBase16 fill="#addec9" /> },
  { id: 7, title: "SQL", logo: <Sql16 fill="#addec9" /> },
  {
    id: 8,
    title: "React",
    logo: <Code16 fill="#addec9" />,
  },
];

export const code_data = [
  {
    code_id: "1",
    title: "Object Oriented Programming Examples I",
    category: "Python",
    desc: "In this tutorial, which is the first of the Object Oriented Programming Series, I will explain in detail what OOP is, why you should use it in your software development projects. Note that we will be using PseudoCode to explain the concepts in this part I, this is important for us to learn the concepts before going into writing code. If you are familiar with the basic concepts, please skip to Part II",
    tags: ["Python", "OOP"],
    author: "Stephen Sanwo",
    date: "2020-June-20",
  },
  {
    code_id: "2",
    title: "Object Oriented Programming Examples II",
    category: "JavaScript",
    desc: "In this tutorial, which is the first of the Object Oriented Programming Series, I will explain in detail what OOP is, why you should use it in your software development projects. Note that we will be using PseudoCode to explain the concepts in this part I, this is important for us to learn the concepts before going into writing code. If you are familiar with the basic concepts, please skip to Part II",
    tags: ["JavaScript"],
    date: "2020-June-20",
    author: "Stephen Sanwo",
  },
];
