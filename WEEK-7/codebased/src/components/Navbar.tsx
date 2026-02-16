import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <div className="border-b p-3 bg-white border-gray-200">
      <span className="px-2 font-bold text-xl">OX Bema V2</span>
      <Link to="/" className="px-5 hover:underline">
        Dashboard
      </Link>
      <Link to="/employee" className="px-5 hover:underline">
        Employees
      </Link>
    </div>
  );
};

export default Navbar;
