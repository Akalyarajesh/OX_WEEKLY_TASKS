import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./App";
import Dashboard from "./modules/Dashboard";
import Employee from "./modules/Employee";

const rootRoute = createRootRoute({
  component: App,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

const employeeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employee",
  component: Employee,
});

const routeTree = rootRoute.addChildren([dashboardRoute, employeeRoute]);

export const router = createRouter({
  routeTree,
});

// for typescript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
