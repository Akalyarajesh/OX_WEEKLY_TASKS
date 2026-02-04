import { render, screen, fireEvent } from "@testing-library/react";
import Register from "../components/Register";

describe("Register Component", () => {
  describe("Checking page is rendered", () => {
    test("Checking page rendered", () => {
      render(<Register />);
    });
  });

  describe("Checking Label Names", () => {
    test("label names", () => {
      render(<Register />);

      const inputs = screen.getAllByLabelText(
        /Full Name|Username|Male|Female|password|confirm Password/i,
      );
      expect(inputs.length).toBe(6);
    });
  });

  describe("Check form is Empty", () => {
    test("checking Form Empty or not", async () => {
      render(<Register />);

      fireEvent.click(screen.getByRole("button", { name: /Register/i }));

      const errorMessage = await screen.findByText(/all fields are required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
  test("password checking", () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "rajesh" },
    });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "rajeshakalya" },
    });

    // Male already selected by default
    //   expect(screen.getByLabelText(/male/i)).toBeChecked();

    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: "12345" },
    });

    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: "56789" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });

  // describe("Show error when password is not match", () => {
  //   test("password checking", () => {
  //     render(<Register />);

  //     fireEvent.change(screen.getByLabelText(/Full Name/i), {
  //       target: { value: "rajesh" },
  //     });

  //     fireEvent.change(screen.getByLabelText(/Username/i), {
  //       target: { value: "rajeshakalya" },
  //     });

  //     // fireEvent.change(screen.getByText(/male/i));
  //     // fireEvent.click(screen.getByLabelText(/male/i));
  //     // fireEvent.click(screen.getByRole("radio", { name: "male" }));
  //     // expect(screen.getByLabelText(/male/i)).toBeChecked();
  //     // expect(screen.getByRole("radio", { name: /male/i })).toBeChecked();
  //     // expect(screen.getByRole("radio", { name: /^male$/i })).toBeChecked();
  //     fireEvent.click(screen.getByLabelText("Male"));

  //     expect(screen.getByLabelText("Male")).toBeChecked();

  //     fireEvent.change(screen.getByLabelText(/password/i), {
  //       target: { value: "12345" },
  //     });

  //     fireEvent.change(screen.getByLabelText(/Confirm Password/i), {
  //       target: { value: "56789 " },
  //     });

  //     fireEvent.click(screen.getByRole("button", { name: /Register/i }));

  //     expect(screen.getByText(/password do not match/i)).toBeInTheDocument();
  //   });
  // });
});
/**import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Register from "./Register";

describe("Register Component", () => {
  it("renders all input fields", () => {
    render(<Register />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
    expect(screen.getByText(/female/i)).toBeInTheDocument();
  });

  it("shows error when submitting empty form", () => {
    render(<Register />);

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(
      screen.getByText(/all fields are required/i)
    ).toBeInTheDocument();
  });

  it("shows error when passwords do not match", () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "john123" },
    });

    fireEvent.click(screen.getByLabelText(/male/i));

    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: "123456" },
    });

    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: "654321" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(
      screen.getByText(/passwords do not match/i)
    ).toBeInTheDocument();
  });

  it("submits form successfully when all fields are valid", () => {
    render(<Register />);

    fireEvent.change(screen.getByLabelText(/full name/i), {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "john123" },
    });

    fireEvent.click(screen.getByLabelText(/female/i));

    fireEvent.change(screen.getByLabelText(/^password$/i), {
      target: { value: "123456" },
    });

    fireEvent.change(screen.getByLabelText(/confirm password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(
      screen.queryByText(/all fields are required/i)
    ).not.toBeInTheDocument();

    expect(
      screen.queryByText(/passwords do not match/i)
    ).not.toBeInTheDocument();
  });
});
 */
