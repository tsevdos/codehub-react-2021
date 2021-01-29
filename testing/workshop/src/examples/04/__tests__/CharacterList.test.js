import { render } from "@testing-library/react";
import CharacterList from "../CharacterList";

describe("<CharacterList />", () => {
  it("renders correctly with snapshot", () => {
    const { container } = render(<CharacterList />);

    expect(container).toMatchSnapshot();
  });
});
