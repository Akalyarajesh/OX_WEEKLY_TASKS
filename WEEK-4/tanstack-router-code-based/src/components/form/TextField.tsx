import type { AnyFieldApi } from "@tanstack/react-form";

type TextFieldProps = {
  field: AnyFieldApi;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

function TextField({
  field,
  name,
  label,
  type = "text",
  placeholder,
}: TextFieldProps) {
  const hasError = field.state.meta.errors.length > 0;

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <input
        type={type}
        name={name}
        value={field.state.value as string}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
          hasError
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-black-500"
        }`}
      />

      {hasError && (
        <p className="text-red-500 text-sm mt-1">
          {field.state.meta.errors[0]?.message}
        </p>
      )}
    </div>
  );
}

export default TextField;
