import { createFileRoute, Outlet } from "@tanstack/react-router";
import Nav from "./-components/Nav";

export const Route = createFileRoute("/_settingsLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="text-3xl">Settings Layout</h1>
      <Nav />
      <Outlet />
    </div>
  );
}
