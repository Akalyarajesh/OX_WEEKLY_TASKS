import { formOptions, useForm } from "@tanstack/react-form";

interface RegisterForm {
  firstName: string;
  lastname: string;
  age: number | undefined;
  email: string;
  password: string;
  confimPassword: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  skills: Array<{
    name: string;
    id: string;
    level: "beginners" | "intermidiate" | "expert";
  }>;
  acceptTerms: boolean;
}

const defaultValues: RegisterForm = {
  firstName: "",
  lastname: "",
  age: undefined,
  email: "",
  password: "",
  confimPassword: "",
  address: {
    street: "",
    city: "",
    state: "",
    zipcode: "",
  },
  skills: [],
  acceptTerms: false,
};

// we can export it and use multiple forms
const formOpt = formOptions({
  defaultValues,
});

const RegisterForm = () => {
  const form = useForm({
    ...formOpt,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  //   console.log(form);
  return (
    <div className="text-start max-w-100 p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field name="firstName">
          {(field) => {
            return (
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  className="p-2 mb-2 w-full border border-black text-black "
                />
              </div>
            );
          }}
        </form.Field>
        <button className="px-3 py-2 border-0 bg-green-600" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
