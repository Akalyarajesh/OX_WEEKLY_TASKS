import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root-router";
import { homeIndexRoute } from "../modules/home/routes";
import { aboutRoute, aboutTeamRoute } from "../modules/about/routes";

const routeTree = rootRoute.addChildren([
  homeIndexRoute,
  aboutRoute.addChildren([aboutTeamRoute]),
]);

export const router = createRouter({ routeTree });

// for typescript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
