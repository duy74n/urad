import { Button } from "@mantine/core"
import { createFileRoute, useLocation, useRouter } from "@tanstack/react-router"
import { useAuth } from "../hooks/useAuth"

export const Route = createFileRoute("/login")({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()
  const location = useLocation()
  const { signIn, signOut, isLogged } = useAuth()

  return (
    <>
      {isLogged() ? (
        <>
          <p className='text-lg font-bold'>Hello user!</p>
          <Button
            onClick={async () => {
              signOut()
              router.invalidate()
              router.navigate({
                to: "/",
                replace: true,
              })
            }}
          >
            Sign out
          </Button>
        </>
      ) : (
        <Button
          onClick={async () => {
            signIn()
            router.invalidate()
            const prevUrl =
              (location.search as { redirect: string })?.redirect || "/"
            router.navigate({
              to: prevUrl,
              replace: true,
            })
          }}
        >
          Sign in
        </Button>
      )}
    </>
  )
}
