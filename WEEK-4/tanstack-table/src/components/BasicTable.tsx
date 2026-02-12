import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import mData from "../MOCK_DATA.json";
import type { ColumnDef } from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
import { IoArrowUpOutline } from "react-icons/io5";
import { IoArrowDownOutline } from "react-icons/io5";

/**
 *   {
    "id": 1,
    "first_name": "Emyle",
    "last_name": "Pinard",
    "email": "epinard0@springer.com",
    "gender": "Female",
    "dob": "4/24/2025"
  },
 */

type Data = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  dob: string;
};

const BasicTable = () => {
  const data = useMemo<Data[]>(() => mData, []);

  const columns: ColumnDef<Data>[] = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    // {
    //   header: "Name",
    //   columns: [
    //     {
    //       header: "First",
    //       accessorKey: "first_name",
    //       footer: "First",
    //     },
    //     {
    //       header: "Last",
    //       accessorKey: "last_name",
    //       footer: "Last",
    //     },
    //   ],
    //   footer: "Name",
    // },
    // {
    //   header: "Name",
    //   accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    // },
    {
      header: "First name",
      accessorKey: "first_name",
      footer: "First name",
    },
    {
      header: "Last name",
      accessorKey: "last_name",
      footer: "Last name",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Gender",
      accessorKey: "gender",
      footer: "Gender",
    },
    {
      header: "Date of Birth",
      accessorKey: "dob",
      footer: "Date of Birth",
    },
  ];

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable<Data>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mb-4 flex justify-center">
        <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          placeholder="Search..."
          className="w-64 px-4 py-2 text-sm rounded-md border border-gray-300
      focus:outline-none focus:ring-2 focus:ring-gray-300
      focus:border-gray-400"
        />
      </div>
      {/* Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Person Information
          </h2>
          <p className="text-sm text-gray-500">List of registered people</p>
        </div>

        {/* Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            {/* TABLE HEAD */}
            <thead className="bg-gray-100 sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 border-b"
                    >
                      {header.isPlaceholder ? null : (
                        <div>
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
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            {/* TABLE BODY */}
            <tbody className="divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* TABLE FOOTER */}
            {/* <tfoot className="bg-gray-50 border-t">
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-600"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot> */}
          </table>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 py-6">
        <button
          onClick={() => table.setPageIndex(0)}
          className="px-4 py-2 text-sm font-medium rounded-md border
      bg-white text-gray-700
      hover:bg-gray-100 hover:text-gray-900
      focus:outline-none focus:ring-2 focus:ring-gray-300
      disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ⏮ First
        </button>

        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 text-sm font-medium rounded-md border
      bg-white text-gray-700
      hover:bg-gray-100 hover:text-gray-900
      focus:outline-none focus:ring-2 focus:ring-gray-300
      disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ◀ Previous
        </button>

        <span className="text-sm text-gray-600">
          Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of
          <strong>{table.getPageCount()}</strong>
        </span>

        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 text-sm font-medium rounded-md border
      bg-white text-gray-700
      hover:bg-gray-100 hover:text-gray-900
      focus:outline-none focus:ring-2 focus:ring-gray-300
      disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next ▶
        </button>

        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          className="px-4 py-2 text-sm font-medium rounded-md border
      bg-white text-gray-700
      hover:bg-gray-100 hover:text-gray-900
      focus:outline-none focus:ring-2 focus:ring-gray-300
      disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Last ⏭
        </button>
      </div>
    </div>
  );
};

export default BasicTable;

// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
//   getPaginationRowModel,
//   getSortedRowModel,
//   getFilteredRowModel,
//   type ColumnDef,
//   type SortingState,
// } from "@tanstack/react-table";
// import { useMemo, useState } from "react";
// import mData from "../MOCK_DATA.json";
// import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

// /* ---------------------------------- TYPES --------------------------------- */

// type Data = {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
//   gender: string;
//   dob: string;
// };

// /* -------------------------------- COMPONENT ------------------------------- */

// const BasicTable = () => {
//   const data = useMemo<Data[]>(() => mData, []);

