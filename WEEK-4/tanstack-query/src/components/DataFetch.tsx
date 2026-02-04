import { useQuery } from "@tanstack/react-query";
type Employee = {
  id: string;
  name: string;
  experience?: string;
  employeeId?: string;
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

  if (isError) {
    return <p>Data is not Fetching</p>;
  }

  if (isLoading) {
    return <p>Data is Loading</p>;
  }
  return (
    <>
      {data?.map((emp) => {
        return (
          <div>
            <h2 key={emp.id}>{emp.name}</h2>
          </div>
        );
      })}
    </>
  );
};

export default DataFetch;
