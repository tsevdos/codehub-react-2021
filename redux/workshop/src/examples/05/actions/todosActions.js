import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from "../constants/todosTypes";
import { getTodos } from "../api/todos";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

const fetchTodosPending = () => ({
  type: FETCH_TODOS_PENDING,
});

const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

const fetchTodosError = () => ({
  type: FETCH_TODOS_ERROR,
});

export const fetchTodos = () => (dispatch, getState) => {
  dispatch(fetchTodosPending());

  getTodos()
    .then((todos) => {
      dispatch(fetchTodosSuccess(todos));
    })
    .catch((e) => {
      console.log("DEN pernaei", e);
      dispatch(fetchTodosError());
    });
};
