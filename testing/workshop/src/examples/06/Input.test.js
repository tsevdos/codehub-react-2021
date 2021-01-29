import { render, screen, cleanup } from "@testing-library/react";
import Input from "./Input";

describe("<Input>", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Input placeholder="" value="" />);
    const input = screen.getByTestId("input");
    screen.debug(input);

    // ...
  });

  xit("renders correctly the placeholder", () => {
    // ...
  });

  xit("renders correctly the value", () => {
    // ...
  });

  xit("has correct attributes", () => {
    // ...
  });
});
