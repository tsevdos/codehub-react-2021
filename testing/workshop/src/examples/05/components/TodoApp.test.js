import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import TodoApp from "./TodoApp";

describe("<TodoApp>", () => {
  it("renders correctly the title", () => {
    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const title = screen.getByText(/my todos/i);

    expect(title).toBeInTheDocument();
    expect(title).toContainHTML("My ToDos");
  });

  it("renders correctly initial state", () => {
    const { container } = render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const items = container.querySelectorAll("li");

    expect(items.length).toBe(3);
    expect(container).toContainHTML("Learn React");
    expect(container).toContainHTML("Go to Code.Hub");
    expect(container).toContainHTML("Go out for a drink");
  });

  it("correctly changes the input value", () => {
    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const input = screen.getByTestId("addTodo");
    fireEvent.change(input, { target: { value: "My new Todo" } });

    expect(input).toHaveValue("My new Todo");
  });

  it("runs correctly the adds a ToDo item", () => {
    render(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
    const input = screen.getByTestId("addTodo");
    fireEvent.change(input, { target: { value: "My new Todo" } });
    const form = screen.getByTestId("form");
    fireEvent.submit(form);
    const newTodo = screen.getByText(/my new todo/i);

    expect(newTodo).toBeInTheDocument();
    expect(newTodo).toContainHTML("My new Todo");
  });
});
