import { Link } from "@tanstack/react-router";

const Nav = () => {
  return (
    <div className="p-2 flex gap-2 mb-4 bg-orange-500 text-white">
      <Link
        to="/settings"
        activeOptions={{
          exact: true,
        }}
        className="[&.active]:font-bold "
      >
        General
      </Link>
      <Link to="/settings/payment" className="[&.active]:font-bold ">
        Payment
      </Link>
      <Link to="/settings/profile" className="[&.active]:font-bold ">
        Profile
      </Link>
    </div>
  );
};

export default Nav;
