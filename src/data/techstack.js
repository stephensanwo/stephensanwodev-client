import {
  Api24,
  MachineLearningModel24,
  DataBase24,
  TreeViewAlt24,
  Cloud24,
  Code24,
  Screen24,
  CalendarSettings24,
} from "@carbon/icons-react";

export const tech_stack = [
  {
    category: "Software Development",
    tools: [
      "Planning, ",
      "Strategy, ",
      "Software Architecture, ",
      "Database Modeling, ",
    ],
    logo: <CalendarSettings24 fill="#539bf5" />,
  },

  {
    category: "Programming Language",
    tools: ["Python, ", "JavaScript, ", "Go, ", "TypeScript"],
    logo: <Code24 fill="#539bf5" />,
  },
  {
    category: "APIs & Microservices",
    tools: [
      "Flask, ",
      "FastAPI, ",
      "Express, ",
      "NodeJs, ",
      "Go, ",
      "REST, ",
      "GraphQL, ",
      "Concurrency, ",
      "Events & Queues",
    ],
    logo: <Api24 fill="#539bf5" />,
  },
  {
    category: "Database, Storage & Caching",
    tools: [
      "MongoDB, ",
      "Redis, ",
      "SQL, ",
      "PostgresSQL, ",
      "DynamoDB, ",
      "AWS S3, ",
      "Redis-Queue",
    ],
    logo: <DataBase24 fill="#539bf5" />,
  },
  {
    category: "Web & Mobile Development",
    tools: ["React Js, ", "React Native, ", "HTML, ", "CSS, ", "Sketch"],
    logo: <Screen24 fill="#539bf5" />,
  },
  {
    category: "ML Development",
    tools: ["Tensorflow, ", "OpenCV"],
    logo: <MachineLearningModel24 fill="#539bf5" />,
  },
  {
    category: "DevOps & CI",
    tools: [
      "Docker, ",
      "Nginx, ",
      "uWSGI, ",
      "ASGI, ",
      "Github, ",
      "Git, ",
      "Bash",
    ],
    logo: <TreeViewAlt24 fill="#539bf5" />,
  },
  {
    category: "Cloud Native",
    tools: ["AWS, ", "MongoDB Atlas"],
    logo: <Cloud24 fill="#539bf5" />,
  },
];
