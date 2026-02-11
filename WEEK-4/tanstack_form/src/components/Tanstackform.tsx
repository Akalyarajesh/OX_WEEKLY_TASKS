import { useForm } from "@tanstack/react-form";
import { formSchema } from "../schemas/formSchema";
import type { EmployeeForm } from "../schemas/formSchema";
import TextField from "./form/TextField";

const defaultValues: EmployeeForm = {
  name: "",
  email: "",
  age: "",
};
const Tanstackform = () => {
  const form = useForm({
    defaultValues,
    validators: {
      // onChange: formSchema,
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);

      alert("Employee added successfully");

      form.reset();
    },
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {/* <form.Field
          name="name"
          children={({ state, handleChange, handleBlur }) => (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md "
              />

              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p className="text-small text-red-500">
                  {state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        /> */}

        <form.Field name="name">
          {(field) => (
            <TextField field={field} label="Name" placeholder="Enter name" />
          )}
        </form.Field>

        <form.Field
          name="email"
          children={({ state, handleChange, handleBlur }) => (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />

              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p className="text-small text-red-500">
                  {state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        />
        <form.Field
          name="age"
          children={({ state, handleChange, handleBlur }) => (
            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-gray-700 font-semibold mb-1"
              >
                Age
              </label>
              <input
                id="age"
                type="text"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                onBlur={handleBlur}
                placeholder="Enter your age"
                className="w-full px-4 py-2 border border-gray-300 rounded-md "
              />

              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p className="text-small text-red-500">
                  {state.meta.errors[0]?.message}
                </p>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tanstackform;
