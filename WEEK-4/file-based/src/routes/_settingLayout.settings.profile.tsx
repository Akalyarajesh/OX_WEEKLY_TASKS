import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settingLayout/settings/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Settings Profile</h1>
    </div>
  );
}
