// import { useQuery } from "@tanstack/react-query";
// import { fetchEmployees } from "../components/employeeApi";
// import { useNavigate } from "@tanstack/react-router";

// const EmployeeTable = () => {
//   const navigate = useNavigate();
//   const { data: employees = [], isLoading } = useQuery({
//     queryKey: ["employees"],
//     queryFn: fetchEmployees,
//   });

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Employee Table</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border border-gray-200">
//           <thead className="bg-linear-to-r from-indigo-600 to-blue-600 text-white">
//             <tr>
//               <th className="border px-4 py-2">ID</th>
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Email</th>
//               <th className="border px-4 py-2">Phone</th>
//               <th className="border px-4 py-2">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr
//                 key={emp.id}
//                 className="text-center cursor-pointer"
//                 onClick={() => navigate({ to: `/profile/${emp.id}` })}
//               >
//                 <td className="border px-4 py-2">{emp.id}</td>
//                 <td className="border px-4 py-2">{emp.name}</td>
//                 <td className="border px-4 py-2">{emp.email}</td>
//                 <td className="border px-4 py-2">{emp.phone}</td>
//                 <td className="border px-4 py-2">{emp.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };
// export default EmployeeTable;

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../components/employeeApi";
import { useNavigate } from "@tanstack/react-router";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";
import type { SortingState } from "@tanstack/react-table";

type Employee = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
};

const EmployeeTableTanStack = () => {
  const navigate = useNavigate();
  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const data = useMemo<Employee[]>(() => employees, [employees]);

  const columns = useMemo(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "name", header: "Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "phone", header: "Phone" },
      { accessorKey: "role", header: "Role" },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, globalFilter: filtering },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  if (isLoading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Search employees..."
          className="w-full sm:w-64 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-400 transition"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Employee Directory
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-400 text-black sticky top-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-sm font-medium tracking-wider uppercase cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {header.column.getIsSorted() === "asc" ? (
                        <IoArrowUpOutline />
                      ) : header.column.getIsSorted() === "desc" ? (
                        <IoArrowDownOutline />
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`cursor-pointer transition-colors ${
                  i % 2 === 0
                    ? "bg-white hover:bg-gray-50"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => navigate({ to: `/profile/${row.original.id}` })}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-6 py-4 text-sm text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center items-center gap-3 py-6">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 text-sm font-medium rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition"
        >
          ⏮ First
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 text-sm font-medium rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition"
        >
          ◀ Previous
        </button>
        <span className="text-sm text-gray-600">
          Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
          <strong>{table.getPageCount()}</strong>
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 text-sm font-medium rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition"
        >
          Next ▶
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 text-sm font-medium rounded-lg border bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition"
        >
          Last ⏭
        </button>
      </div>
    </div>
  );
};

export default EmployeeTableTanStack;
