import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Loading from "./index";

test("Render loading page", () => {
  render(<Loading/>);
  const loadingElement = screen.getByText("Loading...");
  expect(loadingElement).toBeInTheDocument();
});

test("renders correctly", () => {
  const tree = renderer.create(<Loading />).toJSON();
  expect(tree).toMatchSnapshot();
});
