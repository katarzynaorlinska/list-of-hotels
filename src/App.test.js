import { render, screen } from "@testing-library/react";
import App from "./App";

test("app is not crashing", () => {
  render(<App />);
});
