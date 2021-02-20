import { renderHook } from "@testing-library/react-hooks";
import useFetchApi from "./useFetchApi";
import mockResponse from "../mock/listHotel.json";

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockResponse),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("should increment counter", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetchApi("default")
  );

  expect(result.current.error).toBe(null);
  expect(result.current.isLoading).toBe(true);
  expect(result.current.items).toStrictEqual([]);

  await waitForNextUpdate();

  expect(result.current.error).toBe(null);
  expect(result.current.isLoading).toBe(false);
  expect(result.current.items[0].name).toBe(mockResponse.hotels[0].name);
});
