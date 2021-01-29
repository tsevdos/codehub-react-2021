import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../constants/todosTypes";

const initialState = [
  {
    id: 1,
    title: "Learn React",
    done: false,
  },
  {
    id: 2,
    title: "Go to Code.Hub",
    done: true,
  },
  {
    id: 3,
    title: "Go out for a drink",
    done: false,
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return [...state, payload];
    case TOGGLE_TODO: {
      const newState = state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });

      return [...newState];
    }
    case DELETE_TODO: {
      const newState = state.filter((todo) => {
        if (todo.id !== payload) {
          return todo;
        }

        return false;
      });

      return [...newState];
    }
    default:
      return state;
  }
};
