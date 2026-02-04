import React from "react";

export type Option = {
  label: string;
  value: string;
};

export type InputType = "text" | "number" | "select" | "radio";

export type InputFieldProps = {
  label: string;
  name: string;
  type: InputType;
  value?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  options?: Option[];
  error?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  options,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      {/* SELECT */}
      {type === "select" && (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        >
          <option value="">Select {label}</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {/* RADIO */}
      {type === "radio" && (
        <div className="flex gap-4">
          {options?.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2">
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={onChange}
                className={`accent-blue-600 ${error ? "border-red-500" : ""}`}
              />
              <span className="text-sm">{opt.label}</span>
            </label>
          ))}
        </div>
      )}

      {/* TEXT / NUMBER */}
      {(type === "text" || type === "number") && (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border rounded-md px-3 py-2 focus:outline-none focus:ring-2 ${
            error ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
        />
      )}

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputField;
