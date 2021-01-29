import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todosActions";

export default function TodoItem({ id, title, done }) {
  const dispatch = useDispatch();

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => dispatch(toggleTodo(id))}
        />
        &nbsp;
        {done ? <strike>{title}</strike> : <span>{title}</span>}
      </label>
    </li>
  );
}
