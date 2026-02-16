import { Outlet } from "@tanstack/react-router";

export default function About() {
  return (
    <div className="mt-5">
      {/* <nav>
        <Link to="/about/team">Team</Link>
      </nav> */}
      <Outlet />
    </div>
  );
}
