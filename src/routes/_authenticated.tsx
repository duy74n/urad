import { createFileRoute, redirect } from "@tanstack/react-router"

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context, location }) => {
    const { isLogged } = context.authentication
    if (!isLogged()) {
      throw redirect({ to: "/login", search: { redirect: location.href } })
    }
  },
})
