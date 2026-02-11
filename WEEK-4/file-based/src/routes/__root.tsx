import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <h1>Root Route</h1>
      <div className="p-2 flex gap-2 mb-4 bg-teal-500 text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="top-right" />
    </div>
  );
}
