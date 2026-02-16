import { Link } from "@tanstack/react-router";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-white p-2">
      <h1 className="text-2xl font-bold text-center mb-5">
        File Based Routing
      </h1>
      {/*  navigation bar */}
      <div className="p-2 flex gap-2 mb-4 bg-teal-500 text-white">
        <Link to="/" className="[&.active]:font-bold ">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold ">
          About
        </Link>
        <Link to="/settings" className="[&.active]:font-bold ">
          Settings
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools position="top-right" />
    </div>
  );
}
