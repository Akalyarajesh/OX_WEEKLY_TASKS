import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </>
  );
};

export default Navbar;
