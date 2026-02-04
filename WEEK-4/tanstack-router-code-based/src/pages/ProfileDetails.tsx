// import { useLoaderData } from "@tanstack/react-router";

// const ProfileDetails = () => {
//   const employee = useLoaderData({
//     from: "/profile/$id",
//   });

//   return (
//     <div className=" bg-gray-100 flex items-center justify-center p-6 mt-5">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6">
//         {/* Header */}
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//           {employee.name}
//         </h2>

//         {/* Details */}
//         <div className="space-y-4 text-gray-700">
//           <div className="flex justify-between border-b pb-2">
//             <span className="font-semibold">Employee ID</span>
//             <span>{employee.employeeId}</span>
//           </div>

//           <div className="flex justify-between border-b pb-2">
//             <span className="font-semibold">Position</span>
//             <span>{employee.role}</span>
//           </div>

//           <div className="flex justify-between">
//             <span className="font-semibold">Experience</span>
//             <span>
//               {employee.experience}{" "}
//               {employee.experience > 1 ? "Years" : "Year"}{" "}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDetails;

// import { Link, Outlet, useLoaderData } from "@tanstack/react-router";

// type Employee = {
//   id: string;
//   name: string;
//   role: string;
//   exp: string;
// };

// const Profile = () => {
//   const employees = useLoaderData({
//     from: "/profile",
//   }) as Employee[];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Employee Profiles</h1>

//       {/* grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {employees.map((emp) => (
//           <div
//             key={emp.id}
//             className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
//           >
//             <h2 className="text-lg font-semibold text-gray-800">
//               {emp.name}
//             </h2>

//             <p className="text-gray-500 mt-1">{emp.role}</p>

//             <Link
//               to="/profile/$id"
//               params={{ id: emp.id }}
//               className="inline-block mt-4 text-blue-600 font-medium hover:underline"
//             >
//               View Profile →
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* child route */}
//       <Outlet />
//     </div>
//   );
// };

// export default Profile;

// route
// const profileRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/profile",
//   loader: async () => {
//     const res = await fetch(
//       `https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard`,
//     );
//     if (!res.ok) {
//       throw new Error("Employee not found");
//     }
//     return res.json();
//   },
//   component: Profile,
// });

// const profileDetailRoute = createRoute({
//   getParentRoute: () => profileRoute,
//   path: "$id",
//   loader: async ({ params }) => {
//     const res = await fetch(
//       `https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard/${params.id}`,
//     );
//     if (!res.ok) {
//       throw new Error("Employee not found");
//     }
//     return res.json();
//   },
//   component: ProfileDetails,
// });
// profileRoute.addChildren([profileDetailRoute]),

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

/* UPDATE EMPLOYEE */
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

/*  DELETE EMPLOYEE */
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
