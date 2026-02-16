import { Outlet } from "@tanstack/react-router";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      {/* <nav>
        <Link to="/about/team">Team</Link>
      </nav> */}
      <Outlet />
    </div>
  );
}
