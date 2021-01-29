import React from "react";

const TodoItem = ({ title, done, index, toggleDone, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(index)}
        />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
      </label>{" "}
      <button onClick={() => deleteTodo(index)}>delete</button>
    </li>
  );
};

export default TodoItem;
