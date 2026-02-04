import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// ----------------- for code based router ----------------------------
// import {
//   createRootRoute,
//   createRoute,
//   createRouter,
//   Link,
//   Outlet,
//   RouterProvider,
// } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
// import App from './App.tsx'

// const rootRoute = createRootRoute({
//   component: () => {
//     return (
//       <div className="bg-blue-950 p-2">
//         <h1 className="text-2xl font-bold">Root Route</h1>
//         {/*  navigation bar */}
//         <div className="p-2 flex gap-2 mb-4 bg-teal-500 text-white">
//           <Link to="/" className="[&.active]:font-bold ">
//             Home
//           </Link>
//           <Link to="/about" className="[&.active]:font-bold ">
//             About
//           </Link>
//         </div>
//         <Outlet />
//         <TanStackRouterDevtools position="top-right" />
//       </div>
//     );
//   },
// });

// const indexRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/",
//   component: function Index() {
//     return (
//       <div className="p-2 bg-violet-500">
//         <h3 className="text-xl font-bold">Home</h3>
//       </div>
//     );
//   },
// });

// const aboutRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/about",
//   component: function Index() {
//     return (
//       <div className="p-2 bg-amber-600">
//         <h3 className="text-xl font-bold">About</h3>
//       </div>
//     );
//   },
// });

// const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);
// const router = createRouter({ routeTree });

//  ---------------------------------------------------------------------

const router = createRouter({ routeTree });

// Achieve type Safety via tanstack
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
