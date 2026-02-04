import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Set Schema
const schema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be atleast 6 characters"),
  contactNo: z.string().regex(/^[0-9]{10}$/, "Contact must be 10 digits"),
});

type FormValues = {
  name: string;
  email: string;
  password: string;
  contactNo: string;
};

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  //   print what data comes
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input type="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Contact No:</label>
          <input type="text" {...register("contactNo")} />

          {errors.contactNo && <p>{errors.contactNo.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignupForm;

// without zod react hook form

/**<>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            {...register("name", { required: "name is required" })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters long",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="text"
            {...register("contactNo", {
              required: "Contact Number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Contact must be 10 digits",
              },
            })}
          />

          {errors.contactNo && <p>{errors.contactNo.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </> */
