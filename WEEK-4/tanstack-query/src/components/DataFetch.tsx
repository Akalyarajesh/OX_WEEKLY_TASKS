// import { useQuery } from "@tanstack/react-query";
// type Employee = {
//   id: string;
//   name: string;
//   experience?: string;
//   employeeId?: string;
// };

// const fetchEmployees = async (): Promise<Employee[]> => {
//   const res = await fetch(
//     "https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard",
//   );
//   return res.json();
// };

// const DataFetch = () => {
//   const { data, isError, isLoading } = useQuery<Employee[]>({
//     queryKey: ["employees"],
//     queryFn: fetchEmployees,
//   });

//   if (isError) {
//     return <p>Data is not Fetching</p>;
//   }

//   if (isLoading) {
//     return <p>Data is Loading</p>;
//   }
//   return (
//     <>
//       {data?.map((emp) => {
//         return (
//           <div>
//             <h2 key={emp.id}>{emp.name}</h2>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default DataFetch;

import { useQuery } from "@tanstack/react-query";

type Employee = {
  id: string;
  name: string;
  experience?: string;
  employeeId?: string;
  avatar?: string;
};

const fetchEmployees = async (): Promise<Employee[]> => {
  const res = await fetch(
    "https://6969d1fc3a2b2151f8464c46.mockapi.io/profileCard",
  );
  return res.json();
};

const DataFetch = () => {
  const { data, isError, isLoading } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  if (isError) return <p className="text-red-500">Failed to load data</p>;
  if (isLoading) return <p>Loading employees...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Employee Directory
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((emp) => (
          <div
            key={emp.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6"
          >
            {/* Avatar */}
            <div className="flex justify-center">
              <img
                src={
                  emp.avatar ||
                  "https://cdn-icons-png.flaticon.com/512/847/847969.png"
                }
                alt={emp.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            </div>

            {/* Name */}
            <h2 className="text-xl font-semibold text-center mt-4">
              {emp.name}
            </h2>

            {/* Role */}
            <p className="text-gray-500 text-center">Software Engineer</p>

            {/* Divider */}
            <hr className="my-4" />

            {/* Details */}
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Employee ID:</span>{" "}
                {emp.employeeId || "N/A"}
              </p>

              <p>
                <span className="font-medium">Experience:</span>{" "}
                {emp.experience || "0"} Years
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetch;
