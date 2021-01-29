import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoApp from "./components/TodoApp";

export default function Redux05() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
