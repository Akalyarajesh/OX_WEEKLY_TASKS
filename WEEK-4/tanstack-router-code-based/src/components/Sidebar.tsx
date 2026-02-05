// import { Link } from "@tanstack/react-router";

// const Sidebar = () => {
//   return (
//     <div className="hidden sm:block w-[20vw] h-screen bg-gray-900 fixed left-0 top-0 p-5">
//       <h2 className="text-white text-3xl text-center mb-5">Employee Portal</h2>
//       <div className="flex flex-col text-white gap-y-2">
//         <Link
//           to="/"
//           className="px-6 py-3 rounded transition-all duration-300 ease-in-out
//                      hover:bg-gray-700
//                      [&.active]:bg-gray-700"
//         >
//           Add Employee
//         </Link>
//         <Link
//           to="/employees"
//           className="px-6 py-3 rounded transition-all duration-300 ease-in-out
//                      hover:bg-gray-700
//                      [&.active]:bg-gray-700"
//         >
//           Employee List
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { SiGoogleforms } from "react-icons/si";
import { MdOutlinePeople } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*BURGER BUTTON (MOBILE)  */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden  mb-5 fixed top-4 left-4 z-50 text-white bg-linear-to-r from-indigo-600 to-blue-600 p-2 rounded-md shadow"
      >
        <FiMenu size={22} />
      </button>

      {/*OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}

      {/*SIDEBAR */}
      <div
        className={`
        fixed top-0 left-0 h-screen w-[70vw] sm:w-[20vw]
        bg-gray-900 p-5 z-50
        transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-2xl">Employee Portal</h2>

          {/* Close icon */}
          <button
            onClick={() => setOpen(false)}
            className="sm:hidden text-white"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col text-white gap-y-2">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-6 py-3 rounded transition
             hover:bg-gray-700
             [&.active]:bg-linear-to-r from-indigo-600 to-blue-600"
          >
            <SiGoogleforms className="text-xl text-white font-bold" />
            <span className="text-sm font-medium">Add Employee</span>
          </Link>

          <Link
            to="/employees"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-6 py-3 rounded transition
             hover:bg-gray-700
             [&.active]:bg-linear-to-r from-indigo-600 to-blue-600"
          >
            <MdOutlinePeople className="text-xl text-white" />
            <span className="text-sm font-medium">Employee List</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
