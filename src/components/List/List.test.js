import { create } from "react-test-renderer";
import mockResponse from "../../mock/listHotel.json";
import List from "./index";

jest.mock("../Item", () => () => "Item");
jest.mock("../../hooks/useSearch", () => () => ({
  setSearch: () => jest.fn(),
  searchResults: mockResponse.hotels,
}));

test("renders correctly", () => {
  const tree = create(<List items={mockResponse.hotels} />).toJSON();
  expect(tree).toMatchSnapshot();
});
