import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  test("testing it should render or not", () => {
    render(<App />);
    // screen.debug(undefined, 1000000);
  });

  test("testing app name prop", () => {
    render(<App name="learn testing in react" />);
    const heading = screen.getByText("learn testing in react");
    // screen.debug(undefined, 10000000);
    expect(heading).toBeDefined();
  });

  // testing interactivity

  test("increment th count on button click", async () => {
    render(<App />);
    const initialCount = screen.getByRole("heading", { name: "0" });
    expect(initialCount).toBeDefined();
    const button = screen.getByRole("button", { name: "Increment" });
    expect(button).toBeDefined();
    // fireEvent.click(button);
    await userEvent.click(button);
    const updatedCount = screen.findByRole("heading", { name: "1" });
    expect(updatedCount).toBeDefined();
  });

  test("test the fetching data", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      json: async () => ({ username: "AkalyaR" }),
    } as Response);

    render(<App />);
    const button = screen.getByRole("button", { name: "Fetch users" });
    expect(button).toBeDefined();
    await userEvent.click(button);
    const userName = await screen.findByRole("heading", {
      name: "AkalyaR",
    });
    expect(userName).toBeDefined();
  });
});
