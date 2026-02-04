type ButtonFieldProps = {
  label: string; // Text to show on the button
  type?: "button" | "submit" | "reset"; // Button type
  onClick?: () => void; // Optional click handler
  fullWidth?: boolean; // Make button take full width
  disabled?: boolean; // Optional disabled state
};

function Button({
  label,
  type = "button",
  onClick,
  disabled = false,
}: ButtonFieldProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="md:col-span-2 bg-linear-to-r from-indigo-600 to-blue-600 text-white py-2 rounded hover:bg-linear-to-r hover:from-indigo-700 hover:to-blue-700"
    >
      {label}
    </button>
  );
}

export default Button;
