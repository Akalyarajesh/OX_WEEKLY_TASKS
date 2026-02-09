import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";

const rootRoute = createRootRoute({
  component: App,
});

// public route

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: Settings,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, settingsRoute]);

export const router = createRouter({
  routeTree,
});

// for typescript
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
