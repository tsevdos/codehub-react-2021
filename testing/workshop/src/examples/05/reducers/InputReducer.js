import { ADD_TODO } from "../constants/todosTypes";
import { UPDATE_INPUT } from "../constants/inputTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return "";
    case UPDATE_INPUT:
      return payload;
    default:
      return state;
  }
};
