import { create } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { useParams } from "react-router-dom";
import mockResponse from "../../mock/listHotel.json";
import Hotel from "./index";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
}));
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => "FontAwesomeIcon",
}));

test("renders no hotel if no hotel find", () => {
  useParams.mockImplementation(() => ({
    id: "10000000000",
  }));
  render(<Hotel items={mockResponse.hotels} />);
  const noHotel = screen.getByText("No hotel");
  expect(noHotel).toBeInTheDocument();
});

test("renders correctly", () => {
  useParams.mockImplementation(() => ({
    id: "12321",
  }));
  const tree = create(<Hotel items={mockResponse.hotels} />).toJSON();
  expect(tree).toMatchSnapshot();
});
