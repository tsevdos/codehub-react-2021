import {
  ADD_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_PENDING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from "../constants/todosTypes";

const initialState = {
  isLoading: null,
  hasError: false,
  items: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO: {
      const items = [...state.items, payload];
      return { ...state, items };
    }
    case TOGGLE_TODO: {
      const items = state.items.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });

      return { ...state, items };
    }
    case FETCH_TODOS_PENDING:
      return { ...state, isLoading: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, items: payload, isLoading: false };
    case FETCH_TODOS_ERROR:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};
