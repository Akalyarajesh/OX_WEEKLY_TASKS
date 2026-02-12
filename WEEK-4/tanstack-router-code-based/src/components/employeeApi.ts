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

// employeeApi.tsx

// temprorary backend storage
// const employees: EmployeeFormValidation[] = [];

// export const fetchEmployees = async (): Promise<EmployeeFormValidation[]> => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(employees), 200);
//   });
// };

// export const addEmployee = async (
//   employee: EmployeeFormValidation,
// ): Promise<EmployeeFormValidation> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       employees.push(employee);
//       resolve(employee);
//     }, 200);
//   });
// };

// // /* UPDATE EMPLOYEE */
// export const updateEmployee = async (
//   updatedEmployee: EmployeeFormValidation,
// ): Promise<EmployeeFormValidation> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const index = employees.findIndex((emp) => emp.id === updatedEmployee.id);

//       if (index === -1) {
//         reject("Employee not found");
//         return;
//       }

//       employees[index] = updatedEmployee;
//       resolve(updatedEmployee);
//     }, 200);
//   });
// };

// // /*  DELETE EMPLOYEE */
// export const deleteEmployee = async (id: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const index = employees.findIndex((emp) => emp.id === id);

//       if (index === -1) {
//         reject("Employee not found");
//         return;
//       }

//       employees.splice(index, 1);
//       resolve(id);
//     }, 200);
//   });
// };
