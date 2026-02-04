import { createFileRoute, Outlet } from "@tanstack/react-router";
import Nav from "../../routes/-components/Nav";

export const Route = createFileRoute("/_settingsLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/settings/"!
      <Nav />
      <Outlet />
    </div>
  );
}
