import { createFileRoute, Outlet } from "@tanstack/react-router";
import Navbar from "./components/Navbar";

export const Route = createFileRoute("/_settingLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
