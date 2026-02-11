import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  test("app component is rendering", () => {
    render(<App />);
  });
});
