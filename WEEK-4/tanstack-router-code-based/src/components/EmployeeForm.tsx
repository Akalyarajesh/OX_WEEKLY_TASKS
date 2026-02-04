import { useForm } from "@tanstack/react-form";
import { formSchema, type EmployeeFormValidation } from "../schemas/formSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import TextField from "./form/TextField";
import SelectField from "./form/SelectField";
import TextArea from "./form/TextArea";
import Button from "./form/Button";
import { addEmployee } from "./employeeApi";

const defaultValues: EmployeeFormValidation = {
  id: "",
  name: "",
  fatherName: "",
  email: "",
  phone: "",
  address: "",
  pan: "",
  bloodGroup: "",
  accountNumber: "",
  ifsc: "",
  role: "",
  joiningDate: "",
  gender: "",
  qualification: "",
  dob: "",
};

const EmployeeForm = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      alert("Employee Details Added Successfully");
      // for caching
      queryClient.invalidateQueries({ queryKey: ["employees"] });
    },
  });

  const form = useForm({
    defaultValues,
    validators: {
      onChange: formSchema,
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      // add new employee it will trigger invalidateQueries in mutation
      mutation.mutate(value);
      form.reset();
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault(); //without this zod validation is not showing data is not submitted
          form.handleSubmit();
        }}
        className="max-w-5xl w-full bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <h2 className="md:col-span-2 text-2xl font-bold text-center mb-4">
          Employee Details Form
        </h2>

        {/* id */}
        <form.Field name="id">
          {(field) => (
            <TextField
              field={field}
              name="id"
              label="Id"
              placeholder="Enter Employee id"
            />
          )}
        </form.Field>
        {/* name */}
        <form.Field name="name">
          {(field) => (
            <TextField
              field={field}
              name="name"
              label="Name"
              placeholder="Enter Name"
            />
          )}
        </form.Field>

        {/*father's name */}
        <form.Field name="fatherName">
          {(field) => (
            <TextField
              field={field}
              name="fatherName"
              type="text"
              label="Father's Name"
              placeholder="Enter Father's Name"
            />
          )}
        </form.Field>

        {/* email */}
        <form.Field name="email">
          {(field) => (
            <TextField
              field={field}
              name="email"
              type="text"
              label="Email Id"
              placeholder="Enter Email Id"
            />
          )}
        </form.Field>

        {/*Phone*/}
        <form.Field name="phone">
          {(field) => (
            <TextField
              field={field}
              name="phone"
              label="Phone Number"
              placeholder="Enter Phone Number"
            />
          )}
        </form.Field>

        {/*Role*/}
        <form.Field name="role">
          {(field) => (
            <TextField
              field={field}
              name="role"
              type="text"
              label="Role"
              placeholder="Enter Role"
            />
          )}
        </form.Field>

        {/*Dob*/}
        <form.Field name="dob">
          {(field) => (
            <TextField
              field={field}
              name="dob"
              type="date"
              label="Date of Birth"
              placeholder="Enter DOB"
            />
          )}
        </form.Field>

        {/*joining date*/}
        <form.Field name="joiningDate">
          {(field) => (
            <TextField
              field={field}
              name="joiningDate"
              type="date"
              label="Joining Date"
              placeholder="Enter Joing Date"
            />
          )}
        </form.Field>

        {/* Gender field */}
        <form.Field name="gender">
          {(field) => (
            <SelectField
              field={field}
              name="gender"
              label="Gender"
              placeholder="Select Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ]}
            />
          )}
        </form.Field>

        {/* Blood group*/}
        <form.Field name="bloodGroup">
          {(field) => (
            <SelectField
              field={field}
              name="bloodGroup"
              label="Blood Group"
              placeholder="Select Blood Group"
              options={[
                { label: "A+", value: "A+" },
                { label: "B+", value: "B+" },
                { label: "O+", value: "O+" },
                { label: "O-", value: "O-" },
                { label: "AB+", value: "AB+" },
                { label: "AB-", value: "AB-" },
              ]}
            />
          )}
        </form.Field>

        {/*qualification*/}
        <form.Field name="qualification">
          {(field) => (
            <TextField
              field={field}
              name="qualification"
              type="text"
              label="Qualification"
              placeholder="Enter Qualification"
            />
          )}
        </form.Field>

        {/*pan*/}
        <form.Field name="pan">
          {(field) => (
            <TextField
              field={field}
              name="pan"
              type="text"
              label="Pan Number"
              placeholder="Enter Pan"
            />
          )}
        </form.Field>

        {/*Account Number*/}
        <form.Field name="accountNumber">
          {(field) => (
            <TextField
              field={field}
              name="accountNumber"
              type="text"
              label="Account Number"
              placeholder="Enter Account Number"
            />
          )}
        </form.Field>

        {/*IFSC Number*/}
        <form.Field name="ifsc">
          {(field) => (
            <TextField
              field={field}
              name="ifsc"
              type="text"
              label="IFSC Number"
              placeholder="Enter IFSC Number"
            />
          )}
        </form.Field>

        {/* Address field */}
        <form.Field name="address">
          {(field) => (
            <TextArea
              field={field}
              name="address"
              label="Address"
              placeholder="Enter Address"
              rows={3}
            />
          )}
        </form.Field>

        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
};

export default EmployeeForm;
