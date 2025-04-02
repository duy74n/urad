import { RouterProvider, createRouter } from "@tanstack/react-router"

// Import the generated route tree
import { routeTree } from "../routeTree.gen"

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <h1>Global 404 Not Found</h1>,
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const AppRoute = () => {
  return <RouterProvider router={router} />
}

export default AppRoute
