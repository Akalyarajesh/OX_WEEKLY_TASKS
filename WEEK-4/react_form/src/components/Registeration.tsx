import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputvalues = {
  name: string;
  email: string;
  contactNo: string;
  role: string;
};

const schema = z.object({
  name: z.string().nonempty("Name is Required"),
  email: z.email("Invalid Email Address"),
  contactNo: z.string().regex(/^[0-9]{10}$/, "Contact must be 10 digits"),
  role: z.string().nonempty("Role is Required"),
});

const Registeration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputvalues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: Inputvalues) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-gray-50 w-[40vw] p-5 flex flex-col items-center justify-center shadow rounded">
        <h2 className="text-center text-3xl">Registeration Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Name:</label>
            <input
              type="text"
              {...register("name")}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              {...register("email")}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:border-none  focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Contact Number</label>
            <input
              type="text"
              {...register("contactNo")}
              className="w-full border px-4 py-2 rounded focus:outline-none  focus:border-none  focus:ring-2 focus:ring-blue-400"
            />
            {errors.contactNo && (
              <p className="text-red-600">{errors.contactNo.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Role</label>
            <input
              type="text"
              {...register("role")}
              className="w-full border px-4 py-2 rounded focus:outline-none focus:border-none  focus:ring-2 focus:ring-blue-400"
            />
            {errors.role && (
              <p className="text-red-600">{errors.role.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-blue-500 border-none text-white mt-5"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Registeration;
