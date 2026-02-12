import { useMemo } from "react";
import mData from "../MOCK_DATA.json";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";

type Data = {
  id: number;
  first_name: string;
  email: string;
  gender: string;
};

const Table = () => {
  // useMemo for retriving data
  const data = useMemo<Data[]>(() => mData, []);

  const columns: ColumnDef<Data>[] = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Name",
      accessorKey: "first_name",
      footer: "Name",
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
  ];

  const table = useReactTable<Data>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Table;
