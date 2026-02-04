import { useState } from "react";
// import {Employee} from"../components/types/Employees";


export interface Employee {
  fullName: string;
  qualification: string;
  phone: string;
  role: string;
}

const EmployeePage = () => {
  const [formData, setFormData] = useState<Employee>({
    fullName: "",
    qualification: "",
    phone: "",
    role: "",
  });

  const [employees, setEmployees] = useState<Employee[]>([]);

  const [editIndex, setEditIndex] = useState<number | null>(null);

  // Empty the Field
  const clearData = {
    fullName: "",
    qualification: "",
    phone: "",
    role: "",
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (index: number) => {
    setFormData(employees[index]);
    setEditIndex(index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate: prevent empty fields
    if (
      !formData.fullName ||
      !formData.qualification ||
      !formData.phone ||
      !formData.role
    ) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updateEditValue = [...employees];
      updateEditValue[editIndex] = formData;
      setEmployees(updateEditValue);
      setEditIndex(null);

      // setEmployees((prev) =>
      //   prev.map((item, index) => (index === editIndex ? formData : item)),
      // );
      // setEditIndex(null);
    } else {
      setEmployees([...employees, formData]);
    }
    setFormData(clearData);
  };

  // Delete employee by index
  const handleDelete = (index: number) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-8">Employee Details</h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto grid grid-cols-2 gap-4"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="fullName" className="mb-1 font-medium text-gray-700">
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none"
          />
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
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter Qualification"
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
          />
        </div>

        {/* Role */}
        <div className="flex flex-col">
          <label htmlFor="role" className="mb-1 font-medium text-gray-700">
            Role
          </label>

          <input
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter Role"
            className="w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none "
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="col-span-2 bg-blue-400 text-white py-2 font-semibold rounded-lg hover:ring-blue-600"
        >
          {editIndex !== null ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      {/* TABLE */}
      {employees.length > 0 && (
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
              {employees.map((emp, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{emp.fullName}</td>
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
  );
};

export default EmployeePage;
