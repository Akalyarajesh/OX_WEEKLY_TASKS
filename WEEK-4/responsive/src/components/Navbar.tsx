import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>

        {/* Mobile Burger Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <RxCross2 size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-slate-800 px-4 pb-4 space-y-3">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
