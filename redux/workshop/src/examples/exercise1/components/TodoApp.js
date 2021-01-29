import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions/todosActions";
import { updateInput } from "../actions/inputActions";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const { todos, input } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToDo = (e) => {
    e.preventDefault();
    const todo = { id: todos.length + 1, title: input, done: false };

    dispatch(addTodo(todo));
  };

  return (
    <div>
      <h2>My ToDos</h2>
      <hr />
      <form onSubmit={addToDo}>
        Add ToDo:{" "}
        <input
          value={input}
          onChange={(e) => dispatch(updateInput(e.target.value))}
          type="text"
        />
        <button type="submit">Add ToDo</button>
      </form>
      <br />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