//   const columns = useMemo<ColumnDef<Data>[]>(
//     () => [
//       {
//         header: "ID",
//         accessorKey: "id",
//       },
//       {
//         header: "First Name",
//         accessorKey: "first_name",
//       },
//       {
//         header: "Last Name",
//         accessorKey: "last_name",
//       },
//       {
//         header: "Email",
//         accessorKey: "email",
//       },
//       {
//         header: "Gender",
//         accessorKey: "gender",
//       },
//       {
//         header: "Date of Birth",
//         accessorKey: "dob",
//       },
//     ],
//     [],
//   );

//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [globalFilter, setGlobalFilter] = useState("");

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       sorting,
//       globalFilter,
//     },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setGlobalFilter,

//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//   });

//   /* ---------------------------------- JSX ---------------------------------- */

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* CARD */}
//       <div className="w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//         {/* HEADER */}
//         <div className="px-6 py-4 border-b bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">
//               Person Information
//             </h2>
//             <p className="text-sm text-gray-500">List of registered people</p>
//           </div>

//           <input
//             type="text"
//             value={globalFilter}
//             onChange={(e) => setGlobalFilter(e.target.value)}
//             placeholder="Search..."
//             className="w-full sm:w-72 px-4 py-2 text-sm rounded-lg border border-gray-300
//             focus:outline-none focus:ring-2 focus:ring-indigo-500
//             focus:border-indigo-500"
//           />
//         </div>

//         {/* TABLE */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border-collapse">
//             {/* TABLE HEAD */}
//             <thead className="bg-gray-50 sticky top-0 z-10">
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => (
//                     <th
//                       key={header.id}
//                       onClick={header.column.getToggleSortingHandler()}
//                       className="px-6 py-3 text-left text-xs font-semibold uppercase
//                       tracking-wide text-gray-600 border-b cursor-pointer select-none"
//                     >
//                       {header.isPlaceholder ? null : (
//                         <div className="flex items-center gap-2">
//                           {flexRender(
//                             header.column.columnDef.header,
//                             header.getContext(),
//                           )}

//                           {header.column.getIsSorted() === "asc" && (
//                             <IoArrowUpOutline className="text-indigo-600" />
//                           )}

//                           {header.column.getIsSorted() === "desc" && (
//                             <IoArrowDownOutline className="text-indigo-600" />
//                           )}
//                         </div>
//                       )}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>

//             {/* TABLE BODY */}
//             <tbody className="divide-y divide-gray-200">
//               {table.getRowModel().rows.map((row) => (
//                 <tr
//                   key={row.id}
//                   className="odd:bg-white even:bg-gray-50 hover:bg-indigo-50 transition-colors"
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <td
//                       key={cell.id}
//                       className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap"
//                     >
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext(),
//                       )}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* PAGINATION */}
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-t bg-gray-50">
//           <span className="text-sm text-gray-600">
//             Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
//             <strong>{table.getPageCount()}</strong>
//           </span>

//           <div className="flex gap-2">
//             <button
//               onClick={() => table.setPageIndex(0)}
//               disabled={!table.getCanPreviousPage()}
//               className="px-3 py-1.5 text-sm rounded-md border
//               bg-white hover:bg-indigo-50 hover:text-indigo-600
//               disabled:opacity-50"
//             >
//               ⏮ First
//             </button>

//             <button
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//               className="px-3 py-1.5 text-sm rounded-md border
//               bg-white hover:bg-indigo-50 hover:text-indigo-600
//               disabled:opacity-50"
//             >
//               ◀ Prev
//             </button>

//             <button
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//               className="px-3 py-1.5 text-sm rounded-md border
//               bg-white hover:bg-indigo-50 hover:text-indigo-600
//               disabled:opacity-50"
//             >
//               Next ▶
//             </button>

//             <button
//               onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//               disabled={!table.getCanNextPage()}
//               className="px-3 py-1.5 text-sm rounded-md border
//               bg-white hover:bg-indigo-50 hover:text-indigo-600
//               disabled:opacity-50"
//             >
//               Last ⏭
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BasicTable;
