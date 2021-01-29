const TodoItem = ({ title, done, index, toggleDone }) => (
  <li>
    <label>
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleDone(index)}
      />
      &nbsp;
      {done ? <strike>{title}</strike> : <span>{title}</span>}
    </label>
  </li>
);

const TodoApp = () => {
  const [state, setState] = React.useState({
    toDoInput: "",
    todos: [
      {
        title: "Learn React",
        done: false,
      },
      {
        title: "Go to Code.Hub",
        done: true,
      },
      {
        title: "Go out for a drink",
        done: false,
      },
    ],
  });

  const toggleDone = (index) => {
    const newTodos = [...state.todos];
    newTodos[index].done = !newTodos[index].done;

    setState({ ...state, todos: newTodos });
  };

  const updateInput = (event) => {
    setState({ ...state, toDoInput: event.target.value });
  };

  const addToDo = (e) => {
    e.preventDefault();
    const newToDo = {
      title: state.toDoInput,
      done: false,
    };
    const newTodos = [...state.todos, newToDo];

    setState({ ...state, todos: newTodos, toDoInput: "" });
  };

  const { todos, toDoInput } = state;

  return (
    <div>
      <h2>My ToDos</h2>
      <form onSubmit={addToDo}>
        Add ToDo: <input value={toDoInput} onChange={updateInput} type="text" />
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.title}
            {...todo}
            index={index}
            toggleDone={toggleDone}
          />
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<TodoApp />, document.getElementById("app"));
