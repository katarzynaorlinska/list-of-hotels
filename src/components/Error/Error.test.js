import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Error from "./index";

const message = "example message";

test("Render error message", () => {
  render(<Error message={message} />);
  const errorElement = screen.getByText(message);
  expect(errorElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const tree = renderer.create(<Error message={message} />).toJSON();
  expect(tree).toMatchSnapshot();
});
