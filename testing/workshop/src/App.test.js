import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders correctly header text", () => {
  render(<App />);
  const header = screen.getByText(/React Testing/i);
  expect(header).toBeInTheDocument();
});
