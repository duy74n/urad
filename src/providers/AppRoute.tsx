import { RouterProvider, createRouter } from "@tanstack/react-router"

import { useAuth } from "../hooks/useAuth"
// Import the generated route tree
import { routeTree } from "../routeTree.gen"

// Create a new router instance
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <h1>Global 404 Not Found</h1>,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  context: { authentication: undefined! },
})

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const AppRoute = () => {
  const authentication = useAuth()

  return (
    <RouterProvider
      router={router}
      context={{ authentication }}
    />
  )
}

export default AppRoute
