import React from "react";

const TodoItem = ({ title, done }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
      </label>
    </li>
  );
};

export default TodoItem;
