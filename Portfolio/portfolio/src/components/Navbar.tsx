import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-white md:w-160 absolute right-0 top-0  md:m-5 ">
        <div className="flex gap-2 p-2 text-sm md:text-md md:gap-10 justify-end md:justify-center">
          <Link to="">Home</Link>
          <Link to="">Project</Link>
          <Link to="">About</Link>
          <Link to="">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
