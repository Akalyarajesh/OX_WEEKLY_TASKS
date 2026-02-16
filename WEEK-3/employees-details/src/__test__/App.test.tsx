import { describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("Checking component is render", () => {
  test("render or not", () => {
    render(<App />);
  });
});
