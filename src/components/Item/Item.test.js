import { render } from "@testing-library/react";
import { create, act } from "react-test-renderer";
import mockResponse from "../../mock/listHotel.json";
import Item from "./index";

jest.mock("react-router-dom", () => ({
  Link: () => "Link",
}));

jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => "FontAwesomeIcon",
}));

test("Render active stars", () => {
  const { container } = render(<Item {...mockResponse.hotels[0]} />);
  expect(container.getElementsByClassName("list__content--active").length).toBe(
    4
  );
});

test("renders correctly", () => {
  let tree;
  act(() => {
    tree = create(<Item {...mockResponse.hotels[0]} />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
