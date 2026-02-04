import type { AnyFieldApi } from "@tanstack/react-form";

type SelectFieldProps = {
  field: AnyFieldApi;
  name: string;
  label: string;
  options: { label: string; value: string }[];
  placeholder?: string; // optional default option
};

function SelectField({ field, name, label, options, placeholder }: SelectFieldProps) {
  const hasError = field.state.meta.errors.length > 0;

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <select
        name={name}
        value={field.state.value as string}
        onChange={(e) => field.handleChange(e.target.value)}
        onBlur={field.handleBlur}
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
          hasError
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-black-500"
        }`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {hasError && (
        <p className="text-red-500 text-sm mt-1">
          {field.state.meta.errors[0]?.message}
        </p>
      )}
    </div>
  );
}

export default SelectField;
