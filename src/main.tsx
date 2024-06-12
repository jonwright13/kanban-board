import React from "react";
import ReactDOM from "react-dom/client";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./types/types";
import "./index.css";

const todos: ToDo[] = [
  {
    id: 1,
    title: "get milk",
    status: "to-do",
  },
  {
    id: 2,
    title: "Exmpty bins",
    status: "to-do",
  },
  {
    id: 3,
    title: "Buy lunch",
    status: "to-do",
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToDoList todos={todos} />
  </React.StrictMode>
);
