import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import useDelete from "../customhook/useDelete";
import { schema } from "../schemas/EmployeeFormSchema";
import type { InputValues } from "../schemas/EmployeeFormSchema";

// Typescript
// type InputValues = {
//   name: string;
//   qualification: string;
//   phone: string;
//   role: string;
// };

// Zod Schema
// const schema = z.object({
//   name: z.string().nonempty("Name is required"),
//   qualification: z.string().nonempty("Qualification is required"),
//   phone: z.string().regex(/^[0-9]{10}$/, "Contact must be 10 digit "),
//   role: z.string().nonempty("Role is required"),
// });

// automatically create typescript types
// type InputValues = z.infer<typeof schema>;

const emptyForm: InputValues = {
  name: "",
  qualification: "",
  phone: "",
  role: "",
};

const EmployeeDetails = () => {
  // useState for Submitting Datas
  // const [datas, setDatas] = useState<InputValues[]>([]);

  //   useState for edit
  const [editIndex, setEditIndex] = useState<number | null>(null);

  // useDelete Custom Hook
  const { datas, setDatas, handleDelete } = useDelete<InputValues>();

  // useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputValues>({ resolver: zodResolver(schema) });

  const handleEdit = (index: number) => {
    reset(datas[index]);
    setEditIndex(index);
  };

  const onSubmit = (data: InputValues) => {
    if (editIndex != null) {
      const updated = [...datas];
      updated[editIndex] = data;
      setDatas(updated);
      setEditIndex(null);
    } else {
      setDatas((prev) => [...prev, data]);
    }
    reset(emptyForm);
  };

  //   Delete datas
  // const handleDelete = (index: number) => {
  //   const updatedEmployees = datas.filter((_, i) => i !== index);
  //   setDatas(updatedEmployees);
  // };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Employee Details
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto grid grid-cols-2 gap-4"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Qualification */}
          <div className="flex flex-col">
            <label
              htmlFor="qualification"
              className="mb-1 font-medium text-gray-700"
            >
              Qualification
            </label>
            <input
              type="text"
              {...register("qualification")}
              className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
            />
            {errors.qualification && (
              <p className="text-red-500">{errors.qualification.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phone")}
              className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>

          {/* Role */}
          <div className="flex flex-col">
            <label htmlFor="role" className="mb-1 font-medium text-gray-700">
              Role
            </label>
            <input
              type="text"
              {...register("role")}
              className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
            />
            {errors.role && (
              <p className="text-red-500">{errors.role.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white py-2 font-semibold rounded-lg"
          >
            Submit
          </button>
        </form>

        {/* Employee Table */}
        {datas.length > 0 && (
          <div className="mt-10 bg-white p-6 rounded-xl shadow-md overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4">Employee List</h2>

            <table className="w-full border table-auto">
              <thead className="bg-blue-400 ">
                <tr>
                  <th className="border p-2">Full Name</th>
                  <th className="border p-2">Qualification</th>
                  <th className="border p-2">Phone</th>
                  <th className="border p-2">Role</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {datas.map((emp, index) => (
                  <tr key={index} className="text-center">
                    <td className="border p-2">{emp.name}</td>
                    <td className="border p-2">{emp.qualification}</td>
                    <td className="border p-2">{emp.phone}</td>
                    <td className="border p-2">{emp.role}</td>
                    <td className="border p-2">
                      <span
                        onClick={() => handleDelete(index)}
                        className="bg-blue-400 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600 cursor-pointer"
                      >
                        &times;
                      </span>
                      <span
                        className="bg-blue-400 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                        onClick={() => handleEdit(index)}
                      >
                        &#9998;
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default EmployeeDetails;
