import { renderHook, act } from "@testing-library/react-hooks";
import useSearch from "./useSearch";
import mockResponse from "../mock/listHotel.json";

test("check search behaviuor", async () => {
  const { result } = renderHook(() => useSearch(mockResponse.hotels));

  expect(result.current.searchResults).toBe(mockResponse.hotels);

  act(() => result.current.setSearch("Cfajka"));

  expect(result.current.searchResults).toStrictEqual([mockResponse.hotels[0]]);
});
