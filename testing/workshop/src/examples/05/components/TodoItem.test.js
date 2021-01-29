import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import TodoItem from "./TodoItem";

describe("<TodoItem>", () => {
  it("renders correctly", () => {
    render(
      <Provider store={store}>
        <TodoItem id={1} title="Master React" />
      </Provider>
    );
    const todo = screen.getByTestId("todo");

    expect(todo).toBeInTheDocument();
    expect(todo).toContainHTML("<span>Master React</span>");
  });

  it("strike through if is done", () => {
    render(
      <Provider store={store}>
        <TodoItem id={1} title="Master Redux" done />
      </Provider>
    );
    const todo = screen.getByTestId("todo");

    expect(todo).toBeInTheDocument();
    expect(todo).toContainHTML("<strike>Master Redux</strike>");
  });
});
