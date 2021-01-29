import { combineReducers } from "redux";
import TodosReducer from "./TodosReducer";
import InputReducer from "./InputReducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
  input: InputReducer,
});

export default rootReducer;
