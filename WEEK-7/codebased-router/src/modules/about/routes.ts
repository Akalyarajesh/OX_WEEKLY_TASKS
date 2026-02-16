import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { rootRoute } from "../../router/root-router";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazyRouteComponent(() => import("./pages/details")),
});

export const aboutTeamRoute = createRoute({
  getParentRoute: () => aboutRoute,
  path: "team",
  component: lazyRouteComponent(() => import("./pages/team")),
});

export const aboutCompanyRoute = createRoute({
  getParentRoute: () => aboutRoute,
  path: "company",
  component: lazyRouteComponent(() => import("./pages/company")),
});
