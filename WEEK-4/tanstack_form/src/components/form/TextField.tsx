import type { AnyFieldApi } from "@tanstack/react-form";

type TextFieldProps = {
  field: AnyFieldApi;
  label: string;
  type?: string;
  placeholder?: string;
};

function TextField({
  field,
  label,
  type = "text",
  placeholder,
}: TextFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-1">{label}</label>

      <input
        type={type}
        value={field.state.value as string}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
      />

      {field.state.meta.errors.length > 0 && (
        <p className="text-red-500 text-sm mt-1">
          {field.state.meta.errors[0]?.message}
        </p>
      )}
    </div>
  );
}

export default TextField;
