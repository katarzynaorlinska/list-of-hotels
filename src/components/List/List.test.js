import { create, act } from "react-test-renderer";
import mockResponse from "../../mock/listHotel.json";
import List from "./index";

jest.mock("../Item", () => () => "Item");
jest.mock("../../hooks/useSearch", () => () => ({
  setSearch: () => jest.fn(),
  searchResults: mockResponse.hotels,
}));

test("renders correctly", () => {
  let tree;
  act(() => {
    tree = create(<List items={mockResponse.hotels} />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
