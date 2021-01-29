import { render, screen, fireEvent } from "@testing-library/react";
import CharacterList from "../CharacterList";

describe("<CharacterList />", () => {
  it("renders correctly title", () => {
    render(<CharacterList />);

    // screen.debug();

    const header = screen.getByText(/my title/i);
    expect(header).toBeInTheDocument();
  });

  xit("renders correctly the entries", () => {
    const { container } = render(<CharacterList />);
    const mainHeader = container.querySelectorAll("h1").length;
    const numberOfEntries = container.querySelectorAll(".entry").length;
    const numberOfTitles = container.querySelectorAll("h2").length;
    const numberOfBtns = container.querySelectorAll("button").length;

    // screen.debug(container);
    expect(mainHeader).toBe(1);
    expect(numberOfEntries).toBe(3);
    expect(numberOfTitles).toBe(3);
    expect(numberOfBtns).toBe(3);
  });

  xit("renders correctly the names", () => {
    const { container } = render(<CharacterList />);

    // screen.debug(container);
    expect(container).toContainHTML("<h2>John Tsevdos</h2>");
    expect(container).toContainHTML("<h2>Patricia Lebsack</h2>");
    expect(container).toContainHTML("<h2>Dennis Schulist</h2>");
  });

  xit("list item can be clicked twice", () => {
    const mockFn = jest.fn();
    render(<CharacterList onSelect={mockFn} />);
    const editBtn = screen.getByText("edit John Tsevdos");

    // screen.debug(editBtn);
    fireEvent.click(editBtn);
    fireEvent.click(editBtn);

    expect(mockFn.mock.calls.length).toBe(2);
  });
});
