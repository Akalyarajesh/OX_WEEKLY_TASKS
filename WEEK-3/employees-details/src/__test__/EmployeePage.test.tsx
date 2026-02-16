import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmployeePage from "../pages/EmployeePage";


describe("EmployeePage", () => {
  test("renders form fields", () => {
    render(<EmployeePage/>);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/qualification/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
  });

  test("add a new employee", async () => {
    const user = userEvent.setup();
    render(<EmployeePage />);
    await user.type(screen.getByLabelText(/full name/i), "Akalya");
    await user.type(screen.getByLabelText(/phone number/i), "9876543210");
    await user.type(screen.getByLabelText(/qualification/i), "B.Tech");
    await user.type(screen.getByLabelText(/role/i), "Developer");

    await user.click(screen.getByRole("button", { name: /add employee/i }));

    expect(screen.getByText("Akalya")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  test("edits an existing employee", async () => {
    const user = userEvent.setup();
    render(<EmployeePage />);

    // Add Employee
    await user.type(screen.getByLabelText(/full name/i), "Akalya");
    await user.type(screen.getByLabelText(/phone number/i), "9876543210");
    await user.type(screen.getByLabelText(/qualification/i), "B.Tech");
    await user.type(screen.getByLabelText(/role/i), "Developer");

    await user.click(screen.getByRole("button", { name: /add employee/i }));

    // click edit
    await user.click(screen.getByText("✎"));

    const nameInput = screen.getByLabelText(/full name/i);
    await user.clear(nameInput);
    await user.type(nameInput, "Akalya Updated");

    await user.click(screen.getByRole("button", { name: /update employee/i }));

    expect(screen.getByText("Akalya Updated")).toBeInTheDocument();
  });

  test("delete an employee", async () => {
    const user = userEvent.setup();
    render(<EmployeePage />);

    await user.type(screen.getByLabelText(/full name/i), "Mark");
    await user.type(screen.getByLabelText(/phone number/i), "8888888888");
    await user.type(screen.getByLabelText(/qualification/i), "MCA");
    await user.type(screen.getByLabelText(/role/i), "Tester");

    await user.click(screen.getByRole("button", { name: /add employee/i }));

    expect(screen.getByText("Mark")).toBeInTheDocument();

    await user.click(screen.getByText("×"));

    expect(screen.queryByText("Mark")).not.toBeInTheDocument();
  });

  test("shows alert if fields are empty", async () => {
    const user = userEvent.setup();
    render(<EmployeePage />);

    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    await user.click(screen.getByRole("button", { name: /add employee/i }));

    expect(alertMock).toHaveBeenCalledWith("Please fill all fields");

    alertMock.mockRestore();
  });
});
