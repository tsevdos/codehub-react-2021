export const getTodos = () =>
  fetch("http://localhost:3001/todosy").then((res) => res.json());
