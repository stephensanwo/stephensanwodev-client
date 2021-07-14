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
    logo: <CalendarSettings24 fill="#05aa82" />,
  },

  {
    category: "Programming Language",
    tools: ["Python, ", "JavaScript, ", "Go, ", "TypeScript"],
    logo: <Code24 fill="#05aa82" />,
  },
  {
    category: "Distributed Software, APIs & Microservices",
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
    logo: <Api24 fill="#05aa82" />,
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
    logo: <DataBase24 fill="#05aa82" />,
  },
  {
    category: "Web & Mobile Development",
    tools: ["React Js, ", "React Native, ", "HTML, ", "CSS, ", "Sketch"],
    logo: <Screen24 fill="#05aa82" />,
  },
  {
    category: "AI & ML Development/Ops",
    tools: ["Tensorflow, ", "OpenCV"],
    logo: <MachineLearningModel24 fill="#05aa82" />,
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
    logo: <TreeViewAlt24 fill="#05aa82" />,
  },
  {
    category: "Cloud",
    tools: ["AWS, ", "MongoDB Atlas"],
    logo: <Cloud24 fill="#05aa82" />,
  },
];
