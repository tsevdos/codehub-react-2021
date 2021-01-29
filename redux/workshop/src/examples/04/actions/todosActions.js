import { ADD_TODO, TOGGLE_TODO } from "../constants/todosTypes";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
