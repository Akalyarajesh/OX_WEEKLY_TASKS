import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <div className="p-2 flex gap-2 mb-4 bg-orange-500 text-white">
      <Link
        to="/settings"
        activeOptions={{
          exact: true,
        }}
        className="[&.active]:font-bold "
      >
        Setting Home
      </Link>
      <Link to="/settings/login" className="[&.active]:font-bold ">
        Login
      </Link>
      <Link to="/settings/profile" className="[&.active]:font-bold ">
        Profile
      </Link>
    </div>
  );
}
export default Navbar;
