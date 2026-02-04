import type { EmployeeFormValidation } from "../schemas/formSchema";

export const fetchEmployees = async (): Promise<EmployeeFormValidation[]> => {
  const data = localStorage.getItem("employees");
  return data ? JSON.parse(data) : [];
};

export const addEmployee = async (employee: EmployeeFormValidation) => {
  const existing = JSON.parse(localStorage.getItem("employees") || "[]");
  const updated = [...existing, employee];
  localStorage.setItem("employees", JSON.stringify(updated));
  return employee;
};

export const updateEmployee = async (employee: EmployeeFormValidation) => {
  const existing = JSON.parse(localStorage.getItem("employees") || "[]");
  const updated = existing.map((e: EmployeeFormValidation) =>
    e.id === employee.id ? employee : e,
  );
  localStorage.setItem("employees", JSON.stringify(updated));
  return employee;
};

export const deleteEmployee = async (id: string) => {
  const existing = JSON.parse(localStorage.getItem("employees") || "[]");
  const updated = existing.filter((e: EmployeeFormValidation) => e.id !== id);
  localStorage.setItem("employees", JSON.stringify(updated));
  return id;
};
