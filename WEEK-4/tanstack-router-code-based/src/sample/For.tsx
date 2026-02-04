import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type FormData = {
  id: string;
  name: string;
  fatherName: string;
  email: string;
  phone: string;
  address: string;
  pan: string;
  bloodGroup: string;
  accountNumber: string;
  ifsc: string;
  role: string;
  joiningDate: string;
  gender: string;
  qualification: string;
  dob: string;
};

const EmployeeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    id: "",
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    address: "",
    pan: "",
    bloodGroup: "",
    accountNumber: "",
    ifsc: "",
    role: "",
    joiningDate: "",
    gender: "",
    qualification: "",
    dob: "",
  });

  const { id } = useParams();

  //  Load data for edit
  useEffect(() => {
    if (id) {
      const employees = JSON.parse(localStorage.getItem("employees") || "[]");
      const emp = employees.find((e: FormData) => e.id === id);
      console.log(employees);
      console.log(emp);
      if (emp) setFormData(emp);
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem("employees") || "[]");
    let updatedEmployees;

    if (id) {
      //  EDIT
      updatedEmployees = employees.map((emp: FormData) =>
        emp.id === id ? formData : emp,
      );
      alert("Employee details updated successfully ");
    } else {
      //  ADD
      updatedEmployees = [...employees, formData];
      alert("Employee details added successfully ");

      // Optional: clear form after add
      setFormData({
        id: "",
        name: "",
        fatherName: "",
        email: "",
        phone: "",
        address: "",
        pan: "",
        bloodGroup: "",
        accountNumber: "",
        ifsc: "",
        role: "",
        joiningDate: "",
        gender: "",
        qualification: "",
        dob: "",
      });
    }

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl w-full bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <h2 className="md:col-span-2 text-2xl font-bold text-center mb-4">
          Employee Details Form
        </h2>

        <div>
          <label className="block mb-1 font-medium">Employee ID</label>
          <input
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Father's Name</label>
          <input
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Role</label>
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Qualification</label>
          <input
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">PAN Number</label>
          <input
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Blood Group</label>
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="">Select</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Account Number</label>
          <input
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">IFSC Code</label>
          <input
            name="ifsc"
            value={formData.ifsc}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;