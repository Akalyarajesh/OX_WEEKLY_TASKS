import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { fetchEmployees } from "../components/employeeApi";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { TbEdit } from "react-icons/tb";
import { deleteEmployee } from "../components/employeeApi";
import { useNavigate } from "@tanstack/react-router";

const Profile = () => {
  const { id } = useParams({ from: "/profile/$id" });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: employees = [], isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const employee = employees.find((emp) => emp.id === id);

  const deleteMutation = useMutation({
    mutationFn: deleteEmployee,
    onSuccess: () => {
      // Refresh employees list
      queryClient.invalidateQueries({ queryKey: ["employees"] });
      // Go back after delete
      navigate({ to: "/" });
    },
  });

  if (isLoading) {
    return <div className="text-center mt-20 text-gray-500">Loading...</div>;
  }

  if (!employee) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        Employee not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow overflow-hidden">
        {/* Top Profile Section */}
        <div className="bg-linear-to-r from-indigo-600 to-blue-600 p-8 text-white flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 rounded-full bg-white text-indigo-600 flex items-center justify-center text-4xl font-bold">
              {employee.name.charAt(0)}
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold">{employee.name}</h2>
              <p className="opacity-90">{employee.role}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  ID: {employee.id}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {employee.gender}
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {employee.bloodGroup}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <TbEdit
              size={22}
              className="cursor-pointer hover:text-indigo-600"
              onClick={() =>
                navigate({
                  to: "/",
                  params: { id: employee.id },
                })
              }
            /> */}
        {/* About Section */}
        <div className="p-8 border-b">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Personal Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-medium">Email:</span> {employee.email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {employee.phone}
            </p>
            <p>
              <span className="font-medium">Date of Birth:</span> {employee.dob}
            </p>
            <p>
              <span className="font-medium">Father’s Name:</span>
              {employee.fatherName}
            </p>
            <p>
              <span className="font-medium">Qualification:</span>
              {employee.qualification}
            </p>
            <p>
              <span className="font-medium">Joining Date:</span>
              {employee.joiningDate}
            </p>
          </div>
        </div>

        {/* Work & Bank Details */}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Work Details
            </h3>
            <p>
              <span className="font-medium">Role:</span> {employee.role}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Bank Details
            </h3>
            <p className="mb-2">
              <span className="font-medium">Account No:</span>
              {employee.accountNumber}
            </p>
            <p className="mb-2">
              <span className="font-medium">IFSC:</span> {employee.ifsc}
            </p>
            <p>
              <span className="font-medium">PAN:</span> {employee.pan}
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="p-8 bg-gray-50">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Address</h3>
          <p className="text-gray-700">{employee.address}</p>
          <div>
            {" "}
            <button
              onClick={() => {
                if (confirm("Delete this employee profile?")) {
                  deleteMutation.mutate(employee.id);
                }
              }}
              className="text-red-600 hover:text-red-800 transition"
              title="Delete Employee"
            >
              <RiDeleteBin6Line size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
