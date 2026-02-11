import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settingLayout/settings/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Settings Home</h1>
    </div>
  );
}
