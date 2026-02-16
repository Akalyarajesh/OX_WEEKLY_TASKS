import { useQuery } from "@tanstack/react-query";

type Employee = {
  id: string;
  name: string;
  experience?: string;
  employeeId?: string;
};

const fetchEmployees = async (): Promise<Employee[]> => {
  const res = await fetch("https://6970b63978fec16a63feb110.mockapi.io/fruits");

  if (!res.ok) {
    throw new Error("Failed to fetch employees");
  }

  return res.json();
};

const DataFetch = () => {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<Employee[]>({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  // 🔹 Loading
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Loading profiles...
      </div>
    );
  }

  // 🔹 Error
  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Failed to load profiles
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((emp) => (
          <div
            key={emp.id}
            className="
              relative group
              rounded-xl p-6
              bg-white/70 backdrop-blur-lg
              border border-gray-200
              shadow-md
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-200/40 to-pink-200/40 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />

            {/* Content */}
            <div className="relative flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-linear-to-r from-indigo-500 to-pink-500 p-1 mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-bold text-indigo-600">
                  {emp.name.charAt(0)}
                </div>
              </div>

              {/* Name */}
              <h2 className="text-lg font-semibold text-gray-800">
                {emp.name}
              </h2>

              {/* Role */}
              <p className="text-sm text-indigo-600 mb-2">
                {emp.employeeId || "Frontend Developer"}
              </p>

              {/* Bio */}
              <p className="text-sm text-gray-600 mb-4">
                {emp.experience
                  ? `${emp.experience} years of experience building modern web apps.`
                  : "Passionate about creating elegant user experiences."}
              </p>

              {/* Stats */}
              <div className="w-full flex justify-between text-center mb-5">
                <div>
                  <p className="font-semibold text-gray-800">1.2k</p>
                  <p className="text-xs text-gray-500">Followers</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">34</p>
                  <p className="text-xs text-gray-500">Projects</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">4.8</p>
                  <p className="text-xs text-gray-500">Rating</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 w-full">
                <button className="flex-1 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 transition">
                  Follow
                </button>

                <button className="flex-1 rounded-lg border border-gray-300 text-gray-700 text-sm py-2 hover:bg-gray-100 transition">
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetch;
