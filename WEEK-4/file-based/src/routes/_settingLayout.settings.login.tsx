import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settingLayout/settings/login")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Settings Login</h1>
    </div>
  );
}
