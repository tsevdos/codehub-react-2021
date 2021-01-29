import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./TodoApp";

const initialTodos = [
  {
    title: "Learn React",
    done: false,
  },
  {
    title: "Go to Code.Hub",
    done: true,
  },
  {
    title: "Go out for a drink",
    done: false,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <TodoApp initialTodos={initialTodos} />
  </React.StrictMode>,
  document.getElementById("root")
);
