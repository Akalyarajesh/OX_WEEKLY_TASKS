// export default function TeamPage() {
//   return <h2 className="mt-2">A Meet our Team</h2>;
// }
import { useQuery } from "@tanstack/react-query";

type Employee = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
  location: {
    country: string;
  };
};

const fetchEmployees = async (): Promise<Employee[]> => {
  const res = await fetch("https://randomuser.me/api/?results=12");
  if (!res.ok) {
    throw new Error("Failed to fetch employees");
  }
  const data = await res.json();
  return data.results;
};

export default function TeamPage() {
  const {
    data: employees,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  if (isLoading) {
    return <p className="text-center mt-10">Loading team...</p>;
  }

  if (isError) {
    return (
      <p className="text-center mt-10 text-red-500">
        {(error as Error).message}
      </p>
    );
  }

  return (
    <div className="p-6">
      {/* Page Heading */}
      <h2 className="text-5xl font-bold mb-2 text-center">Meet Our Team</h2>
      <p className="text-gray-500 mb-10 text-center ">
        Our talented employees who make everything possible
      </p>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees?.map((emp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 text-center"
          >
            {/* Avatar */}
            <img
              src={emp.picture.large}
              alt={`${emp.name.first} ${emp.name.last}`}
              className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
            />

            {/* Name */}
            <h3 className="text-lg font-semibold">
              {emp.name.first} {emp.name.last}
            </h3>

            {/* Country */}
            <p className="text-sm text-gray-500">{emp.location.country}</p>

            {/* Email */}
            <p className="text-sm mt-2 break-all">{emp.email}</p>

            {/* Phone */}
            <p className="text-sm text-gray-600">{emp.phone}</p>

            {/* Button */}
            <button className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
