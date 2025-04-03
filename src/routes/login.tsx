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
      <h2>Login Page</h2>
      {isLogged() ? (
        <>
          <p>Hello user!</p>
          <button
            type='button'
            onClick={async () => {
              signOut()
              router.invalidate()
              router.navigate({
                to: "/",
                replace: true,
              })
            }}
            className='border border-amber-500 p-2 cursor-pointer'
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          type='button'
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
          className='border border-amber-500 p-2 cursor-pointer'
        >
          Sign in
        </button>
      )}
    </>
  )
}
