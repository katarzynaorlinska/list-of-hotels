import { create, act } from "react-test-renderer";
import mockResponse from "../../mock/listHotel.json";
import Hotel from "./index";

jest.mock("react-router-dom", () => ({
  useParams: () => "useParams",
}));
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => "FontAwesomeIcon",
}));

test("renders correctly", () => {
  let tree;
  act(() => {
    tree = create(<Hotel items={mockResponse.hotels} />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
