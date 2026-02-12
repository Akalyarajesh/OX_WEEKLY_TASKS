import { formOptions, useForm, useStore } from "@tanstack/react-form";

interface RegisterForm {
  firstName: string;
  lastName: string;
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
  lastName: "",
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
  skills: [
    {
      name: "HTML",
      id: crypto.randomUUID(),
      level: "beginners",
    },
    {
      name: "CSS",
      id: crypto.randomUUID(),
      level: "beginners",
    },
    {
      name: "JavaScript",
      id: crypto.randomUUID(),
      level: "beginners",
    },
  ],
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
      // form.reset();
    },
    listeners: {
      onChange: ({ formApi, fieldApi }) => {
        console.log(formApi, fieldApi);
      },
    },
  });
  //   console.log(form);

  //   useStore
  const values = useStore(form.store, (state) => state.values);
  // const isDirty = useStore(form.store, (state) => state.isDirty);
  return (
    <div className="text-start max-w-100 p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {/* <p className="text-4xl text-pink-500  mb-5">{JSON.stringify(values,null,2)}</p> */}
        <pre className="text-4xl text-pink-500  mb-5">
          {JSON.stringify(values, null, 2)}
        </pre>

        {/* <p>{isDirty ? "Dirty" : "Pristine"}</p> */}
        <form.Field
          name="firstName"
          listeners={{
            onChange: ({ value }) => {
              if (!value) {
                form.setFieldValue("lastName", "");
              }
            },
          }}
        >
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
        <form.Subscribe selector={(state) => state.values.firstName}>
          {(firstName) => (
            <>
              {firstName && (
                <form.Field name="lastName">
                  {(field) => {
                    return (
                      <div>
                        <label htmlFor="lastName">Last Name</label>
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
              )}
            </>
          )}
        </form.Subscribe>
        {/* Address Street */}
        <form.Field name="address.street">
          {(field) => {
            return (
              <div>
                <label htmlFor="street">Street</label>
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

        {/* Skills */}

        <form.Field name="skills" mode="array">
          {(field) => {
            return (
              <div>
                Skills
                <div>
                  {field.state.value.map((skill, index) => (
                    <div key={index}>
                      {skill.name} - {skill.level}
                      <button
                        className="bg-red-800 p-2 m-1 text-white"
                        onClick={() => field.removeValue(index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  className="bg-indigo-700 p-2 mb-2"
                  onClick={() =>
                    field.pushValue({
                      name: `New Value ${field.state.value.length + 1}`,
                      id: crypto.randomUUID(),
                      level: "beginners",
                    })
                  }
                >
                  Add Skill
                </button>
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
