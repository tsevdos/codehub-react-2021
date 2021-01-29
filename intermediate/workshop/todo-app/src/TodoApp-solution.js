import React, { useState } from "react";
import TodoItemSolution from "./components/TodoItem-solution.js";

const TodoApp = ({ initialTodos }) => {
  const [toDoInput, setToDoInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const updateInput = (e) => {
    setToDoInput(e.target.value);
  };
  const addToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      title: toDoInput,
      done: false,
    };
    setToDoInput("");
    setTodos([...todos, newToDo]);
  };
  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };
  const deleteTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <div>
      <h2>My ToDos</h2>
      <form onSubmit={addToDo}>
        Add ToDo: <input type="text" value={toDoInput} onChange={updateInput} />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItemSolution
            key={todo.title}
            {...todo}
            index={index}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
