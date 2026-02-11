import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tanstackform from "../components/Tanstackform";

describe("Tanstack form component", () => {
  test("renders all input fields and submit button", () => {
    render(<Tanstackform />);

    expect(screen.getByPlaceholderText(/enter name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/enter your age/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("check if input fields are empty", () => {
    render(<Tanstackform />);
    expect(screen.getByLabelText(/name/i)).toHaveValue("");
    expect(screen.getByLabelText(/email/i)).toHaveValue("");
    expect(screen.getByLabelText(/age/i)).toHaveValue("");
  });

  test("submit form shows alert and clear inputs", () => {});
});
