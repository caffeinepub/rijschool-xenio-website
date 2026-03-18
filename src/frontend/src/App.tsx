import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { HomePage } from "./pages/HomePage";
import { SpecialGuidancePage } from "./pages/SpecialGuidancePage";
import { SpecializedSupportPage } from "./pages/SpecializedSupportPage";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const specializedSupportRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gespecialiseerde-ondersteuning",
  component: SpecializedSupportPage,
});

const specialGuidanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/speciale-begeleiding",
  component: SpecialGuidancePage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  specializedSupportRoute,
  specialGuidanceRoute,
]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
