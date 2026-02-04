import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import App from "./App";
import EmployeeTable from "./pages/EmployeeTable";

// root route
const rootRoute = createRootRoute({
  component: App,
});

// public route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const employeeTableRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/employees",
  component: EmployeeTable,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: Settings,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile/$id",
  component: Profile,
});

// Route tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  employeeTableRoute,
  settingsRoute,
  profileRoute,
]);

export const router = createRouter({
  routeTree,
});

// for typescript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
