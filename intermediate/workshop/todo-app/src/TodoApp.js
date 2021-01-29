import React from "react";
import TodoItem from "./components/TodoItem";

const TodoApp = ({ initialTodos }) => {
  return (
    <div>
      <h2>My ToDos</h2>
      <form>
        Add ToDo: <input type="text" />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {initialTodos.map((todo, index) => (
          <TodoItem key={todo.title} {...todo} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
